import 'dotenv/config'
import base58 from 'bs58'
import * as Web3 from '@solana/web3.js'
import * as token from "@solana/spl-token"

const url = Web3.clusterApiUrl("devnet")
const connection = new Web3.Connection(url);
const publicKey = new Web3.PublicKey('63iBr9tCoL2p4brovggG1ZzutYQYVtQVwPPvUtvFw3Qw')
const decoded = base58.decode(process.env.PRIVATE_KEY as any)
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenAccount = new Web3.PublicKey('6mhaTdw6ioHKKimt6XeGbZJewDQgvBwPSnmvi3HJSuuJ')
const tokenMint = new Web3.PublicKey('5R4DeQeXJVoM38PzhxQGtKrTgYGgEeT3cCAxfGLDT1Wy')
const signer = Web3.Keypair.fromSecretKey(decoded);
const mint = base58.decode(process.env.MINT_PKEY as any)
const mintDecode = new Web3.PublicKey(mint)
async function main() {
    const mintToken = await token.mintTo(connection, signer, mintDecode , tokenAccount,keyPair, 3)
    console.log(mintToken)
}

main();