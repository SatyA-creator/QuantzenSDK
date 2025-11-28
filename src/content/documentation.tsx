import React, { useState } from "react";
import { CodeBlock } from '../components/ContentArea';
import { AlertTriangle, ShieldQuestion, KeyRound, RefreshCcw } from "lucide-react";
import { ChevronDown, HelpCircle, Wallet,  Server, Coins, Layers } from "lucide-react";
export function introduction() {
  return (
    <div data-section="introduction">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Getting Started
      </h1>

      <h2 id="what-is-quantzen-sdk" className="text-2xl font-semibold mt-8 mb-4">What is the QuantZen™ SDK?</h2>
      <p className="text-lg leading-relaxed mb-6">
        QuantZen™ SDK is a TypeScript/JavaScript library that adds quantum-resistant cryptography to blockchain wallets and applications. It enables wallets to generate quantum-safe signatures alongside traditional ECDSA signatures, protecting users from future quantum computing attacks.
      </p>

      <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-semibold text-primary-accent mb-3">In Simple Terms:</h3>
        <p className="leading-relaxed">
          Traditional wallets use ECDSA signatures (vulnerable to quantum computers). QuantZen™ SDK adds a second layer: Dilithium signatures (quantum-resistant). Your wallet becomes "quantum-proof" - protected even when quantum computers break ECDSA.
        </p>
      </div>

      <h2 id="why-quantum-proofing-matters" className="text-2xl font-semibold mt-12 mb-4">Why Quantum-Proofing Matters</h2>
      <p className="leading-relaxed mb-4">
        Current blockchain wallets use ECDSA (Elliptic Curve Digital Signature Algorithm) for signing transactions. While secure today, quantum computers can break ECDSA in minutes once they become powerful enough. This puts all blockchain funds at risk.
      </p>

      <p className="leading-relaxed mb-4">
        QuantZen™ SDK provides a dual signature system that combines:
      </p>

      <ul className="space-y-2 mb-4 ml-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent ">•</span>
          <span><strong>ECDSA signatures</strong> - For blockchain compatibility (works today)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent ">•</span>
          <span><strong>Dilithium signatures</strong> - For quantum protection (future-proof)</span>
        </li>
      </ul>

      <p className="leading-relaxed mb-4">
        Even if quantum computers break ECDSA, your funds remain protected because Dilithium signatures cannot be broken by quantum computers.
      </p>
    </div>
  );
}

export function installation() {
  return (
    <div data-section="installation">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Installation
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Install the SDK using npm:
      </p>
      
      <CodeBlock
        id="npm-install"
        language="bash"
        code="npm install @quantzen/sdk"
      />

      <p className="text-lg leading-relaxed mb-4 mt-8">
        Or use via CDN:
      </p>
      
      <CodeBlock
        id="cdn-install"
        language="html"
        code={`<script src="https://cdn.jsdelivr.net/npm/@quantzen/sdk/dist/quantzen-sdk.umd.min.js"></script>`}
      />
    </div>
  );
}

export function quickStart() {
  return (
    <div data-section="quick-start">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Quick Start
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Get started with quantum-proofing in 3 lines of code:
      </p>
      
      <CodeBlock
        id="quick-start-code"
        language="typescript"
        code={`import { QuantzenWallet, MetaMaskAdapter } from '@quantzen/sdk';

const wallet = new QuantzenWallet(new MetaMaskAdapter());
await wallet.initialize();
await wallet.quantumProofWallet();`}
      />

      <p className="text-lg leading-relaxed mb-4 mt-8">
        That's it! Your wallet is now quantum-proofed. All future transactions will automatically include quantum-safe signatures.
      </p>
    </div>
  );
}

export function walletOverview() {
  return (
    <div data-section="wallet-overview">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Integration Overview
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Integrating QuantZen™ SDK into your wallet is straightforward. The SDK handles all the complexity of quantum key generation, encryption, storage, and signing. You just need to:
      </p>
      
      <ol className="space-y-4 my-6">
        <li className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/20 text-primary-accent flex items-center justify-center font-bold">
            1
          </span>
          <div>Install the SDK</div>
        </li>
        <li className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/20 text-primary-accent flex items-center justify-center font-bold">
            2
          </span>
          <div>Initialize the wallet adapter</div>
        </li>
        <li className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/20 text-primary-accent flex items-center justify-center font-bold">
            3
          </span>
          <div>Call quantumProofWallet()</div>
        </li>
        <li className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/20 text-primary-accent flex items-center justify-center font-bold">
            4
          </span>
          <div>Update transaction signing to use signTransaction()</div>
        </li>
      </ol>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-light-surface dark:bg-dark-surface border dark:border-dark-border border-light-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary-accent mb-2">Integration Time</h3>
          <p className="text-2xl font-bold">5 minutes</p>
        </div>
        <div className="bg-light-surface dark:bg-dark-surface border dark:border-dark-border border-light-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-secondary-accent mb-2">Code Required</h3>
          <p className="text-2xl font-bold">3 lines minimum</p>
        </div>
        <div className="bg-light-surface dark:bg-dark-surface border dark:border-dark-border border-light-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-accent-green mb-2">Infrastructure</h3>
          <p className="text-2xl font-bold">Zero (works entirely client-side)</p>
        </div>
      </div>
    </div>
  );
}

