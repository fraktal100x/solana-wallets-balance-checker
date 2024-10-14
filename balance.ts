import { Connection, PublicKey } from '@solana/web3.js';

// Create a connection to the Solana mainnet
const connection = new Connection(process.env.RPC_ENDPOINT ?? '', 'confirmed');
// Manually enter your public keys here
const publicKeys: string[] = [
    'wallet1',
    'wallet2'
];

// Function to get SOL balance
async function getSOLBalance(publicKey: PublicKey): Promise<number> {
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9; // Convert lamports to SOL
}

// Function to get wallet balances
async function getWalletBalances(publicKeyString: string): Promise<void> {
    const walletPublicKey = new PublicKey(publicKeyString);

    // Get SOL balance
    const solBalance = await getSOLBalance(walletPublicKey);
    console.log(`${publicKeyString} (SOL): ${solBalance} SOL`);
}

// Main function to get balances for all public keys
async function main(): Promise<void> {
    for (const publicKey of publicKeys) {
        await getWalletBalances(publicKey);
    }
}

main().catch(console.error);
