<!-- src/components/DogPagination.vue -->
<template>
  <div class="pagination">
    <button
      v-for="page in totalPages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="$emit('change-page', page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['currentPage', 'totalPages']
};
</script>

<style>
.pagination {
  margin-top: 20px;
  height: 50px;
  padding: 2px;
  text-align: center;
  border-top: 1px solid rgba(128, 128, 128, 0.212) ;
  margin-bottom: 72px;

  }
  .pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: white;
    border-radius: 100%;
    border: none;
    color: gray;
    border: 1px solid gray;
    margin-top: 40px;
}
.pagination .active {
  font-weight: bold;
}

.pagination button:hover{
  background-color:#ECB11F;
  cursor: pointer;
  transform: scale(1.05);
}
</style>