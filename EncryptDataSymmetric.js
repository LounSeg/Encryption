const crypto = require('crypto');

function encryptStringWithAES256(string, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(string);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

const myString = 'Hello, world!';
const myKey = 'azertyuiopqsdfghjklmwxcvbn123456';
const encryptedString = encryptStringWithAES256(myString, myKey);
console.log(encryptedString);