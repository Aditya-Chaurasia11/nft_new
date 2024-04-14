const abi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "accountaddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sourcechainID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenaddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "Account_created",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "salt",
				"type": "uint256"
			}
		],
		"name": "Deployed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "DestinationchainID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Tokenaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			}
		],
		"name": "CreateCrossChainAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_sourcechainID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tokenaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_salt",
				"type": "uint256"
			}
		],
		"name": "account",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_sourcechainID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tokenaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salt",
				"type": "uint256"
			}
		],
		"name": "createAccount",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_sourcechainID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tokenaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_salt",
				"type": "uint256"
			}
		],
		"name": "createAccountOnlyRelayer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_sourcechainID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tokenaddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_salt",
				"type": "uint256"
			}
		],
		"name": "isAccountCreated",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default abi;