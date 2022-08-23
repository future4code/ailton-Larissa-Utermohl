const clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function geraDevedores(lista) {
    const listaAtualizada = lista.map((item) => {
        let saldoAtualizado = 0;
        for (let debito of item.debitos) {
            saldoAtualizado -= debito;
        }
        const pessoaComSaldoAtualizado = {
            cliente: item.cliente,
            saldoTotal: item.saldoTotal + saldoAtualizado,
            debitos: []
        };
        return pessoaComSaldoAtualizado;
    });
    const resultado = listaAtualizada.filter((item) => {
        return item.saldoTotal < 0;
    });
    return resultado;
}
console.log(geraDevedores(clientes));
//# sourceMappingURL=exercicio6.js.map