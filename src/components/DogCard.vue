<template>

  <div class="row">
    <div class="col s12 m7">
      <div class="dog-card">
        <div class="card-image">
          <img :src="dog.url" alt="dog image" /><br>
          <h5 class="text1">{{ dogType }} <span v-if="dogGender === 'male'">♂️</span><span v-else>♀️</span></h5>
        </div>
        <div class="button-container">
          <button class="bt" @click="$emit('add-favorite', dog)">Favoritar dog</button>
        </div>
      </div>
    </div>
  </div>

  
</template>



<script>
import { faker } from '@faker-js/faker';

export default {
  props: ['dog'],
  data() {
    return {
      dogType: faker.animal.dog(), // Gera um tipo de cachorro
      dogGender: Math.random() > 0.5 ? 'male' : 'female', // Define o gênero aleatoriamente
    };
  }
};
</script>

<style>
.dog-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 190px 60px -30px 60px;
  position: relative;
}

.dog-card:hover{
  transform: scale(1.05);
}

.card-image img {
  width: 226px;
  height: 170px;
}

.text1 {
  text-align: center;
  font-size: 18px;
}

.button-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.bt {
  border-radius: 20px;
  border: none;
  margin-bottom: 10px;
  /* Ajuste conforme necessário para espaçamento da borda inferior */
  width: 150px;
  height: 45px;
  background: #ECB11F;
  color: white;
}

.bt:hover{
  cursor: pointer;
  background: #FFC107;
}
</style>