export function walletIntegration() {
  return (
    <div data-section="wallet-integration">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Step-by-Step Integration
      </h1>

      <h2 id="step-1" className="text-2xl font-semibold mt-8 mb-4">Step 1: Install SDK</h2>
      <CodeBlock
        id="step1-install"
        language="bash"
        code="npm install @quantzen/sdk"
      />

      <h2 id="step-2" className="text-2xl font-semibold mt-12 mb-4">Step 2: Import and Initialize</h2>
      <CodeBlock
        id="step2-init"
        language="typescript"
        code={`import { QuantzenWallet, MetaMaskAdapter } from '@quantzen/sdk';

// Create wallet instance
const wallet = new QuantzenWallet(new MetaMaskAdapter());

// Initialize (connects to wallet)
await wallet.initialize();`}
      />

      <h2 id="step-3" className="text-2xl font-semibold mt-12 mb-4">Step 3: Enable Quantum-Proofing</h2>
      <CodeBlock
        id="step3-quantum"
        language="typescript"
        code={`// Enable quantum-proofing for the wallet
const result = await wallet.quantumProofWallet({
  algorithm: 'dilithium2' // or 'dilithium3', 'dilithium5'
});

console.log('Quantum-proofing enabled!');
console.log('PQC Public Key:', result.pqcPublicKey);`}
      />

      <h2 id="step-4" className="text-2xl font-semibold mt-12 mb-4">Step 4: Update Transaction Signing</h2>
      <CodeBlock
        id="step4-signing"
        language="typescript"
        code={`// Replace your existing transaction signing:
async function signTransaction(transaction) {
  // Old way (without quantum-proofing):
  // const signature = await wallet.sign(transaction);
  
  // New way (with quantum-proofing):
  const auditRecord = await wallet.signTransaction(transaction);
  
  // auditRecord contains:
  // - ecdsaSignature (for blockchain)
  // - pqcSignature (quantum-safe)
  // - pqcPublicKey
  // - txHash
  // - auditCID (IPFS CID for verification)
  
  return auditRecord;
}`}
      />

      <h2 id="step-5" className="text-2xl font-semibold mt-12 mb-4">Step 5: Handle Backup Export (Optional)</h2>
      <CodeBlock
        id="step5-backup"
        language="typescript"
        code={`// Export backup for user
async function exportBackup() {
  const storage = wallet.getStorage();
  const backup = await storage.exportKey('quantum-keys', {
    walletAddress: wallet.getWalletAddress(),
    metadata: { version: '1.0' }
  });
  
  // Download as JSON file
  downloadJSON(backup, 'quantum-backup.json');
}`}
      />
    </div>
  );
}

export function walletFeatures() {
  return (
    <div data-section="wallet-features">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Available Features
      </h1>

      <ul className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>
            <strong>Quantum-Proofing API</strong> - One-call method to enable quantum-proofing. Handles key generation, encryption, and storage automatically.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>
            <strong>Dual Signature System</strong> - Automatic dual signatures (ECDSA + PQC) for all transactions. No additional code needed.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent font-bold">•</span>
          <div>
            <strong>Backup & Recovery</strong> - Encrypted backup files, seed-based recovery, and cross-device support.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>
            <strong>Multi-Chain Support</strong> - Works with EVM chains (Ethereum, Polygon, BSC), Solana, and Bitcoin.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>
            <strong>Wallet Adapters</strong> - Pre-built adapters for MetaMask, Phantom, and custom wallet support.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>
            <strong>Algorithm Selection</strong> - Choose from Dilithium2 (fast), Dilithium3 (balanced), or Dilithium5 (maximum security).
          </div>
        </li>
      </ul>
    </div>
  );
}

export function walletExamples() {
  return (
    <div data-section="wallet-examples">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Complete Integration Example
      </h1>

      <CodeBlock
        id="complete-example"
        language="typescript"
        code={`import { QuantzenWallet, MetaMaskAdapter } from '@quantzen/sdk';

class MyWallet {
  private quantzenWallet: QuantzenWallet;
  
  constructor() {
    this.quantzenWallet = new QuantzenWallet(new MetaMaskAdapter());
  }
  
  async initialize() {
    // Connect to wallet
    await this.quantzenWallet.initialize();
    
    // Check if already quantum-proofed
    const isProofed = this.quantzenWallet.isQuantumProofed();
    
    if (!isProofed) {
      // Show UI: "Enable Quantum-Proofing"
      this.showQuantumProofingPrompt();
    }
  }
  
  async enableQuantumProofing() {
    const result = await this.quantzenWallet.quantumProofWallet({
      algorithm: 'dilithium2'
    });
    
    // Store backup
    await this.saveBackup();
    
    return result;
  }
  
  async sendTransaction(transaction) {
    // Sign with dual signatures
    const auditRecord = await this.quantzenWallet.signTransaction(transaction);
    
    // Send to blockchain (using ecdsaSignature)
    const txHash = await this.sendToBlockchain(
      transaction, 
      auditRecord.ecdsaSignature
    );
    
    return txHash;
  }
  
  async saveBackup() {
    const storage = this.quantzenWallet.getStorage();
    const backup = await storage.exportKey('quantum-keys', {
      walletAddress: this.quantzenWallet.getWalletAddress()
    });
    
    // Save to user's device
    localStorage.setItem('quantum_backup', backup);
  }
}`}
      />
    </div>
  );
}

