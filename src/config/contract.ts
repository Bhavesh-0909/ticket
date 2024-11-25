export const contractABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "_userAddress", "type": "address" },
        { "internalType": "bytes32", "name": "_emailHash", "type": "bytes32" },
        { "internalType": "uint256", "name": "_phoneVerificationCode", "type": "uint256" }
      ],
      "name": "registerUser",
      "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_userAddress", "type": "address" }],
      "name": "getUser",
      "outputs": [{
        "components": [
          { "internalType": "bytes32", "name": "emailHash", "type": "bytes32" },
          { "internalType": "uint256", "name": "phoneVerificationCode", "type": "uint256" },
          { "internalType": "bool", "name": "isVerified", "type": "bool" }
        ],
        "internalType": "struct SimpleAuth.UserIdentity",
        "name": "",
        "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
    }
];

export const contractAddress = "0x6e333e323434ceb01797ce5332a577c3fc4a07bf"; 