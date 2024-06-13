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
    <div class="formAdoption">
      <h1>Formulário de Adoção</h1>
  
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="" id="first_name" type="text" class="validate" />
              <label for="first_name">Primeiro nome</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Sobrenome</label>
            </div>
            <div class="input-field col s6">
              <input id="icon_telephone" type="tel" class="validate" />
              <label for="icon_telephone">Telefone</label>
            </div>
            <div class="input-field col s6">
              <input id="icon_cpf" type="tel" class="validate" />
              <label for="icon_cpf">CPF</label>
            </div>
          </div>
  
          <!-- Campo de data de nascimento -->
          <div class="row">
            <div class="input-field col s12">
              <input id="birthdate" type="date" class="validate" />
              <label for="birthdate">Data de Nascimento</label>
            </div>
          </div>
  
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Enviar
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
      <button class="btn-return">Voltar à Página Inicial</button>
    </div>
  
    <footer class="page-footer">
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
  export default {
    name: "FormAdoption",
  };
  </script>
  
  <style scoped>
  .nav-wrapper {
    background-color: #007f7b;
  }
  
  .formAdoption {
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
  }
  
  .formAdoption h1 {
    color: #ffffff;
    background-color: #007f7b73;
    font-size: 28px;
    text-align: center;
    margin-bottom: 2rem;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .input-field input[type="text"],
  .input-field input[type="tel"],
  .input-field input[type="email"],
  .input-field input[type="date"],
  .input-field label {
    color: #333;
  }
  
  .input-field input[type="text"]:focus,
  .input-field input[type="tel"]:focus,
  .input-field input[type="email"]:focus,
  .input-field input[type="date"]:focus {
    border-bottom: 2px solid #007f7b;
    box-shadow: none;
  }
  
  .input-field label {
    font-size: 14px;
  }
  
  .input-field label.active {
    color: #007f7b;
  }
  
  .btn {
    background-color: #ee6f16;
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding: 0 2rem;
  }
  
  .btn:hover,
  .btn:focus {
    background: #005f5b;
  }
  
  .btn i {
    line-height: 48px;
  }
  
  .btn-return {
    background-color: #007f7b;
    color: white;
    width: 250px;
    height: 48px;
    line-height: 48px;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 130px;
  }
  
  .btn-return:hover,
  .btn-return:focus {
    background-color: #005f5b;
  }
  
  .row {
    margin-bottom: 20px;
  }
  
  footer {
    background: #007f7b;
  }
  
  .footer-copyright {
    text-align: center;
  }
  </style>
  