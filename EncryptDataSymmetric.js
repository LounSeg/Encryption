const crypto = require('crypto');

function encryptWithIV(inputString, key) {
    // Generate a random Initialization Vector (IV) of 16 bytes
    const iv = crypto.randomBytes(16);

    // Create a cipher using the AES-256-CBC algorithm and the provided key and IV
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    // Update the cipher with the input string
    let encrypted = cipher.update(inputString, 'utf8', 'hex');

    // Finalize the cipher and append the final block
    encrypted += cipher.final('hex');

    // Return the IV and the encrypted text as a string separated by a colon
    return iv.toString('hex') + ':' + encrypted;
}

const inputString = 'Hello, world!';
const key = 'azertyuiopqsdfghjklmwxcvbn123456';

const encryptedData = encryptWithIV(inputString, key);
console.log(encryptedData);

function encryptAES256(inputString, key) {
    const iv = crypto.randomBytes(16); // generate a random initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv); // create a cipher with the given key and iv
    let encrypted = cipher.update(inputString, 'utf8', 'hex'); // update the cipher with the input string
    encrypted += cipher.final('hex'); // finalize the cipher

    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
}

const encryptedData2 = encryptAES256(inputString, key);
console.log(encryptedData2);