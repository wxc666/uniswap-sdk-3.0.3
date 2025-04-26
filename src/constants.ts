import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  GANACHE = 1337,
  AVALANCHE_C_CHAIN_TESTNET = 43113,
  MONAD_TESTNET = 10143,
/*  ETHEREUM_SEPOLIA_TESTNET = 11155111,
  ARBITRUM_SEPOLIA_TESTNET= 421614,
  POLYGON_AMOY_TESTNET = 80002,
  BSC_TESTNET = 97,
  */
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// AVALANCHE_C_CHAIN_TESTNET
//export const FACTORY_ADDRESS = '0x19231623a945A1d74792264779363CFf27b69107'
//Monad Testnet
export const FACTORY_ADDRESS = '0x765AF30746C4B59125bbaa31524F4aAFc5A9f9fc'

// AVALANCHE_C_CHAIN_TESTNET
//export const INIT_CODE_HASH = '0x8897f1f34a81ee48d6fc425cd4779b617ea39c85f865509de3475880494a68b5'
//Monad Testnet
export const INIT_CODE_HASH = '0xd8d1e7a84c4928205c287c5d45dbdc322aa337b0c59788b11ab24d996802966c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
