<script setup>
import { useGetData } from '@/composables/getData'
import { ref } from 'vue';

const drink = ref('')
const { getData, data, loading } = useGetData()

const listDrinks = () => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.value}`
    getData(url);
    console.log(data);
};
</script>

<template>
    <div>
        <form @submit.prevent="listDrinks">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Escriba un Licor" v-model="drink" aria-label="licor" aria-describedby="basic-addon1">
            </div>
            <div class="col-12 d-flex justify-content-around">
                <button type="submit" class="btn btn-primary">Enviar</button>
                <button class="btn btn-warning" v-show="data">Guardar</button>
            </div>
        </form>
    </div>
</template>