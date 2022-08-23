const currentDate = new Date().getTime();
function idCardNeedsRenewal(birthDate, issuanceIdCard) {
    const dateOfBirth = new Date(birthDate).getTime();
    const idade = Math.floor((currentDate - dateOfBirth) / 31536000000);
    const dateOfIssuance = new Date(issuanceIdCard).getTime();
    const timeWithoutRenewal = Math.floor((currentDate - dateOfIssuance) / 31536000000);
    if (idade <= 20 && timeWithoutRenewal >= 5) {
        return true;
    }
    else if (idade > 20 && idade <= 50 && timeWithoutRenewal >= 10) {
        return true;
    }
    else if (idade > 50 && timeWithoutRenewal >= 15) {
        return true;
    }
    else {
        return false;
    }
}
console.log(idCardNeedsRenewal("1995/11/30", "2010/10/20"));
//# sourceMappingURL=exercicio8.js.map