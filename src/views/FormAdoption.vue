<template>
  <nav>
    <div class="nav-wrapper">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="../assets/image-removebg-preview.png" alt="" />
      </router-link>

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/formAdoption">Adote já</router-link></li>
        <li><router-link to="/">Quem somos</router-link></li>
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
            <input
              placeholder=""
              id="first_name"
              type="text"
              class="validate"
            />
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
        <div id="fireworks" ref="fireworks"></div>
        <div class="btn-container">
          <router-link
            id="btn11"
            @click="showFireworks"
            to="/Congratulations"
            class="btn waves-effect waves-light"
          >Enviar</router-link>
        </div>
      </form>
    </div>
    <router-link to="/" class="btn-return">Voltar à Página Inicial</router-link>
  </div>

  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Adota Pet</h5>
          <img src="../assets/facebook_bra.svg" alt="" />
          <img src="../assets/instagram_bra.svg" alt="" />
          <img src="../assets/twitter_bra.svg" alt="" />
          <img src="../assets/image copy 3.png" alt="" />
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Sobre nós</h5>
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="#!">Quem somos</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">O que fazemos</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">Nossa gente</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!"
                >Código de conduta</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">© 2024 Copyright Text</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FormAdoption",
  methods: {
    showFireworks() {
      // Função para mostrar fogos de artifício
    },
  },
};
</script>

<style scoped>
.nav-wrapper {
  background-color: #007f7b;
}

.formAdoption {
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff9c4;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

.formAdoption h1 {
  color: #ff8f00;
  font-size: 28px;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.input-field input[type="text"],
.input-field input[type="tel"],
.input-field input[type="email"],
.input-field input[type="date"],
.input-field label {
  color: #ff8f00;
}

.input-field input[type="text"]:focus,
.input-field input[type="tel"]:focus,
.input-field input[type="email"]:focus,
.input-field input[type="date"]:focus {
  border-bottom: 2px solid #ff6f00;
  box-shadow: none;
}

.input-field label {
  font-size: 16px;
}

.input-field label.active {
  color: #ff6f00;
}

.btn {
  background-color: #ff6f00;
  width: 100%;
  height: 48px;
  line-height: 48px;
  padding: 0 2rem;
  transition: background-color 0.3s ease, transform 0.2s ease,
  box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:hover,
.btn:focus {
  background: #ff8f00;
  transform: translateY(-2px); /* Movimenta ligeiramente o botão para cima */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra mais pronunciada para efeito de elevação */
}

.btn i {
  line-height: 48px;
}

.btn-return {
  color: #ff6f00;
  width: 200px;
  height: 48px;
  line-height: 48px;
  margin-top: 20px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  background-color: #fff3e0;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-return:hover {
  background-color: #ffe0b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.row {
  margin-bottom: 20px;
}

footer {
  background: #007f7b;
}

.footer h5 {
  color: #ffeb3b;
}

.footer a {
  color: #ffeb3b;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-copyright {
  text-align: center;
  color: #ffeb3b;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#btn11 {
  font-size: 15px !important;
  width: 180px !important;
  height: 50px !important;
  background-color: #ff6f00 !important;
  color: white !important;
  border-radius: 24px !important;
}

#btn11:hover {
  background: #ff8f00 !important;
}

</style>
