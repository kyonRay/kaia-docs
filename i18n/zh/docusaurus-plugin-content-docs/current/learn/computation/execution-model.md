# Execution Model

This page describes the execution model, the data structures, and the life cycle of Kaia smart contracts.

## Execution Model <a id="execution-model"></a>

Transactions can be generated by platform APIs as described in [Platform API Specification](../../../references/json-rpc/klay/account-created). These transactions are sent to _Consensus Nodes \(CNs\)_ to be stored in a block. The CNs check whether each received transaction is valid. Valid transactions are stored in the transaction pool; otherwise, they are discarded. A CN selects the executable transactions in the current block in its transaction pool and executes them one by one.

To execute a transaction, the sender must pay some amount of KAIA as a transaction fee. This transaction fee in KAIA is calculated based on gas and a multiplier, _i.e._, unit price. A gas is the fundamental unit of computation. Every operation executed on a Kaia node consumes a predefined amount of gas. The exact amount of KAIA required for the transaction is calculated by the formula illustrated in [Transaction Fees](../transaction-fees/transaction-fees.md). The transaction can fail if the sender submits a transaction accompanied by insufficient gas. A transaction can also fail if the sender's account has an insufficient balance.

When a transaction is executed successfully, it is included in the current block. A CN gathers transactions until it reaches block gas limit or block time limit. Then, the CN makes a block with the transactions. This step requires filling several fields in the block. For example, it must calculate the hash values of transactions, receipts, state, etc. After all required fields have been completed, the CN generates a block hash.

When block generation is complete, the block is propagated to all the other CNs. The other CNs all verify the propagated block and reach consensus on the verification results by using the BFT consensus algorithm. When the verification process completes successfully by the majority of CNs, the block is stored in the blockchain. Because the BFT consensus algorithm satisfies the immediate finality property, the block is final and will never be removed. After a block is finalized, the execution of all the transactions in that block are irreversibly guaranteed, and their execution results can be returned to the sender if requested.

## Enhanced Randomness in Block Proposer and Committee Selection <a id="enhanced-randomness-in-block-proposer-and-committee-selection"></a>

Kaia has implemented a new mechanism to introduce verifiable on-chain randomness in the block proposer and committee selection processes. This mechanism involves two new fields in the block header: `randomReveal` and `mixHash`.

In this system, block proposers generate and commit to random values. The `randomReveal` field in a block contains the proposer's signature, generated using a specific signature scheme, and is calculated based on the current block number being proposed. The `mixHash` is then computed using this revealed random value along with other block data, creating a source of randomness for the network.

The block proposer and committee selection processes utilize this generated randomness. The use of this randomness aims to make the selection processes more unpredictable and fair, enhancing the overall security of the network. One particular use case for this mechanism is allowing block proposers to remain private until the previous block is completed, adding an extra layer of security to the network.

The execution flow creates a cycle where each block's randomness influences future block proposer and committee selections. This introduces an element of unpredictability to these processes while maintaining their verifiability.

It's important to note that while this randomness is used in selection processes, rewards are still distributed at the end of block mining by directly modifying states, based on staking amounts. The randomness determines which validators are selected to be part of the committee that receives rewards, not the amount of rewards distributed.

Several security considerations are crucial to this mechanism:

- To prevent replay attacks, each `randomReveal` value must be unique for each block.
- Block proposers must honestly generate and submit their `randomReveal` to prevent manipulation of the `mixHash`.
- Proposers must keep their `randomReveal` secret until the block proposal to prevent prediction and potential manipulation by other participants.
- The `randomReveal` must be properly signed and validated to prevent tampering.

This mechanism aims to introduce unpredictability in the block creation and committee selection processes while maintaining verifiability. It's important to note that while this system provides a framework for enhanced randomness, the specific implementations of proposer and committee selection algorithms using this randomness may evolve over time as the network develops and improves.

