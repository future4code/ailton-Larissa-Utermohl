import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
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
          texto="Ver mais"
        />
      </div>

  

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
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://thumbs2.imgbox.com/f1/63/3LGwRENh_t.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </ContainerApp>
  );
}

export default App;
