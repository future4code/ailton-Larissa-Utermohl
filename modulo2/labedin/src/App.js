import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Astrodev" 
          descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
=======
import email from "./img/email.png";
import map from "./img/map.png";
import CardPequeno from './components/CardGrande/CardPequeno';
import styled from 'styled-components';
 
const ContainerApp= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

`

function App() {
  return (
    <ContainerApp>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://thumbs2.imgbox.com/ba/7d/WvKj39dF_t.png" 
          nome="Larissa Utermohl" 
          descricao="Oi, eu sou a Larissa. Nos últimos 10 anos viajei o mundo escrevendo para um blog. Atualmente sou aluna da Labenu. "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png" 
>>>>>>> master
          texto="Ver mais"
        />
      </div>

<<<<<<< HEAD
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
=======
  

        <div className="page-section-container">
        <CardPequeno
        image={email}
        tipo= "Email:"
        texto="larilinda@gmail.com"
       />
        </div>

        <div className="page-section-container">
        <CardPequeno
        image={map}
        tipo= "Endereco:"
        texto= "Rua das Araras, 22 - Florianopolis"
       />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://thumbs2.imgbox.com/41/88/F44y4zan_t.png" 
          nome="Jardim do Mundo" 
          descricao="Gerenciamento de pessoas" 
        />
        
        <CardGrande 
          imagem="https://thumbs2.imgbox.com/51/de/cGrXodbx_t.png" 
          nome="Airbnb" 
          descricao="Web Designer" 
>>>>>>> master
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
<<<<<<< HEAD
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
=======
          imagem="https://thumbs2.imgbox.com/f1/63/3LGwRENh_t.png" 
>>>>>>> master
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
<<<<<<< HEAD
    </div>
=======
    </ContainerApp>
>>>>>>> master
  );
}

export default App;