export function dappOverview() {
  return (
    <div data-section="dapp-overview">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Integration Overview
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        If the wallet provider has integrated QuantZen™ SDK, you don't need to do anything! The wallet automatically adds quantum signatures to all transactions.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <strong>Zero Code Changes:</strong> If the wallet supports Quantzen SDK, your dApp works automatically. Transactions will include quantum signatures without any code changes on your end.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        However, you can optionally integrate the SDK directly in your dApp for:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>Checking quantum-proof status</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>Verifying quantum signatures</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>Displaying quantum-proof badges</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>Custom implementations</div>
        </li>
      </ul>
    </div>
  );
}

export function dappIntegration() {
  return (
    <div data-section="dapp-integration">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Integration Options
      </h1>

      <h2 id="option-1" className="text-2xl font-semibold mt-8 mb-4">Option 1: Zero Integration (Recommended)</h2>
      <p className="text-lg leading-relaxed mb-6">
        If the wallet already supports QuantZen™ SDK, use your existing code:
      </p>
      <CodeBlock
        id="option1-code"
        language="typescript"
        code={`// Your existing code works as-is
const tx = await wallet.sendTransaction({
  to: recipient,
  value: amount
});

// Wallet automatically includes quantum signature
// No code changes needed!`}
      />

      <h2 id="option-2" className="text-2xl font-semibold mt-12 mb-4">Option 2: Check Quantum-Proof Status</h2>
      <p className="text-lg leading-relaxed mb-6">
        Optionally check if a wallet is quantum-proofed:
      </p>
      <CodeBlock
        id="option2-code"
        language="typescript"
        code={`// Check if wallet is quantum-proofed
const isQuantumProofed = await checkQuantumProofStatus(walletAddress);

if (isQuantumProofed) {
  // Show quantum-proof badge
  displayBadge('✅ Quantum-Proofed');
} else {
  // Prompt user to enable quantum-proofing
  showPrompt('Enable quantum-proofing for enhanced security');
}`}
      />

      <h2 id="option-3" className="text-2xl font-semibold mt-12 mb-4">Option 3: Verify Quantum Signatures</h2>
      <p className="text-lg leading-relaxed mb-6">
        Verify quantum signatures in your dApp:
      </p>
      <CodeBlock
        id="option3-code"
        language="typescript"
        code={`import { createQuantzenSDK } from '@quantzen/sdk';

const sdk = await createQuantzenSDK();

// Verify quantum signature
const isValid = await sdk.verify(
  'dilithium2',
  pqcPublicKey,
  message,
  pqcSignature
);

if (isValid) {
  console.log('✅ Transaction is quantum-proofed!');
}`}
      />
    </div>
  );
}

export function dappVerification() {
  return (
    <div data-section="dapp-verification">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Verification Tools
      </h1>

      <h2 id="transaction-verification" className="text-2xl font-semibold mt-8 mb-4">Transaction Verification</h2>
      <CodeBlock
        id="transaction-verification-code"
        language="typescript"
        code={`// Check if transaction has quantum signature
if (transaction.pqcSignature && transaction.pqcPublicKey) {
  // Verify quantum signature
  const isValid = await sdk.verify(
    'dilithium2',
    transaction.pqcPublicKey,
    canonicalTransaction,
    transaction.pqcSignature
  );
  
  if (isValid) {
    console.log('✅ Transaction is quantum-proofed!');
    displayQuantumProofBadge();
  }
}`}
      />

      <h2 id="audit-record-access" className="text-2xl font-semibold mt-12 mb-4">Audit Record Access</h2>
      <CodeBlock
        id="audit-record-code"
        language="typescript"
        code={`import { getJSON } from '@quantzen/sdk';

// Get audit record from IPFS
const auditRecord = await getJSON(auditCID);

// Verify audit record
if (auditRecord.pqcSignature && auditRecord.pqcPublicKey) {
  const isValid = await sdk.verify(
    auditRecord.algorithm,
    auditRecord.pqcPublicKey,
    auditRecord.transaction,
    auditRecord.pqcSignature
  );
}`}
      />
    </div>
  );
}

export function howItWorks() {
  return (
    <div data-section="how-it-works">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        How Quantum-Proofing Works
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        When a user enables quantum-proofing, the SDK performs the following steps:
      </p>

      <ol className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">1.</span>
          <div>
            <strong>Generate Dilithium Keypair:</strong> Creates quantum-safe public/private key pair
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">2.</span>
          <div>
            <strong>Generate Kyber Keypair:</strong> Creates encryption keys for secure storage
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">3.</span>
          <div>
            <strong>Encrypt Keys:</strong> Encrypts Dilithium keys using Kyber KEM (Key Encapsulation Mechanism)
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">4.</span>
          <div>
            <strong>Store Locally:</strong> Stores encrypted keys in browser storage (IndexedDB or localStorage)
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">5.</span>
          <div>
            <strong>Create Certificate:</strong> Creates wallet binding on IPFS (wallet address → quantum public key)
          </div>
        </li>
      </ol>

      <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-semibold text-primary-accent mb-3">Key Point:</h3>
        <p className="leading-relaxed">
          All keys are encrypted before storage. The Dilithium private key is never stored in plaintext. Even if someone gains access to the storage, they cannot decrypt the keys without the Kyber secret key.
        </p>
      </div>
    </div>
  );
}

