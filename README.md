# Blockchain-Tutorial-Exercices

This repository contains my solutions to blockchain exercises from lab 5, 6, 9 and 10, and modified code to answer all questions of the assignment.
It includes scripts for Proof-of-Work simulation, Solidity smart contracts, and NFT minting with Alchemy.

## 📁 Project Structure
lab/

 ├── lab5/               → Proof-of-Work scripts

 ├── lab6/               → Storage and Gas analysis

 └── lab9-10/my-nft-app/ → NFT contract and minting scripts

Files at root:
- `Exercice1.ipynb`, `Exercice2.ipynb`, `Exercice2.sol`, `Exercice3.ipynb`, `Report.pdf`: modified or new code to answers for each exercise set
- `README.md`: this file


## 🧠 Exercises Overview

### Exercise 1 — Proof of Work
- Implemented a simplified mining process
- Demonstrated variable difficulty

### Exercise 2 — Storage Contract
- Modified `Storage.sol` to store a text variable
- Compared gas usage for strings vs integers

### Exercise 3 — NFTs
- Deployed `courseNFT.sol` to testnet. *Please note that for exercice 3 I used network Sepolia instead of Goerli like recommanded because Goerli is down since 2024 now.*
- Implemented `mint-nft.js` to mint random NFTs using IPFS metadata

Please note that there is a collaborator issue. I completed the exercises alone, but due to a push from another project, a collaborator was mistakenly added to this repository and I cannot remove them. Any pushes made after the assignment’s due date were caused by this mistake. You can still verify that I worked on this project alone by checking the commit history, which shows my contributions and the date of my last actual push. I apologize for this error.
