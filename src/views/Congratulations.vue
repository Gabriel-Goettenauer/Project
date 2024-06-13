<template>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <img class="logo" src="../assets/image-removebg-preview.png" alt="" />
        </a>
  
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/formAdoption">Adote já</router-link></li>
          <li><a href="badges.html">Quem somos</a></li>
          <li><a href="/favorites">Favoritos</a></li>
        </ul>
      </div>
    </nav>
  
    <div class="container">
      <div class="message">
        <h2>Parabéns pela Adoção!</h2>
        <p>Olá,</p>
        <p>
          É com muita alegria que parabenizamos você por essa nova e emocionante jornada
          como novo(a) pai/mãe de um pet! Este é um momento especial e estamos muito felizes
          por você ter escolhido proporcionar um lar amoroso para um animalzinho que tanto
          precisa.
        </p>
        <p>
          Em breve, entraremos em contato por e-mail com mais detalhes e orientações sobre
          os próximos passos. Fique de olho na sua caixa de entrada!
        </p>
        <p>
          Se tiver qualquer dúvida ou precisar de mais informações, não hesite em nos
          contatar. Estamos aqui para ajudar no que for necessário.
        </p>
        <p>Com carinho,</p>
        <p><strong>Equipe Adota Pet</strong></p>
      </div>
    </div>
  
    <footer class="page-footer footer1">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Adota Pet</h5>
            <img src="../assets/facebook_bra.svg" alt="">
            <img src="../assets/instagram_bra.svg" alt="">
            <img src="../assets/twitter_bra.svg" alt="">
            <img src="../assets/image copy 3.png" alt="">
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Sobre nós</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Quem somos</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">O que fazemos</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Nossa gente</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Código de conduta</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2024 Copyright Text
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { faker } from '@faker-js/faker';
  export default {
    name: 'SeuFavorito',
    data() {
      return {
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
        dogType: faker.animal.dog(), 
        dogGender: Math.random() > 0.5 ? 'male' : 'female', 
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .message {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 20px 0;
  }
  
  .message h2 {
    color: #007f7b;
  }
  
  .message p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
  
  .footer1 img {
    margin-right: 10px;
  }
  </style>
  