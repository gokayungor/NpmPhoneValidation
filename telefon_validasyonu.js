function validatePhoneNumber(phoneNumber) {
    const digitsOnly = phoneNumber.replace(/\D/g, '');

    if (/^\d{12}$/.test(digitsOnly)) {
        return 'Telefon Numarası Geçerli.';
    } 
    else {
        return 'Geçerli bir telefon numarası girin (örn: +905347841302).';
    }
}

module.exports = validatePhoneNumber;