### Restrictions on Transaction Execution <a id="restrictions-on-transaction-execution"></a>

Kaia Mainnet and Kairos Testnet currently have the following restrictions on the transaction execution:

- You can set gasPrice of the transaction, but it means it's the most you can pay. The actual gasPrice will be determined by network. For more detailed information, see [gas price overview](../transaction-fees/transaction-fees.md#gas-price-overview)
- A transaction which has bigger execution cost than the computation cost limit will be discarded. Please refer to [computation cost](./computation-cost.md)
- As of the Shanghai hardfork, there is an additional gas cost for contract creation based on the length of the initcode, charged at 2 gas for every 32-byte chunk of initcode.

### Restrictions on Smart Contract Deployment <a id="restriction-on-smart-contract-deployment"></a>

Kaia implements several restrictions on smart contract deployment:

- As of the Kore hardfork, deployment of new contract code starting with the 0xEF byte is not allowed, as per [EIP-3541](https://eips.ethereum.org/EIPS/eip-3541).
- Since the Shanghai hardfork:
  - Deployment of new contract code is rejected if the initcode length exceeds 49,152 bytes.
  - The length of the new contract code cannot exceed 24,576 bytes.
  - These limitations are based on [EIP-3860](https://eips.ethereum.org/EIPS/eip-3860).
  - Smart contract account (SCA) overwriting over externally owned accounts (EOA) is enabled.

## Data Structures <a id="data-structures"></a>

### Account <a id="account"></a>

An account in Kaia blockchain platform is a data structure containing information about a person's balance or a smart contract. Kaia redesigns its account model to provide better DX and UX. Detailed information about the account model can be found [here](../accounts.md).

### Transaction <a id="transaction"></a>

A transaction in a blockchain platform is a message sent between nodes that changes the state of the blockchain. Kaia also redesigns its transaction model. Transactions are separated into various types according to their own purposes to find chances of performance optimization and to support the redesigned account model. Detailed information about the transaction model can be found [here](../transactions/transactions.md).

### State <a id="state"></a>

Kaia's **state** is a collection of account states. This state must be the same across Kaia nodes if they have processed the same blocks in the same order. The state is changed when a transaction is executed on a Kaia node.

The table below shows the account data that are stored in the state.

| Component   | Description                                                                                                                                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nonce       | An integer value indicating the number of transactions executed by this account. When submitting a transaction, the nonce of the transaction should be equal to the account's nonce.                                    |
| balance     | An integer value showing the amount of KAIA that this account currently has.                                                                                                                                                            |
| storageRoot | A 256-bit hash of the root of the Merkle Patricia Trie that contains the values of all the storage variables in the account.                                                                                                            |
| codeHash    | The hash of the account's bytecode.  This value is immutable, which means it is set only when the smart contract is created.  If the account is an EOA or an EA, this value is set to the hash of null. |

### Block <a id="block"></a>

A block is a crucial element of the Kaia blockchain because the blockchain literally consists of a chain of blocks. The table below shows the components in a block.

| Component        | Description                                                                                                                                         |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| baseFeePerGas    | The base fee per gas. This value is returned only when EthTxTypeCompatibleBlock is activated for that block number. |
| blockScore       | Former difficulty. Always 1 in the BFT consensus engine                                                                             |
| extraData        | The "extra data" field of this block.                                                                                               |
| gasUsed          | The total used gas by all transactions in this block.                                                                               |
| governanceData   | RLP encoded governance configuration                                                                                                                |
| logsBloom        | The bloom filter for the logs of the block. `null` when it is pending block.                                        |
| number           | The block number. `null` when it is pending block.                                                                  |
| parentHash       | The hash of the block's parent block.                                                                                               |
| proposer         | The address of the block proposer.                                                                                                  |
| receiptsRoot     | The root of the receipts trie of the block.                                                                                         |
| reward           | The address receiving block reward.                                                                                                 |
| size             | Integer the size of this block in bytes.                                                                                            |
| stateRoot        | The root of the final state trie of the block.                                                                                      |
| totalBlockScore  | Integer of the total blockScore of the chain until this block.                                                                      |
| transactionsRoot | The root of the transaction trie of the block.                                                                                      |
| timestamp        | The Unix timestamp for when the block was collated.                                                                                 |
| timestampFoS     | The fraction of a second of the timestamp for when the block was collated.                                                          |
| transactions     | Array of transaction objects, or 32-byte transaction hashes depending on the last given parameter.                                  |
| voteData         | RLP encoded governance vote of the proposer                                                                                                         |

## Smart Contract <a id="smart-contract"></a>

A _smart contract_ consists of a collection of code \(functions\) and data \(state\) that resides at a specific address on the Kaia blockchain. Contract accounts are able to pass messages between each other as well as perform practically Turing complete computation. Contracts exist on the blockchain in Kaia-specific binary formats. Currently, Kaia supports one binary format --Ethereum Virtual Machine \(EVM\) bytecode; however, other formats will be supported in the future.

### Creating Smart Contracts <a id="creating-smart-contracts"></a>

A smart contract can be created in the Kaia blockchain by sending a transaction to an empty address with the binary as data. The binary can be in various formats; however, Kaia currently supports one binary format, EVM bytecode. It is worth pointing out that this transaction requires a payment for execution. The account balance on the sender's account will be reduced according to the transaction fee model after the transaction has been stored in a block. After some time, the transaction should appear in a block, which confirms that the state it entails reached a consensus. At this point, the smart contract now exists in the Kaia blockchain.

### Executing Smart Contracts <a id="executing-smart-contracts"></a>

A function of a smart contract can be called and executed either by sending a transaction to the smart contract or by calling the function locally in the node. When a function is called by sending a transaction, the function is executed by processing a transaction. This entails a cost in KAIA for sending the transaction, and the call will be recorded forever on the blockchain. The return value of calls made in this manner is the hash of the transaction. When the function is invoked locally, it is executed locally in the Kaia Virtual Machine \(KVM\), and the call returns the return value of the function. Calls made in this manner are not recorded on the blockchain; thus, they cannot modify the internal state of the contract. This type of call is referred to as a constant function call. Calls made in this manner do not cost any KAIA. Constant function calls should be used when only the return value is of interest, while a transaction should be used when side effects on the contract state are of interest.

When executing a smart contract function through a transaction, gas costs are incurred. The exact gas cost depends on the operations performed by the function and is calculated based on predefined gas costs for each EVM operation.

### Disabling Smart Contracts <a id="disabling-smart-contracts"></a>

Because smart contracts exist in the Kaia blockchain, they cannot be deleted; they can only be disabled. For now, Kaia has adopted the same process for disabling a Kaia smart contract as is used for disabling smart contracts in Ethereum. For example, the Kaia smart contract for KLVM can be disabled by using the [`selfdestruct(address recipient)`](https://solidity.readthedocs.io/en/v0.5.6/introduction-to-smart-contracts.html#self-destruct) call in Solidity \(or the KLVM opcode `SELFDESTRUCT`\). The Kaia team will also provide ways to disable smart contracts for other execution environments.

### Upgrading Smart Contracts <a id="upgrading-smart-contracts"></a>

Kaia will provide ways to upgrade a deployed smart contract to address the inconvenient user experience with existing blockchains. For example, deployed services on blockchains are difficult to upgrade. Kaia will provide frameworks and smart contract libraries to enable service providers \(SPs\) to upgrade deployed services and migrate service information. Kaia will provide this feature carefully by considering the following requirements.

- Only authorized accounts or the owner of a smart contract should be able to upgrade the smart contract.
- Upgraded smart contracts should be able to manipulate existing data maintained by the old smart contract.
- Other smart contracts that refer to the old smart contracts should be able to determine whether to use newer, upgraded versions of those smart contracts.