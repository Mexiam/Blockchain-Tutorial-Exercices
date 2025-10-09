require("dotenv").config()


const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/courseNFT.sol/courseNFT.json")
console.log(JSON.stringify(contract.abi))



const nftCIDs = [
  "ipfs://bafybeihsp7rodhq7aiuos77btzhbfzujpa526ebhienzt75k23mimuu5hm",
  "ipfs://bafkreih3qekf7zggsn37vwflp3776biomutmkhxinebypneovmxxnhyiim",
  "ipfs://bafkreibv2xmy5cw3vcsujvu45g6c5zegbrdx44nkscoat3nfmpxkwaun5q"
  // we can add more CIDs here
];
const randomIndex = Math.floor(Math.random() * nftCIDs.length);
const CID = nftCIDs[randomIndex];


async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

//the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  };
}

const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise
        .then((signedTx) => {
        web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function (err, hash) {
            if (!err) {
                console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
                )
            } else {
                console.log(
                "Something went wrong when submitting your transaction:",
                err
                )
            }
        }
        )
        })
        .catch((err) => {
        console.log(" Promise failed:", err)
    })

mintNFT(CID)