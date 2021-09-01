import { AbiItem } from 'web3-utils'

export const WETH_A: AbiItem[] = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
{
   "inputs":[
      
   ],
   "name":"name",
   "outputs":[
      {
         "internalType":"string",
         "name":"",
         "type":"string"
      }
   ],
   "stateMutability":"view",
   "type":"function"
},
{
   "inputs":[
      {
         "internalType":"uint256",
         "name":"amt",
         "type":"uint256"
      }
   ],
   "name":"withdraw",
   "outputs":[],
   "stateMutability":"payable",
   "type":"function"
}
]