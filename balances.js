const { Connection, PublicKey } = require('@solana/web3.js');

// Create a connection to the Solana mainnet
const connection = new Connection('your_rpc', 'confirmed');

// Manually enter your public keys here
const publicKeys = [
    'wallet1',
    'wallet2',

];


// Function to get SOL balance
async function getSOLBalance(publicKey) {
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9; // Convert lamports to SOL
}

// Function to get wallet balances
async function getWalletBalances(publicKeyString) {
    const walletPublicKey = new PublicKey(publicKeyString);

    // Get SOL balance
    const solBalance = await getSOLBalance(walletPublicKey);
    console.log(`${publicKeyString} (SOL): ${solBalance} SOL`);

}

// Main function to get balances for all public keys
async function main() {
    for (const publicKey of publicKeys) {
        await getWalletBalances(publicKey);
    }
}

main().catch(console.error);
