import * as Web3 from "@solana/web3.js";
import bs58 from "bs58";
const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
const PRIVATE_KEY = //this is the private key of the account that will send the sol
  "zi45Tpw2ccRvmytpvNBhAwv2KWHFxwDFYjjwarv22TNjjsScQgnEZWzioS8yn4oE7rerGyEWZnoChWMY3LzLgGT";
async function main() {
  const privateKeyIntArray = bs58.decode(PRIVATE_KEY);
  const signer = Web3.Keypair.fromSecretKey(privateKeyIntArray);
  const transaction = new Web3.Transaction();
  const sendSolTransaction = Web3.SystemProgram.transfer({
    fromPubkey: new Web3.PublicKey( //this is the public key of the account that will send the sol
      "63iBr9tCoL2p4brovggG1ZzutYQYVtQVwPPvUtvFw3Qw"
    ),
    toPubkey: new Web3.PublicKey( //this is the public key of the account that will receive the sol
      "AiyUGNRVbrDVvC8KjCpuzwYdoVtWMTpvVHjMgMgoU7JA" 
    ),
    lamports: 2 * Web3.LAMPORTS_PER_SOL, //the number represents the amount of sol to send
  });
  transaction.add(sendSolTransaction);
  const txHash = await Web3.sendAndConfirmTransaction(connection, transaction, [
    signer,
  ]);
  console.log("txHash / txSignature:", txHash);
}

main();
