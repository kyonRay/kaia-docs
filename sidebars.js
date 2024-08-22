// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

/** (old) auto-generated config
const sidebars = {
  learnSidebar: [
    {type: 'autogenerated', dirName: 'learn'},
  ],
  buildSidebar: [
    {type: 'autogenerated', dirName: 'build'},
  ],
  nodeSidebar: [
    {type: 'autogenerated', dirName: 'nodes'},
  ],
  refSidebar: [
    {type: 'autogenerated', dirName: 'references'},
  ],
};
 */

const commonSidebar = [
  {
    type: 'html',
    value: '<span class="sidebar-divider" />',
  },
  {
    type: 'category',
    label: 'Node Quick Reference',
    link: { type: 'doc', id: 'misc/operation/operation' },
    items: [
      'misc/operation/configuration',
      'misc/operation/node-log',
      'misc/operation/log-management',
      'misc/operation/kaia-command',
      'misc/operation/troubleshooting',
      'misc/operation/chaindata-change',
      'misc/operation/chaindata-migration',
      'misc/operation/upstream-en',
    ],
  },
  //  'misc/klaytn-history',
  'references/public-en',
  'misc/faq-chain-transition',
  'misc/finschia',
  'misc/glossary',
  //'misc/faq',
  'misc/internationalization',
]

