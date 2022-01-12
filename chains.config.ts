type Network = {
  [key: string]: {
    RPC: string
    LCD: string
    T_VALIDATOR: string
    VALIDATOR: string
    HD_PATH: string
    PREFIX: string
    EXPLORER: string
    EXPLORER_API: string
  }
}

const networks: Network = {
  TESTNET: {
    RPC: 'https://testnet-croeseid-4.crypto.org:26657',
    LCD: 'https://testnet-croeseid-4.crypto.org:1317',
    T_VALIDATOR: '71DA178AE52B2D0654102A86166CE91AC5121CB2', // node2
    VALIDATOR: 'tcrocncl14fzksz5h72et4ssjtqpwsmhz6ysk6r4na5tr63',
    HD_PATH: "m/44'/1'/0'/0/0",
    PREFIX: 'tcro',
    EXPLORER: 'https://crypto.org/explorer/croeseid4',
    EXPLORER_API: 'https://crypto.org/explorer/croeseid4/api/v1',
  },
  MAINNET: {
    RPC: 'https://mainnet.crypto.org:26657',
    LCD: 'https://mainnet.crypto.org:1317',
    T_VALIDATOR: '8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB',
    VALIDATOR: 'crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
    HD_PATH: "m/44'/394'/0'/0/0",
    PREFIX: 'cro',
    EXPLORER: 'https://crypto.org/explorer',
    EXPLORER_API: 'https://crypto.org/explorer/api/v1',
  },
}

export default networks