export function dualSignatures() {
  return (
    <div data-section="dual-signatures">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Dual Signature System
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        The dual signature system ensures backward compatibility while providing quantum protection:
      </p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>
            <strong>ECDSA Signature:</strong> Required by blockchain (works today)
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent font-bold">•</span>
          <div>
            <strong>PQC Signature:</strong> Quantum-safe signature (future protection)
          </div>
        </li>
      </ul>

      <p className="text-lg leading-relaxed mb-6">
        When a user sends a transaction:
      </p>

      <ol className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">1.</span>
          <div>Wallet signs with ECDSA (normal signature)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">2.</span>
          <div>SDK automatically signs with Dilithium (quantum-safe signature)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">3.</span>
          <div>Both signatures are included in the transaction</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">4.</span>
          <div>Audit record is created and stored on IPFS</div>
        </li>
      </ol>

      <div className="bg-secondary-accent/10 border border-secondary-accent/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-semibold text-secondary-accent mb-3">Current Limitation:</h3>
        <p className="leading-relaxed">
          PQC signatures are verified off-chain (backend/IPFS). On-chain validation is a Phase 2 feature that will require smart contract integration.
        </p>
      </div>
    </div>
  );
}

export function keyManagement() {
  return (
    <div data-section="key-management">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Key Management
      </h1>

      <h2 id="encryption" className="text-2xl font-semibold mt-8 mb-4">Encryption</h2>
      <p className="text-lg leading-relaxed mb-6">
        Keys are encrypted using Kyber KEM (Key Encapsulation Mechanism) combined with AES-256-GCM:
      </p>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>Kyber generates a shared secret</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>AES-256-GCM encrypts the Dilithium keys using the shared secret</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>HKDF-SHA256 derives the AES key (maintains entropy)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div>Encrypted data is stored with Kyber ciphertext</div>
        </li>
      </ul>

      <h2 id="storage" className="text-2xl font-semibold mt-12 mb-4">Storage</h2>
      <p className="text-lg leading-relaxed mb-6">
        Encrypted keys are stored locally using:
      </p>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>IndexedDB:</strong> Browser persistent storage (recommended)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>FileSystem:</strong> Node.js file system (for server-side)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Custom Adapters:</strong> Implement your own storage adapter</div>
        </li>
      </ul>

      <h2 id="backup-recovery" className="text-2xl font-semibold mt-12 mb-4">Backup & Recovery</h2>
      <p className="text-lg leading-relaxed mb-6">
        Users can backup their keys in multiple ways:
      </p>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Encrypted Backup Files:</strong> JSON files encrypted with Kyber</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Seed-Based Recovery:</strong> Regenerate keys from wallet seed (deterministic)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Cross-Device Recovery:</strong> Import backup on new device</div>
        </li>
      </ul>
    </div>
  );
}

