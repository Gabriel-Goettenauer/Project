<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"
          ><img class="logo" src="../assets/image-removebg-preview.png" alt=""
        /></a>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/formAdoption">Adote já</router-link></li>
          <li><router-link to="/">Quem somos</router-link></li>
          <li><a  @click="toggleLoader" href="/favorites">Favoritos</a></li>
          <div class="loader" v-if="isLoading"></div>
        </ul>
      </div>
    </nav>

    <div class="Know">
      <div class="text-container-know">
        <h2 id="know">Conheça os bichinhos</h2>
        <p class="item2">
          <strong
            >Nossos espaços abrigam uma diversidade encantadora de animais: dos
            menores aos maiores, dos mais jovens aos mais experientes, dos mais
            tranquilos aos mais brincalhões.</strong
          >
        </p>
        <p class="item2">
          Navegue abaixo, fotos para conhecer o perfil de cada bichinho e
          escolha um para levar pra casa.
        </p>
        <p class="item2">Encontre o seu melhor amigo.</p>
      </div>
      <img class="img-know" src="../assets/image copy.png" alt="" />
    </div>



    <div class="flex-container">
      <img
        class="img-dog"
        src="../assets/image copy.png"
        alt="Imagem descritiva"
      />
      <div class="text-container">
        <img id="cel" src="../assets/image copy 2.png" alt="" />
        <h2 id="who">Quem somos</h2>
        <p>
          O Me Leva pra Casa é o programa de adoção responsável criado pela Vale
          que tem como objetivo encontrar novas famílias para os animais que
          foram impactados, direta ou indiretamente, pelo rompimento da barragem
          B1, em Brumadinho, e pelas evacuações e realocações preventivas em
          Minas Gerais.
        </p>
        <br />
        <p>
          Enquanto esperam pela adoção, os animais são cuidados com muito amor e
          carinho pelo nosso time de especialistas nas instalações de abrigo de
          fauna de responsabilidade da Vale.
        </p>
      </div>
    </div>



    <div class="Know  special-background">
      <img class="img-know3" src="../assets/image copy 6.png" alt="" />
      <img class="img-know2" src="../assets/image copy 7.png" alt="" />
      <div class="text-container-know">
        <img class="img-know1" src="../assets/image copy 5.png" alt="" />
        <h2 id="know">Me leva pra casa</h2>
        <p class="item2">
          <strong
            >Nós cuidamos deles. Agora deixe que eles cuidem de você.  </strong
          >
        </p>
        <p class="item2">
          Aqui a gente cuida de animais resgatados de áreas evacuadas de Minas Gerais e queremos compartilhar todo esse amor com mais pessoas por meio da adoção.  
        </p>
        <p class="item2">
Ter um animal de estimação traz benefícios para a saúde física e mental. É uma troca de amor e carinho que faz bem pra todo mundo. Leve um para casa: cuide dele e deixe que ele cuide de você também. 
</p>
      </div>
    </div>

    
   


    <div class="dropdowns-container">
  <div class="dropdown-trigger btn" data-target="dropdown1">
    <span class="text">Animais</span><span class="emoji">▼</span>
  </div>
  <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">Macho</a></li>
    <li><a href="#!">Fêmea</a></li>
  </ul>

  <div class="dropdown-trigger btn" data-target="dropdown2">
    <span class="text">Espécie</span><span class="emoji">▼</span>
  </div>
  <ul id="dropdown2" class="dropdown-content">
    <li><a href="#!">Cachorro</a></li>
  </ul>

  <div class="dropdown-trigger btn search-btn" data-target="dropdown3">
    <span class="text">Pesquise aqui</span><span class="emoji">🔍</span>
  </div>
  <ul id="dropdown3" class="dropdown-content">
    <li><a href="#!">Digite sua pesquisa</a></li>
  </ul>
</div>


 
            
    
    <DogFavorites :favorites="favorites" @remove-favorite="removeFavorite" />
    <div class="dog-container">
      <DogCard
        v-for="dog in paginatedDogs"
        :key="dog.id"
        :dog="dog"
        @add-favorite="addFavorite"
      />
    </div>
    <DogPagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @change-page="changePage"
    />
  </div>

  <footer class="page-footer footer1">
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
import axios from "axios";
import DogCard from "../components/DogCard.vue";
import DogFavorites from "../components/DogFavorites.vue";
import DogPagination from "../components/DogPagination.vue";
import M from "materialize-css";
export default {
  components: {
    DogCard,
    DogFavorites,
    DogPagination,
  },
  data() {
    return {
      dogs: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      currentPage: 1,
      itemsPerPage: 8,
      isLoading: false,
    };
  },
  mounted() {
    M.AutoInit();
  },
  computed: {
    paginatedDogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.dogs.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.dogs.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchDogs() {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random/50"
        );
        this.dogs = response.data.message.map((url, index) => ({
          id: index,
          url,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    
    addFavorite(dog) {
      if (!this.favorites.some((fav) => fav.id === dog.id)) {
        this.favorites.push(dog);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
        // Emitir evento ou redirecionar aqui se necessário
      }
    },
    removeFavorite(dogId) {
      this.favorites = this.favorites.filter((fav) => fav.id !== dogId);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.fetchDogs();
  },
};
</script>

<style>

.btn{
  border: 1px solid rgba(0, 0, 0, 0.171) !important;
  background: #FFFFFF !important;
  color: #007f7b !important;
  border-radius: 6px !important;
  height: 50px !important;
  padding: 8px !important;
  font-size: 12px !important;
  margin: 50px;
}

.btn:hover{
  cursor: pointer;
}

.dropdowns-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 25px 0;
  margin-bottom: -80px;
  margin-top:80px;
}

.dropdown-trigger {
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  width: 350px;
  margin-left:10px;
  display: flex !important;
  justify-content: space-between !important;
}

.dropdown-content {
  display: none; 
  position: absolute; 
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
}


.img-know3{
  width: 250px;
}

.img-know2{
  width: 250px;
  margin-left: 20px;
  margin-top: 50px;
}

.img-know1{
  margin-left: 122px;
  margin-bottom: -30px;
  width: 45px;
}

.footer1 {
  background-color: #007f7b !important;
}
.nav-wrapper {
  background: #007f7b;
}

.dog-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.img-dog {
  margin-left: 50px;
}

.logo {
  width: 120px;
}

.flex-container {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  background: #ee6f16;
  padding: 60px;
  height: 650px;
}

.flex-container img {
  margin-right: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.text-container h2 {
  margin-bottom: 10px;
}

.text-container p {
  text-indent: 20px; 
  margin-bottom: 10px;
}

p {
  margin-left: 120px;
  color: white;
  font-size: 20px;
}

#who {
  margin-left: 120px;
  color: white;
  font-size: 60px;
}

#cel {
  width: 50px;
  margin-left: 120px;
}

#know {
  margin-left: 120px;
}

.item2 {
  color: gray;
}

.flex-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.flex-container img.img-dog {
  margin-right: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.text-container h2 {
  margin-bottom: 10px;
}

.text-container p {
  text-indent: 20px;
  margin-bottom: 10px;
}

.Know {
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
  margin: 50px;
}

.text-container-know {
  flex: 1;
  margin-left: -15px;
  margin-bottom: 100px;
}

.img-know {
  margin-left: 20px;
  width: 450px;
  margin-right: 50px;
}

.footer-copyright {
  text-align: center;
}


</style>
