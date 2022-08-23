function printBirthDate(name, birthDate) {
    const date = birthDate.split("/");
    const day = date[0];
    const month = date[1];
    const year = date[2];
    return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`;
}
console.log(printBirthDate("Maria", "20/10/1990"));
//# sourceMappingURL=index.js.map