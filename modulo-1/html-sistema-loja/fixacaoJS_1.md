````
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salarioFixo = 2000;
let bonus = 100 * qtdeCarrosVendidos;
let comissao = valorTotalVendas * (5/100);
let salarioFinal = salarioFixo + bonus + comissao;
return salarioFinal;
}```
````
