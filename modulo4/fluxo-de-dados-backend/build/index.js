"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Exercicio1
app.get("/test", (req, res) => {
    res.status(200).send({
        message: "Servidor funcionando!"
    });
});
//Exercicio3
app.post("/products", (req, res) => {
    let errorCode = 400;
    try {
        const { name, price } = req.body;
        if (!name || !price) {
            errorCode = 422;
            throw new Error("Product name and price are required");
        }
        ;
        if (typeof name !== "string" || typeof price !== "number") {
            errorCode = 422;
            throw new Error("Product name and price must be strings and numbers");
        }
        ;
        if (price <= 0) {
            errorCode = 422;
            throw new Error("Price must be greater than zero");
        }
        ;
        // Variável newProduct -> Representação do novo produto a ser criado.
        const newProduct = {
            // id -> Gerado pelo fluxo a partir do tamanho da lista de produtos
            id: data_1.products.length + 1,
            name: name,
            price: price
        };
        // Inserção do novo produto à lista de produtos.
        data_1.products.push(newProduct);
        res.status(201).send({
            message: "Product created successfully!",
            products: data_1.products
        });
    }
    catch (error) {
        /* Início de comentário multi-linha
  
            Tratamento de erro verifica duas situações:
            Situação 1) Se um erro inesperado ocorrer, o status 500 (Internal Server Error)
            é exibido e a requisição encerrada.
            Situação 2) Se algum erro válido ocorrer, o status exibe o errorCode e a mensagem
            definida para cada tipo de erro.
  
        Fim de comentário multi-linha */
        if (res.statusCode === 200) {
            res.status(500).end();
        }
        else {
            res.status(errorCode).send(error.message);
        }
        ;
    }
    ;
});
//Exercicio4
app.get("/products", (req, res) => {
    try {
        res.status(200).send(data_1.products);
    }
    catch (error) {
        // Erro genérico de servidor.
        res.status(500).send(error.message);
    }
    ;
});
app.listen(3003, () => console.log("Servidor disponível em 3003"));
// app.get('/test/hello', (req: Request, res: Response) => {
//   const name = req.query.name
//   const ocupacao = req.body.ocupacao
//   res.send(`Olá, ${ocupacao} ${name}!`)
// })
// app.get('/test/:number', (req: Request, res: Response) => {
//   res.send(
//     `Seu número da sorte é ${Number(req.params.number) + 3}!
//   `)
// })
// app.get("/playlists", (req: Request, res: Response) => {
//   // tenho todos os usuários
//   const currentUsers = users // array de objetos
//   console.log(1, currentUsers);
//   // Vou pegar as playlists de cada usuário
//   const userPlaylists = currentUsers.map((user: any) => {
//     return user.playlists
//   }) // array de arrays
//   console.log(2, userPlaylists)
//   const result = userPlaylists.flat(1)
//   res.status(200).send(result);
// })
// app.get("/playlists/search", (req: Request, res: Response) => {
//   const queriedName = req.query.name
//   if (!queriedName) {
//     res.status(400).send("Faltou a query 'name'")
//   }
//   const searchResult = []
//   for (let user of users) {
//     for (let playlist of user.playlists) {
//       if (playlist.name.includes(queriedName)) {
//         searchResult.push({
//           id: playlist.id,
//           name: playlist.name
//         })
//       }
//     }
//   }
//   res.send({
//     result: {
//       quantity: searchResult.length,
//       list: searchResult
//     }
//   })
// })
// app.get("/tracks", (req: Request, res: Response) => {
//   const playlistId = req.query.id
//   if (!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")
//   const allPlaylists = users.map((user: any) => {
//     return user.playlists
//   }).flat(1)
//   let tracks;
//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       tracks = playlist.tracks
//     }
//   })
//   res.status(200).send(tracks)
// })
// app.post('/playlists', (req: Request, res: Response) => {
//   const playlistName = req.body.name
//   const userIdToAdd = req.headers.authorization
//   for (let i = 0; i < users.length; i++ ) {
//     if (users[i].id === userIdToAdd) {
//       users[i].playlists.push({
//         id: Date.now().toString(),
//         name: playlistName,
//         tracks: []
//       })
//     }
//   }
//   res.send({ users })
// })
// app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
//   const playlistIdToAdd = req.params.playlistId
//   const userIdToAdd = req.headers.authorization
//   const { name, artist, url } = req.body
//   // iterando users
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === userIdToAdd) {
//       // iterando playlists do user
//       for (let j = 0; j < users[i].playlists.length; j++) {
//         if (users[i].playlists[j].id === playlistIdToAdd) {
//           users[i].playlists[j].tracks.push({
//             id: Date.now().toString(),
//             name,
//             artist,
//             url,
//           })
//         }
//       }
//     }
//   }
//   res.send({ users })
// })
// app.delete("/playlist", (req: Request, res: Response) => {
//   const id = req.query.id
//   users.forEach((user: any) => {
//     user.playlists = user.playlists.map((playlist: any) => {
//       if (playlist.id === id) {
//         return {}
//       }
//       return playlist
//     });
//   })
//   res.status(200).send(users)
// })
// app.delete("/track", (req: Request, res: Response) => {
//   const trackId = req.query.trackId
//   const playlistId = req.query.playlistId
//   const allPlaylists = users
//     .map((user: any) => {
//       return user.playlists;
//     })
//     .flat(1);
//   for (let i = 0; i <= allPlaylists.lenght; i++) {
//     allPlaylists[i]
//   }
//   for (let playlist of allPlaylists) {
//     playlist
//   }
//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       playlist.tracks = playlist.tracks.map((track: any) => {
//         if (track.id === trackId) {
//           return {};
//         }
//         return track;
//       });
//     }
//   })
//   res.status(200).send(allPlaylists)
// })