export function security() {
  return (
    <div data-section="security">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Security Architecture
      </h1>

      <h2 id="what-matters-most" className="text-2xl font-semibold mt-8 mb-4">What Matters Most</h2>
      <p className="text-lg leading-relaxed mb-6">
        For developers integrating the SDK, here's what you need to know:
      </p>

      <h3 id="keys-never-plaintext" className="text-xl font-semibold mt-6 mb-3">1. Keys Are Never in Plaintext</h3>
      <p className="leading-relaxed mb-4">
        All private keys are encrypted before storage. The SDK handles encryption/decryption automatically. You never need to handle plaintext keys.
      </p>

      <h3 id="dual-signature-requirement" className="text-xl font-semibold mt-6 mb-3">2. Dual Signature Requirement</h3>
      <p className="leading-relaxed mb-4">
        Transactions require both ECDSA and PQC signatures. The SDK automatically creates both signatures. You just need to use signTransaction() instead of the wallet's native signing method.
      </p>

      <h3 id="backend-validation" className="text-xl font-semibold mt-6 mb-3">3. Backend Validation</h3>
      <p className="leading-relaxed mb-4">
        Currently, PQC signatures are validated by the backend service. This prevents unauthorized transactions even if ECDSA is compromised. On-chain validation (smart contracts) is planned for Phase 2.
      </p>

      <h3 id="key-replacement-prevention" className="text-xl font-semibold mt-6 mb-3">4. Key Replacement Prevention</h3>
      <p className="leading-relaxed mb-4">
        The system prevents key replacement attacks. If a wallet is already quantum-proofed, new keys cannot be used for transactions unless the user proves ownership of the original keys.
      </p>

      <h3 id="replay-attack-prevention" className="text-xl font-semibold mt-6 mb-3">5. Replay Attack Prevention</h3>
      <p className="leading-relaxed mb-4">
        The backend uses message key tracking to prevent replay attacks. Each quantum-proofing request must include a unique timestamp/nonce.
      </p>

      <h3 id="algorithm-options" className="text-xl font-semibold mt-6 mb-3">Algorithm Options</h3>
      <p className="leading-relaxed mb-4">
        The SDK supports three Dilithium algorithm variants:
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="border border-primary-accent/30 rounded-xl p-4">
          <h3 className="font-semibold text-primary-accent mb-2">Dilithium2</h3>
          <ul className="text-sm space-y-1">
            <li>• Fastest signing</li>
            <li>• Smallest signatures</li>
            <li>• Good for mobile</li>
          </ul>
        </div>
        <div className="border border-primary-accent/30 rounded-xl p-4">
          <h3 className="font-semibold text-primary-accent mb-2">Dilithium3</h3>
          <ul className="text-sm space-y-1">
            <li>• Balanced performance</li>
            <li>• Medium security level</li>
            <li>• Recommended default</li>
          </ul>
        </div>
        <div className="border border-primary-accent/30 rounded-xl p-4">
          <h3 className="font-semibold text-primary-accent mb-2">Dilithium5</h3>
          <ul className="text-sm space-y-1">
            <li>• Maximum security</li>
            <li>• Larger signatures</li>
            <li>• Enterprise grade</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function coreMethods() {
  return (
    <div data-section="core-methods">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Core Methods
      </h1>

      <h2 id="quantumproof-wallet" className="text-2xl font-semibold mt-8 mb-4">quantumProofWallet()</h2>
      <p className="leading-relaxed mb-4">
        Enable quantum-proofing for a wallet. This is typically called once per wallet.
      </p>
      <CodeBlock
        id="quantumproof-method"
        language="typescript"
        code={`const result = await wallet.quantumProofWallet({
  algorithm: 'dilithium2',  // 'dilithium2', 'dilithium3', or 'dilithium5'
  backup: true             // Optional: auto-generate backup
});

// Returns:
// {
//   success: true,
//   pqcPublicKey: "...",
//   backupGenerated: true
// }`}
      />

      <h2 id="sign-transaction" className="text-2xl font-semibold mt-12 mb-4">signTransaction()</h2>
      <p className="leading-relaxed mb-4">
        Sign any transaction with dual signatures (ECDSA + PQC).
      </p>
      <CodeBlock
        id="sign-method"
        language="typescript"
        code={`const auditRecord = await wallet.signTransaction(transaction);

// Returns:
// {
//   ecdsaSignature: "...",     // For blockchain
//   pqcSignature: "...",       // Quantum-safe
//   pqcPublicKey: "...",
//   txHash: "...",
//   auditCID: "QmXxx...",     // IPFS storage
//   timestamp: 1234567890
// }`}
      />

      <h2 id="get-quantum-status" className="text-2xl font-semibold mt-12 mb-4">getQuantumStatus()</h2>
      <CodeBlock
        id="status-method"
        language="typescript"
        code={`const verifier = new QuantzenVerifier();
const status = await verifier.getQuantumStatus(txHash);

// Returns:
// {
//   isQuantumProofed: true,
//   algorithm: "dilithium2",
//   auditCID: "QmXxx...",
//   timestamp: 1234567890
// }`}
      />

      <h2 id="verify-from-ipfs" className="text-2xl font-semibold mt-12 mb-4">verifyFromIPFS()</h2>
      <CodeBlock
        id="verify-method"
        language="typescript"
        code={`const isValid = await verifier.verifyFromIPFS(
  'QmYourAuditCID',
  '0xTransactionHash'
);

console.log('Verification result:', isValid);`}
      />
    </div>
  );
}

// Continue with remaining functions...

export function walletAdapters() {
  return (
    <div data-section="wallet-adapters">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Wallet Adapters
      </h1>

      <h2 id="available-adapters" className="text-2xl font-semibold mt-8 mb-4">Available Adapters</h2>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>MetaMask Adapter</strong> - For Ethereum and EVM chains</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Phantom Adapter</strong> - For Solana ecosystem</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Custom Adapter</strong> - For any wallet with signing capability</div>
        </li>
      </ul>
    </div>
  );
}

export function storageOptions() {
  return (
    <div data-section="storage-options">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Storage Options
      </h1>

      <h2 id="storage-types" className="text-2xl font-semibold mt-8 mb-4">Storage Types</h2>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Local Storage</strong> - Browser localStorage (default)</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>IndexedDB</strong> - Browser database for larger data</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>File System</strong> - Local file storage</div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary-accent  font-bold">•</span>
          <div><strong>Cloud Storage</strong> - Encrypted cloud backup</div>
        </li>
      </ul>
    </div>
  );
}

export function configuration() {
  return (
    <div data-section="configuration">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Configuration
      </h1>

      <h2 id="basic-config" className="text-2xl font-semibold mt-8 mb-4">Basic Configuration</h2>
      <CodeBlock
        id="config-example"
        language="typescript"
        code={`const wallet = new QuantzenWallet(adapter, {
  network: 'mainnet',        // 'mainnet' or 'testnet'
  algorithm: 'dilithium2',   // Default algorithm
  autoBackup: true,          // Auto-generate backups
  storage: {
    type: 'localStorage',    // Storage provider
    encrypted: true          // Encrypt stored data
  }
});`}
      />
    </div>
  );
}

export function exampleMetamask() {
  return (
    <div data-section="example-metamask">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        MetaMask Example
      </h1>

      <CodeBlock
        id="metamask-complete"
        language="typescript"
        code={`import { QuantzenWallet, MetaMaskAdapter } from '@quantzen/sdk';

// Initialize with MetaMask
const wallet = new QuantzenWallet(new MetaMaskAdapter());

// Connect and enable quantum-proofing
await wallet.initialize();
await wallet.quantumProofWallet({ algorithm: 'dilithium2' });

// Sign transactions
const auditRecord = await wallet.signTransaction(yourTransaction);`}
      />
    </div>
  );
}

export function examplePhantom() {
  return (
    <div data-section="example-phantom">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Phantom Example
      </h1>

      <CodeBlock
        id="phantom-complete"
        language="typescript"
        code={`import { QuantzenWallet, PhantomAdapter } from '@quantzen/sdk';

// Initialize with Phantom
const wallet = new QuantzenWallet(new PhantomAdapter());

// Connect and enable quantum-proofing
await wallet.initialize();
await wallet.quantumProofWallet({ algorithm: 'dilithium3' });

// Sign Solana transactions
const auditRecord = await wallet.signTransaction(solanaTransaction);`}
      />
    </div>
  );
}

export function exampleCustom() {
  return (
    <div data-section="example-custom">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Custom Wallet Example
      </h1>

      <CodeBlock
        id="custom-complete"
        language="typescript"
        code={`import { QuantzenWallet, CustomAdapter } from '@quantzen/sdk';

class MyCustomAdapter extends CustomAdapter {
  async connect() {
    // Your wallet connection logic
  }

  async sign(data) {
    // Your signing logic
    return yourWallet.sign(data);
  }
}

const wallet = new QuantzenWallet(new MyCustomAdapter());
await wallet.initialize();
await wallet.quantumProofWallet({ algorithm: 'dilithium2' });`}
      />
    </div>
  );
}

export function apiReference() {
  return (
    <div data-section="api-reference">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        API Reference
      </h1>

      <h2 id="core-methods" className="text-2xl font-semibold mt-8 mb-4">Core Methods</h2>
      
      <h3 id="quantzenwallet" className="text-xl font-semibold mt-6 mb-3">QuantZen™Wallet</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-primary-accent/30">
          <thead>
            <tr className="bg-primary-accent/10">
              <th className="border border-primary-accent/30 px-4 py-2 text-left">Method</th>
              <th className="border border-primary-accent/30 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>initialize()</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Initialize wallet and connect to adapter</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>quantumProofWallet(config?)</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Enable quantum-proofing for the wallet</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>signTransaction(transaction)</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Sign transaction with dual signatures</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>isQuantumProofed()</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Check if wallet is quantum-proofed</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>getWalletAddress()</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Get connected wallet address</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="quantzensdk" className="text-xl font-semibold mt-6 mb-3">QuantZen™SDK</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-primary-accent/30">
          <thead>
            <tr className="bg-primary-accent/10">
              <th className="border border-primary-accent/30 px-4 py-2 text-left">Method</th>
              <th className="border border-primary-accent/30 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>generateKeypair(algorithm)</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Generate PQC keypair (Dilithium2/3/5)</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>sign(algorithm, secretKey, message)</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Sign message with PQC key</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>verify(algorithm, publicKey, message, signature)</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Verify PQC signature</td>
            </tr>
            <tr>
              <td className="border border-primary-accent/30 px-4 py-2"><code>createDualSignature(transaction, ecdsaSig, secretKey)</code></td>
              <td className="border border-primary-accent/30 px-4 py-2">Create dual signature for EVM transaction</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="wallet-adapters" className="text-2xl font-semibold mt-8 mb-4">Wallet Adapters</h2>
      
      <h3 id="available-adapters" className="text-xl font-semibold mt-6 mb-3">Available Adapters</h3>
      <ul className="space-y-2 mb-6">
        <li><strong>MetaMaskAdapter:</strong> For MetaMask and EVM wallets</li>
        <li><strong>PhantomAdapter:</strong> For Phantom and Solana wallets</li>
        <li><strong>Custom Adapter:</strong> Implement WalletAdapter interface</li>
      </ul>

      <h3 id="walletadapter-interface" className="text-xl font-semibold mt-6 mb-3">WalletAdapter Interface</h3>
      <CodeBlock
        id="walletadapter-interface-code"
        language="typescript"
        code={`interface WalletAdapter {
  connect(): Promise<string>;
  signMessage(message: string | Uint8Array): Promise<Uint8Array>;
  signTransaction(tx: WalletTransaction): Promise<Uint8Array>;
  getAddress(): Promise<string>;
  isConnected(): boolean;
  disconnect?(): Promise<void>;
  getChainType(): 'evm' | 'solana' | 'bitcoin';
}`}
      />

      <h2 id="storage-options" className="text-2xl font-semibold mt-8 mb-4">Storage Options</h2>
      
      <h3 id="available-storage-adapters" className="text-xl font-semibold mt-6 mb-3">Available Adapters</h3>
      <ul className="space-y-2 mb-6">
        <li><strong>IndexedDBAdapter:</strong> Browser persistent storage</li>
        <li><strong>FileSystemAdapter:</strong> Node.js file system</li>
        <li><strong>Custom Adapter:</strong> Implement StorageAdapter interface</li>
      </ul>

      <h3 id="storageadapter-interface" className="text-xl font-semibold mt-6 mb-3">StorageAdapter Interface</h3>
      <CodeBlock
        id="storageadapter-interface-code"
        language="typescript"
        code={`interface StorageAdapter {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
  keys(): Promise<string[]>;
}`}
      />

      <h2 id="configuration" className="text-2xl font-semibold mt-8 mb-4">Configuration</h2>
      
      <h3 id="quantumproofconfig" className="text-xl font-semibold mt-6 mb-3">QuantumProofConfig</h3>
      <CodeBlock
        id="quantumproofconfig-code"
        language="typescript"
        code={`interface QuantumProofConfig {
  algorithm?: 'dilithium2' | 'dilithium3' | 'dilithium5';
  kyberAlgorithm?: 'kyber512' | 'kyber768' | 'kyber1024';
  autoGenerate?: boolean;
}`}
      />

      <h3 id="QuantZen™config" className="text-xl font-semibold mt-6 mb-3">QuantZen™Config</h3>
      <CodeBlock
        id="quantzenconfig-code"
        language="typescript"
        code={`interface QuantzenConfig {
  enableLogging?: boolean;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
  timeout?: number;
  wasmPath?: string;
}`}
      />

      <h2 id="examples" className="text-2xl font-semibold mt-8 mb-4">Examples</h2>
      
      <h3 id="metamask-integration" className="text-xl font-semibold mt-6 mb-3">MetaMask Integration</h3>
      <CodeBlock
        id="metamask-example-code"
        language="typescript"
        code={`import { QuantzenWallet, MetaMaskAdapter } from '@quantzen/sdk';

// Create wallet instance
const wallet = new QuantzenWallet(new MetaMaskAdapter());

// Initialize
await wallet.initialize();
console.log('Wallet address:', wallet.getWalletAddress());

// Enable quantum-proofing
await wallet.quantumProofWallet({ algorithm: 'dilithium2' });

// Sign transaction
const transaction = {
  chainId: 1,
  from: wallet.getWalletAddress(),
  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  value: '1000000000000000000',
  gas: '21000',
  gasPrice: '20000000000'
};

const auditRecord = await wallet.signTransaction(transaction);
console.log('Transaction signed:', auditRecord.txHash);
console.log('Audit CID:', auditRecord.auditCID);`}
      />

      <h3 id="phantom-integration" className="text-xl font-semibold mt-6 mb-3">Phantom Integration</h3>
      <CodeBlock
        id="phantom-example-code"
        language="typescript"
        code={`import { QuantzenWallet, PhantomAdapter } from '@quantzen/sdk';

// Create wallet instance
const wallet = new QuantzenWallet(new PhantomAdapter());

// Initialize
await wallet.initialize();

// Enable quantum-proofing
await wallet.quantumProofWallet({ algorithm: 'dilithium2' });

// Sign Solana transaction
const transaction = {
  accountKeys: [wallet.getWalletAddress()],
  recentBlockhash: '...', // Get from Solana RPC
  instructions: [{
    programIdIndex: 0,
    accounts: [],
    data: ''
  }]
};

const auditRecord = await wallet.signTransaction(transaction);
console.log('Transaction signed:', auditRecord.txHash);`}
      />

      <h3 id="custom-wallet-integration" className="text-xl font-semibold mt-6 mb-3">Custom Wallet Integration</h3>
      <CodeBlock
        id="custom-wallet-example-code"
        language="typescript"
        code={`import { QuantzenWallet, WalletAdapter } from '@quantzen/sdk';

// Create custom adapter
class MyWalletAdapter implements WalletAdapter {
  async connect(): Promise<string> {
    // Your wallet connection logic
    return walletAddress;
  }
  
  async signMessage(message: string | Uint8Array): Promise<Uint8Array> {
    // Your message signing logic
    return signature;
  }
  
  async signTransaction(tx: WalletTransaction): Promise<Uint8Array> {
    // Your transaction signing logic
    return signature;
  }
  
  async getAddress(): Promise<string> {
    return this.walletAddress;
  }
  
  isConnected(): boolean {
    return this.connected;
  }
  
  getChainType(): 'evm' | 'solana' | 'bitcoin' {
    return 'evm';
  }
}

// Use custom adapter
const wallet = new QuantzenWallet(new MyWalletAdapter());
await wallet.initialize();
await wallet.quantumProofWallet();`}
      />
    </div>
  );
}


export function faq() { return ( <div data-section="faq"> <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent"> FAQ </h1> <h2 id="common-questions" className="text-2xl font-semibold mt-8 mb-4">Common Questions</h2> <h3 id="integration-time" className="text-xl font-semibold mt-6 mb-3">How long does integration take?</h3> <p className="leading-relaxed mb-4"> <strong>For Wallet Providers:</strong> 5 minutes. Just install the SDK, initialize the wallet, and call quantumProofWallet(). </p> <p className="leading-relaxed mb-4"> <strong>For dApps:</strong> 0 minutes if the wallet supports it. Otherwise, optional integration takes about 10-15 minutes. </p> <h3 id="infrastructure" className="text-xl font-semibold mt-6 mb-3">Do I need to deploy any infrastructure?</h3> <p className="leading-relaxed mb-4"> No. The SDK works entirely client-side. All key generation, encryption, and signing happens in the browser. The only optional component is IPFS for audit record storage, which can be configured or omitted. </p> <h3 id="key-recovery" className="text-xl font-semibold mt-6 mb-3">What happens if a user loses their keys?</h3> <p className="leading-relaxed mb-4"> Users can recover their keys in multiple ways: </p> <ul className="space-y-2 mb-4"> <li><strong>Backup File:</strong> Import encrypted backup JSON file</li> <li><strong>Seed Recovery:</strong> Regenerate keys from wallet seed (deterministic)</li> <li><strong>Cross-Device:</strong> Import backup on new device</li> </ul> <h3 id="cost" className="text-xl font-semibold mt-6 mb-3">How much does it cost?</h3> <p className="leading-relaxed mb-4"> The SDK is free and open-source (MIT License). There are no licensing fees or usage costs. The only costs are: </p> <ul className="space-y-2 mb-4"> <li>Gas fees for blockchain transactions (normal)</li> <li>Optional IPFS storage costs (if using Pinata or similar)</li> </ul> <h3 id="algorithm-choice" className="text-xl font-semibold mt-6 mb-3">Which algorithms should I use?</h3> <ul className="space-y-2 mb-4"> <li><strong>Dilithium2:</strong> Fast, smaller signatures (1312 bytes public key). Recommended for most use cases.</li> <li><strong>Dilithium3:</strong> Balanced security and performance (1952 bytes public key). Good for high-value transactions.</li> <li><strong>Dilithium5:</strong> Highest security (2592 bytes public key). Use for maximum security requirements.</li> </ul> <h3 id="blockchain-support" className="text-xl font-semibold mt-6 mb-3">Does it work with all blockchains?</h3> <p className="leading-relaxed mb-4"> Currently, the SDK has full support for: </p> <ul className="space-y-2 mb-4"> <li><strong>EVM Chains:</strong> Ethereum, Polygon, BSC, Arbitrum, etc.</li> <li><strong>Solana:</strong> Native Solana transactions</li> <li><strong>Bitcoin:</strong> Bitcoin transaction signing</li> </ul> <p className="leading-relaxed mb-4"> Move-based chains (Sui, Aptos) have framework support but need completion. </p> </div> ); }
export function troubleshooting() {
  const issues = [
    {
      id: "keys-not-generating",
      title: "Keys Not Generating",
      icon: KeyRound,
      solution:
        "Ensure the WASM module is loaded. Check browser console for errors. Verify sufficient memory is available."
    },
    {
      id: "transaction-signing-fails",
      title: "Transaction Signing Fails",
      icon: ShieldQuestion,
      solution:
        "Verify wallet is connected. Check the transaction format is correct. Ensure keys are decrypted (SDK handles this automatically)."
    },
    {
      id: "backup-import-fails",
      title: "Backup Import Fails",
      icon: RefreshCcw,
      solution:
        "Verify backup file is valid JSON. Check wallet address matches. Ensure the backup version is compatible."
    },
    {
      id: "performance-issues",
      title: "Performance Issues",
      icon: AlertTriangle,
      solution:
        "Key generation takes ~50–100ms. Signing takes ~20–50ms. If experiencing slowdowns, check WASM module loading and browser performance."
    }
  ];

  return (
    <div data-section="troubleshooting" className="pb-10">
      <h1 id="troubleshooting" className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Troubleshooting
      </h1>

      <div className="space-y-6">
        {issues.map(({ id, title, icon: Icon, solution }) => (
          <div
            key={id}
            id={id}
            className="border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-6 h-6 mt-5 text-primary-accent" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>

            <p className="leading-relaxed text-gray-300">
              <strong className="text-white">Solution:</strong> {solution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function additionalResources() {
  return (
    <div data-section="additional-resources">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
        Additional Resources
      </h1>

      <ul className="space-y-2 mb-6">
        <li>• <a href="#" className="text-primary-accent hover:underline">Full SDK Documentation</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">Quick Start Guide</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">CDN Usage Guide</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">NPM Package</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">QuantZen™ Website</a></li>
      </ul>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-xl border border-primary-accent/30">
        <p className="text-center leading-relaxed">
          <strong>QuantZen™ SDK</strong> - Making quantum-resistant cryptography accessible to developers worldwide.
        </p>
        <p className="text-center mt-2">
          Visit us at <a href="https://www.quantzen.live" className="text-primary-accent hover:underline">https://www.quantzen.live</a>
        </p>
      </div>

      <h2 id="documentation" className="text-2xl font-semibold mt-8 mb-4">Documentation</h2>
      <ul className="space-y-2 my-6">
        <li>• <a href="#" className="text-primary-accent hover:underline">API Reference</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">GitHub Repository</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">Example Projects</a></li>
      </ul>

      <h2 id="support" className="text-2xl font-semibold mt-8 mb-4">Support</h2>
      <ul className="space-y-2 my-6">
        <li>• <a href="#" className="text-primary-accent hover:underline">Discord Community</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">Technical Support</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">Bug Reports</a></li>
      </ul>

      <h2 id="learning" className="text-2xl font-semibold mt-8 mb-4">Learning</h2>
      <ul className="space-y-2 my-6">
        <li>• <a href="#" className="text-primary-accent hover:underline">Post-Quantum Cryptography Primer</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">NIST Standards Overview</a></li>
        <li>• <a href="#" className="text-primary-accent hover:underline">Blockchain Security Best Practices</a></li>
      </ul>
    </div>
  );
}
