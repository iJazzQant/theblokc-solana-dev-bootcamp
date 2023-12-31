import 'dotenv/config'
import base58 from 'bs58'
import * as Web3 from '@solana/web3.js'
import * as token from "@solana/spl-token"

const url = Web3.clusterApiUrl("devnet")
const connection = new Web3.Connection(url);
const publicKey = new Web3.PublicKey('63iBr9tCoL2p4brovggG1ZzutYQYVtQVwPPvUtvFw3Qw')
const decoded = base58.decode(process.env.PRIVATE_KEY as any)
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = new Web3.PublicKey('5R4DeQeXJVoM38PzhxQGtKrTgYGgEeT3cCAxfGLDT1Wy')

async function main() {
    const tokenAccount = await token.createAccount(
    connection,
    keyPair,
    tokenMint,
    publicKey,
    )
    console.log(tokenAccount.toBase58())
}

main();