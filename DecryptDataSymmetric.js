const crypto = require('crypto');

function decryptStringWithAES256(cipher, key) {
    const [ivString, encryptedString] = cipher.split(':');
    const iv = Buffer.from(ivString, 'hex');
    const encryptedText = Buffer.from(encryptedString, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

const myCipher = '70caff4fe7435137afdc660ae99e9ab6:6c85a49c4dd367d4e8a0fd09ed88b8ef';
const myKey = 'azertyuiopqsdfghjklmwxcvbn123456';
const decryptedString = decryptStringWithAES256(myCipher, myKey);
console.log(decryptedString);
