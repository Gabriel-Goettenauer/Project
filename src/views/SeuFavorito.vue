<template>
  <nav>
  <div class="nav-wrapper">
    <router-link :to="{ name: 'home' } ">
          <img class="logo" src="../assets/image-removebg-preview.png" alt=""/>
        </router-link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><router-link to="/formAdoption">Adote já</router-link></li>
      <li><router-link to="/">Quem somos</router-link></li>
      <li><a href="/favorites">Favoritos</a></li>
    </ul>
  </div>
</nav>
  <div class="container">
      <h1>Seus Dogs Favoritos</h1>
      <ul>
          <li v-for="favorite in favorites" :key="favorite.id" class="card">
              <img :src="favorite.url" alt="Dog" class="card-image"/>
              <div class="card-body">
                <h5 class="text1">{{ dogType }} <span v-if="dogGender === 'male'">♂️</span><span v-else>♀️</span></h5>
                <button @click="removeFavorite(favorite.id)" class="remove-button">Remover</button>
              </div>
          </li>
          </ul>
        <li><router-link to="/formAdoption" class="adoption-link">Adote já</router-link></li>
      <DogFavorites :favorites="favorites" @remove-favorite="removeFavorite" />
  <div class="dog-container">
    <DogCard
      v-for="dog in paginatedDogs"
      :key="dog.id"
      :dog="dog"
      @add-favorite="addFavorite"
    />
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
          dogType: faker.animal.dog(), // Gera um tipo de cachorro
          dogGender: Math.random() > 0.5 ? 'male' : 'female', // Define o gênero aleatoriamente
      };
  },
  methods: {
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
};
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 10px;
  transition: transform 0.2s;
}
li.card:hover {
  transform: translateY(-5px);
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  padding: 15px;
}
.card-title {
  margin: 0;
  font-size: 20px;
}
.adoption-link {
  display: block;
  width: 150px;
  padding: 10px 20px;
  background-color: #005F5B;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 50px;
  margin-left: 420px;
  transition: background-color 0.3s, border-bottom 0.3s; 
  border-bottom: 3px solid transparent; 
}
li {
  list-style-type: none;
}

.adoption-link:hover {
  background-color: #00948d;
  border-bottom: 5px solid #EE6F16; 
}

h1{
  text-align: center;
  border: none;
  padding: 15px;
  font-size: 35px;
  border-radius: 15px;
  border:1px solid rgba(221, 221, 221, 0.267);
  color: #005F5B;
}

.remove-button{
  background-color: #e63333;
  margin-left: 100px;
  padding: 8px;
  margin-top:50px;
  border-radius:10px;
  border: none;
  color:white;

}

.remove-button:hover{
  background-color: #e905058f;
  cursor: pointer;
}
</style>