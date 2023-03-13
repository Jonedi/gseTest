<script setup>
import { ref } from 'vue';
import { useGetData } from '@/composables/getData'
import { useDrinkStore} from "../stores/drinks";
// import FormDrinks from '../components/FormDrinks.vue'

const drink = ref('')
const add = ref([])
const alert = ref(false)
const { getData, data, loading } = useGetData()
const drinkStore = useDrinkStore()

const listDrinks = () => {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.value}`
  getData(url);
};

const addDrink = async() => {
    console.log(add.value);
    try {
        await drinkStore.createDrink(add.value)
    } catch (e) {
        console.log(e);
    }
};

</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <h1 class="text-center">Cocteles</h1>
                <!-- <FormDrinks /> -->
                <form @submit.prevent="listDrinks">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Escriba un Licor" v-model="drink" aria-label="licor" aria-describedby="basic-addon1">
                  </div>
                  <div class="col-12 d-flex justify-content-around">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                  </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-center mt-4">
            <div class="col-12 col-lg-6">
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status" v-if="loading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div v-if="data">
                    <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                        v-for="(item, i) in data.drinks"
                        :key="i"
                        v-if="data.drinks"
                    >
                        <div class="accordion-item">
                            <h2 class="accordion-header d-flex" :id="'flush-heading'+i">
                                <input class="form-check-input me-2" type="checkbox" :value="item.strDrink" v-model="add" id="item.strDrink">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse'+i" aria-expanded="false" :aria-controls="'flush-collapse'+i">
                                    {{ item.strDrink }}
                                </button>
                            </h2>
                            <div :id="'flush-collapse'+i" class="accordion-collapse collapse" :aria-labelledby="'flush-heading'+i" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p><span class="fw-bold">Categoría: </span>{{ item.strCategory ? item.strCategory : 'No tiene categoría' }}</p>
                                <p><span class="fw-bold">Palabras clave: </span>{{ item.strTags ? item.strTags : 'No hay palabras clave' }}</p>
                                <p><span class="fw-bold">Tipo de vaso: </span>{{ item.strGlass ? item.strGlass : 'No hay palabras clave' }}</p>
                                <p><span class="fw-bold">Instrucciones: </span>{{ item.strInstructions }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else><p>El licor seleccionado no existe, por favor digite un licor válido</p></div>
                    <button class="btn btn-warning" v-show="data" @click="addDrink" :disabled="!add">Guardar</button>
                </div>
            </div>
        </div>

    </div>
</template>