describe("Testes com Jest", () => {
  test("Exercício 0", () => {
    expect(verificaPar(5)).toBe(false);
  });
  test("Exercício 1", () => {
    expect(stringMaiuscula("bananinha")).toBe("BANANINHA");
  });
  test("Exercício 2", () => {
    expect(transformaArray("dev")).toEqual(["d", "e", "v"]);
  });
  test("Exercício 3", () => {
    expect(converterString("50")).toBe(50);
  });
  test("Exercício 4", () => {
    expect(somaString("arvore")).toBe(6);
  });
  test("Exercício 5", () => {
    expect(numeroAleatorio()).toBeGreaterThanOrEqual(1);
    expect(numeroAleatorio()).toBeLessThanOrEqual(10);
  });
  test("Exercício 6", () => {
    const usuario: typeUsuarios = {
      nome: "astrodev",
      idade: 18,
    };
    expect(usuarios).toContainEqual(usuario);
  });
  test("Exercício 7", () => {
    expect(mediaLista(numeros)).toBe(7);
  });
  test("Exercício 8", () => {
    expect(verificaIdade(1992)).toBe(30);
  });

  test("Exercício ", () => {
    expect(data("1992/07/11")).toBe("11/07/1992");
  });
});

const verificaPar = (num: number): boolean => {
  return num % 2 === 0 ? true : false;
};

const stringMaiuscula = (testo: string): string => {
  return testo.toUpperCase();
};

const transformaArray = (testo: string): string[] => {
  return testo.split("");
};

const converterString = (string: string): number => {
  return Number(string);
};

const somaString = (testo: string): number => {
  return testo.length;
};

const numeroAleatorio = (): number => {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min) + min);
};

interface typeUsuarios {
  nome: string;
  idade: number;
}
const usuarios: typeUsuarios[] = [
  {
    nome: "astrodev",
    idade: 18,
  },
  {
    nome: "Lari",
    idade: 30,
  },
  {
    nome: "Julio",
    idade: 26,
  },
];

const numeros = [10, 4, 7, 6];

const mediaLista = (lista: any): number => {
  let somaTotal = 0;

  for (let n of lista) {
    somaTotal += n;
  }
  const media = Math.ceil(somaTotal / lista.length);
  return media;
};

const verificaIdade = (ano: number): number => {
  const dataAtual = new Date().getFullYear();
  return dataAtual - ano;
};

const data = (dataAtual: string): string => {
  const date = new Date(dataAtual);
  return date.toLocaleDateString();
};