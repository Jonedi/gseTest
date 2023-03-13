<script setup>
import { useDrinkStore } from "../stores/drinks";
import { RouterLink, RouterView } from 'vue-router'

const drinkStore = useDrinkStore();

defineProps({
  drinks: Object
})

const deleteDrink = async(_id) => {
  try {
    await drinkStore.removeDrink(_id)
  } catch (e) {
    console.log(e);
  }
};

</script>

<template>
  <div class="about">
    <h1>Listado Cocteles</h1>
    <div class="alert alert-primary d-flex align-items-center" role="alert" v-for="item in drinkStore.drinks" :key="item._id">
      <div class="d-flex justify-content-between w-100">
        <p>{{ item.drink }}</p>
        <button type="button" class="btn btn-danger" v-on:click="deleteDrink(item._id)">borrar</button>
      </div>
    </div>
    <RouterLink class="btn btn-link" to="/">Home</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
