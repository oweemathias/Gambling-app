import React from "react";
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [owner, setOwner] = useState("");

  const connectToContract = async () => {
    // Replace with your contract address
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    // Replace with your contract ABI (from artifacts/contracts/Gambling.sol/Gambling.json)
    const abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "getOwner",
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
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];

    // Connect to the local blockchain
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Call the getOwner function
    const ownerAddress = await contract.getOwner();
    setOwner(ownerAddress);
  };

  return (
    <div>
      <h1>Decentralized Gambling App</h1>
      <button onClick={connectToContract}>Get Owner</button>
      {owner && <p>Contract Owner: {owner}</p>}
    </div>
  );
}

export default App;