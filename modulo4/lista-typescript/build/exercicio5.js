var ROLE;
(function (ROLE) {
    ROLE["USER"] = "user";
    ROLE["ADMIN"] = "admin";
})(ROLE || (ROLE = {}));
const users = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];
function getAdmins(lista) {
    const admins = lista.filter((item) => {
        return item.role === ROLE.ADMIN;
    });
    const resultado = admins.map((item) => {
        return item.email;
    });
    return resultado;
}
console.log(getAdmins(users));
//# sourceMappingURL=exercicio5.js.map