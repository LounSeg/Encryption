const crypto = require('crypto');

function decrypt(cipherText, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(cipherText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const cipherText = 'a8c1b343bf9dfe8dfd824d73e4fd741e';
const key = '6c04ed45440dd0af7dbae548107ef514';
const plainText = decrypt(cipherText, key);
console.log(plainText); // prints the decrypted plain text
