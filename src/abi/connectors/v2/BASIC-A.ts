import { AbiItem } from 'web3-utils'

export const BASIC_A: AbiItem[] = [

  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      { internalType: 'uint256', name: '_type', type: 'uint256' },
      { internalType: 'uint256', name: '_id', type: 'uint256' },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'erc20', type: 'address' },
      { internalType: 'uint256', name: 'tokenAmt', type: 'uint256' }
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEthAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEventAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMemoryAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'erc20', type: 'address' },
      { internalType: 'uint256', name: 'tokenAmt', type: 'uint256' },
      { internalType: 'address payable', name: 'to', type: 'address' }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]