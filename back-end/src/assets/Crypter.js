const crypto = require('crypto')

async function Crypter(pass) {
    // Codifique a senha como ArrayBuffer
    const encoder = new TextEncoder();
    const senhaBuffer = encoder.encode(pass);
  
    // Calcule o hash usando SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', senhaBuffer);
  
    // Converta o ArrayBuffer para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  
    return hashHex;
}

module.exports = Crypter;