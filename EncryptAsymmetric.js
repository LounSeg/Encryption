const crypto = require('crypto');

// Generate a public/private RSA key pair
function generateKeyPair() {
    return crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });
}

// Encrypt a message using the public key
function encryptWithPublicKey(publicKey, message) {
    const buffer = Buffer.from(message);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
}

// Decrypt a message using the private key
function decryptWithPrivateKey(privateKey, message) {
    const buffer = Buffer.from(message, 'base64');
    const decrypted = crypto.privateDecrypt({
        key: privateKey,
        passphrase: ''
    }, buffer);
    return decrypted.toString();
}

// Generate a key pair
const { publicKey, privateKey } = generateKeyPair();

const message = 'Hello, world!';

// Encrypt a message using the public key
const encrypted = encryptWithPublicKey(publicKey, message);

// Decrypt the message using the private key
const decrypted = decryptWithPrivateKey(privateKey, encrypted);

console.log(`Original message: ${message}`);
console.log(`Encrypted message: ${encrypted}`);
console.log(`Decrypted message: ${decrypted}`);