const sidebars = {
  learnSidebar: [
    'learn/learn',
    'learn/why-kaia',
    'learn/consensus-mechanism',
    'learn/accounts',
    {
      type: 'category',
      label: 'Transactions',
      link: { type: 'doc', id: 'learn/transactions/transactions' },
      items: [
        'learn/transactions/basic',
        'learn/transactions/ethereum',
        'learn/transactions/fee-delegation',
        'learn/transactions/partial-fee-delegation',
      ],
    },
    {
      type: 'category',
      label: 'Transaction Fees',
      link: { type: 'doc', id: 'learn/transaction-fees/transaction-fees' },
      items: [
        'learn/transaction-fees/intrinsic-gas',
        'learn/transaction-fees/execution-gas',
      ],
    },
    {
      type: 'category',
      label: 'Computation',
      link: { type: 'doc', id: 'learn/computation/computation' },
      items: [
        'learn/computation/computation-cost',
        'learn/computation/execution-model',
        'learn/computation/kaia-smart-contract',
        'learn/computation/precompiled-contracts',
        'learn/computation/debug-tracing',
      ],
    },
    {
      type: 'category',
      label: 'Storage Layer',
      link: { type: 'doc', id: 'learn/storage/storage' },
      items: ['learn/storage/state-migration', 'learn/storage/live-pruning'],
    },
    'learn/multiport',
    'learn/kni',
    'learn/scaling-solutions',
    'learn/kaia-native-token',
    'learn/token-economy',
    {
      type: 'category',
      label: 'Governance',
      link: { type: 'doc', id: 'learn/governance/governance' },
      items: ['learn/governance/governance-by-kip'],
    },
    ...commonSidebar,
  ],
  buildSidebar: [
    'build/build',
    {
      type: 'category',
      label: 'Get Started',
      link: { type: 'doc', id: 'build/get-started/get-started' },
      items: [
        'build/get-started/before-you-start',
        'build/get-started/hardhat',
        {
          type: 'category',
          label: 'Account Basics',
          link: { type: 'doc', id: 'build/get-started/account/account' },
          items: [
            'build/get-started/account/creating-accounts',
            'build/get-started/account/managing-accounts',
          ],
        },
        'build/get-started/getting-kaia',
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      link: { type: 'doc', id: 'build/smart-contracts/smart-contracts' },
      items: [
        'build/smart-contracts/solidity-smart-contract-language',
        'build/smart-contracts/ide-and-tools/ide-and-tools',
        {
          type: 'category',
          label: 'Deploy Smart Contracts',
          link: { type: 'doc', id: 'build/smart-contracts/deploy/deploy' },
          items: [
            'build/smart-contracts/deploy/foundry',
            'build/smart-contracts/deploy/thirdweb',
            'build/smart-contracts/deploy/ken',
          ],
        },
        {
          type: 'category',
          label: 'Verify Smart Contracts',
          items: [
            'build/smart-contracts/verify/block-explorers',
            'build/smart-contracts/verify/hardhat',
          ],
        },
        {
          type: 'category',
          label: 'Sample Contracts',
          link: { type: 'doc', id: 'build/smart-contracts/samples/samples' },
          items: [
            'build/smart-contracts/samples/kaiagreeter',
            'build/smart-contracts/samples/erc-20',
            'build/smart-contracts/samples/erc-721',
          ],
        },
        'build/smart-contracts/token-standard',
        'build/smart-contracts/porting-ethereum-contract',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'doc', id: 'build/tutorials/tutorials' },
      items: [
        'build/tutorials/fee-delegation-example',
        'build/tutorials/scaffold-eth',
        'build/tutorials/buy-me-a-coffee',
        'build/tutorials/connecting-metamask',
        'build/tutorials/connecting-remix',
        'build/tutorials/kaikas-dapp-integration',
        'build/tutorials/migrating-ethereum-app-to-kaia',
      ],
    },
    {
      type: 'category',
      link: { type: 'doc', id: 'build/tools/tools' },
      label: 'Tools',
      items: [
        'build/tools/kaia-online-toolkit',
        {
          type: 'category',
          label: 'Wallets',
          link: { type: 'doc', id: 'build/tools/wallets/wallets' },
          items: [
            'build/tools/wallets/kaikas',
            {
              type: 'category',
              label: 'Kaia Safe',
              link: {
                type: 'doc',
                id: 'build/tools/wallets/kaia-safe/kaia-safe',
              },
              items: [
                'build/tools/wallets/kaia-safe/overview',
                'build/tools/wallets/kaia-safe/use-kaia-safe',
                'build/tools/wallets/kaia-safe/contract-interaction',
                'build/tools/wallets/kaia-safe/tx-builder',
                'build/tools/wallets/kaia-safe/faqs',
              ],
            },
            'build/tools/wallets/kaia-wallet',
            'build/tools/wallets/safepal-s1',
            {
              type: 'category',
              label: 'Wallet Libraries',
              link: {
                type: 'doc',
                id: 'build/tools/wallets/wallet-libraries/wallet-libraries',
              },
              items: [
                'build/tools/wallets/wallet-libraries/web3Auth',
                'build/tools/wallets/wallet-libraries/web3Modal',
                'build/tools/wallets/wallet-libraries/web3Onboard',
                'build/tools/wallets/wallet-libraries/particle',
                'build/tools/wallets/wallet-libraries/privy',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Oracles',
          link: { type: 'doc', id: 'build/tools/oracles/oracles' },
          items: [
            'build/tools/oracles/orakl-network',
            'build/tools/oracles/supraoracles',
            'build/tools/oracles/witnet',
          ],
        },
        {
          type: 'category',
          label: 'Indexers',
          link: { type: 'doc', id: 'build/tools/indexers/indexers' },
          items: ['build/tools/indexers/subquery'],
        },
        {
          type: 'category',
          label: 'Cross-chain',
          link: { type: 'doc', id: 'build/tools/cross-chain/cross-chain' },
          items: ['build/tools/cross-chain/layerzero'],
        },
        {
          type: 'category',
          label: 'Block Explorers',
          link: {
            type: 'doc',
            id: 'build/tools/block-explorers/block-explorers',
          },
          items: [
            'build/tools/block-explorers/kaiascope',
            {
              type: 'link',
              label: 'KaiaScan',
              href: 'https://kaiascan.io/',
            },
          ],
        },
        'build/tools/kaia-contracts-wizard',
      ],
    },
    ...commonSidebar,
  ],
  nodeSidebar: [
    'nodes/nodes',
    {
      type: 'category',
      label: 'Endpoint Node',
      link: { type: 'doc', id: 'nodes/endpoint-node/endpoint-node' },
      items: [
        'nodes/endpoint-node/system-requirements',
        'nodes/endpoint-node/install-endpoint-nodes',
        'nodes/endpoint-node/docker-setup',
        'nodes/endpoint-node/ken-cli-commands',
        'nodes/endpoint-node/json-rpc-apis',
      ],
    },
    {
      type: 'category',
      label: 'Core Cell',
      link: { type: 'doc', id: 'nodes/core-cell/core-cell' },
      items: [
        'nodes/core-cell/system-requirements',
        'nodes/core-cell/network-configuration',
        {
          type: 'category',
          label: 'Install Core Cell',
          link: { type: 'doc', id: 'nodes/core-cell/install/install' },
          items: [
            'nodes/core-cell/install/before-you-install',
            'nodes/core-cell/install/install-consensus-nodes',
            'nodes/core-cell/install/install-proxy-nodes',
          ],
        },
        'nodes/core-cell/monitoring-setup',
        'nodes/core-cell/h-a-setup',
        'nodes/core-cell/node-security',
      ],
    },
    {
      type: 'category',
      label: 'Service Chain',
      link: { type: 'doc', id: 'nodes/service-chain/service-chain' },
      items: [
        'nodes/service-chain/system-requirements',
        {
          type: 'category',
          label: 'Quick Start',
          link: {
            type: 'doc',
            id: 'nodes/service-chain/quick-start/quick-start',
          },
          items: [
            'nodes/service-chain/quick-start/4nodes-setup-guide',
            'nodes/service-chain/quick-start/en-scn-connection',
            'nodes/service-chain/quick-start/value-transfer',
            'nodes/service-chain/quick-start/ha-for-sc',
            'nodes/service-chain/quick-start/nested-sc',
            'nodes/service-chain/quick-start/value-transfer-between-sibling',
          ],
        },
        'nodes/service-chain/install-service-chain',
        {
          type: 'category',
          label: 'Configure Service Chain',
          link: { type: 'doc', id: 'nodes/service-chain/configure/configure' },
          items: [
            'nodes/service-chain/configure/bridge-configuration',
            'nodes/service-chain/configure/anchoring',
            'nodes/service-chain/configure/kas-anchoring',
            'nodes/service-chain/configure/value-transfer',
            'nodes/service-chain/configure/configuration-files',
            'nodes/service-chain/configure/genesis',
          ],
        },
        'nodes/service-chain/upgrade-and-hard-fork',
      ],
    },
    {
      type: 'category',
      label: 'Node Package Downloads',
      link: { type: 'doc', id: 'nodes/downloads/downloads' },
      items: [],
    },
    ...commonSidebar,
  ],
  refSidebar: [
    'references/references',
    'references/public-en',
    {
      type: 'category',
      label: 'RPC API Reference',
      items: [
        require('./web3rpc/web3rpc-sidebar').kaiaSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').klaySidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').ethSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').governanceSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').adminSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').netSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').txpoolSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').personalSidebarFormatted,
        require('./web3rpc/web3rpc-sidebar').debugSidebarFormatted,
      ],
    },
    {
      type: 'category',
      label: 'SDKs and Libraries',
      link: { type: 'doc', id: 'references/sdk/sdk' },
      items: [
        require('./docs/references/sdk/ethers-ext/sidebar').sidebar,
        require('./docs/references/sdk/web3js-ext/sidebar').sidebar,
        require('./docs/references/sdk/web3j-ext/sidebar').sidebar,
        require('./docs/references/sdk/web3py-ext/sidebar').sidebar,
        {
          type: 'category',
          label: 'caver-js',
          link: { type: 'doc', id: 'references/sdk/caver-js/caver-js' },
          items: [
            'references/sdk/caver-js/get-started',
            'references/sdk/caver-js/send-transaction',
            {
              type: 'category',
              label: 'API References',
              link: { type: 'doc', id: 'references/sdk/caver-js/api/api' },
              items: [
                'references/sdk/caver-js/api/caver.account',
                {
                  type: 'category',
                  label: 'caver.wallet',
                  link: {
                    type: 'doc',
                    id: 'references/sdk/caver-js/api/caver-wallet/caver-wallet',
                  },
                  items: ['references/sdk/caver-js/api/caver-wallet/keyring'],
                },
                {
                  type: 'category',
                  label: 'caver.transaction',
                  link: {
                    type: 'doc',
                    id: 'references/sdk/caver-js/api/caver-transaction/caver-transaction',
                  },
                  items: [
                    'references/sdk/caver-js/api/caver-transaction/basic',
                    'references/sdk/caver-js/api/caver-transaction/fee-delegation',
                    'references/sdk/caver-js/api/caver-transaction/partial-fee-delegation',
                  ],
                },
                {
                  type: 'category',
                  label: 'caver.rpc',
                  link: {
                    type: 'doc',
                    id: 'references/sdk/caver-js/api/caver-rpc/caver-rpc',
                  },
                  items: [
                    'references/sdk/caver-js/api/caver-rpc/governance',
                    'references/sdk/caver-js/api/caver-rpc/klay',
                    'references/sdk/caver-js/api/caver-rpc/net',
                  ],
                },
                'references/sdk/caver-js/api/caver.contract',
                'references/sdk/caver-js/api/caver.abi',
                {
                  type: 'category',
                  label: 'caver.kct',
                  link: {
                    type: 'doc',
                    id: 'references/sdk/caver-js/api/caver-kct/caver-kct',
                  },
                  items: [
                    'references/sdk/caver-js/api/caver-kct/kip7',
                    'references/sdk/caver-js/api/caver-kct/kip17',
                    'references/sdk/caver-js/api/caver-kct/kip37',
                  ],
                },
                'references/sdk/caver-js/api/caver.validator',
                'references/sdk/caver-js/api/caver.utils',
                'references/sdk/caver-js/api/caver.ipfs',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'caver-java',
          link: { type: 'doc', id: 'references/sdk/caver-java/caver-java' },
          items: [
            'references/sdk/caver-java/get-started',
            {
              type: 'link',
              label: 'API References',
              href: 'https://javadoc.io/doc/com.klaytn.caver/core/',
            },
          ],
        },
        'references/sdk/viem/viem',
      ],
    },
    'references/signed-message',
    'references/transaction-error-codes',
    ...commonSidebar,
  ],
  kaiaSidebar: [
    'kaiatech/kaiatech',
    {
      type: 'doc',
      id: 'kaiatech/kaia-dlt-framework',
      label: 'DLT Framework',
    },
  ],
}

module.exports = sidebars
