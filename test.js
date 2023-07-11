const validatePhoneNumber = require('./telefon_validasyonu');

const phoneNumber = '+905347841302';
const isValid = validatePhoneNumber(phoneNumber);

console.log(`Telefon numarası geçerli mi? ${isValid}`);
