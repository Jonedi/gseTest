import { defineStore } from "pinia";
import axios from 'axios'
import { ref } from "vue";
import router from "../router";

export const useDrinkStore = defineStore('drink', () => {
    const drinks = ref([])
    // const url = import.meta.env.BASE_URL
    const url = 'http://localhost:7000/api/v1'
    
    const getDrinks = async() => {
        try {
            const res = await axios.get(`${url}/drinks`)
            drinks.value = [...res.data.drinks]
        } catch (e) {
            console.log(e);
        }
    }

    const createDrink = async(coctels) => {
        try {
            const res = await axios.post(`${url}/drinks`,{drink: coctels})
            drinks.value.push(res.data.newCoctel)
            router.push('/cocteles')
        } catch (e) {
            console.log(e);
        }
    }

    const removeDrink = async(id) => {
        try {
            await axios.delete(`${url}/drinks/${id}`)
            drinks.value = drinks.value.filter(i => i._id !== id)
        } catch (e) {
            console.log(e);
        }
    }

    getDrinks()

    return {
        drinks,
        getDrinks,
        createDrink,
        removeDrink
    }
})