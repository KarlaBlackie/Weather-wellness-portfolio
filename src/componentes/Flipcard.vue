<template>
<div class="flip-card" @click="$emit('flip-toggle')">
    <div class="flip-card-inner" :class="{ 'flipped': flip }">

        <div class="flip-card-front card h-100 shadow-sm border-0">
            <button @click.stop="toggleFavorite" class="btn position-absolute top-0 end-0 m-2 z-3 fav-btn">
                <span class="fs-4">{{ isFavorite ? '❤️' : '🤍' }}</span>
            </button>
            <img :src="ciudad.img"  class="card-img-top img-cuadrada" :alt="ciudad.nombre">
            <div class="card-body text-center">
                <h5 class="card-title fw-bold">{{  ciudad.nombre }}</h5>
                <div v-if="ciudad.clima">
                    <div class="fs-1">{{ obtenerIconoClima(ciudad.clima?.weathercode) }}</div>
                    <p class="fs-4 fw-bold"> {{  ciudad.clima.temperature  }}°C</p>
                </div>
                

                <div v-else>
                    <span class="spinner-border spinner-border-sm"></span>
                </div>
                <p class="text-primary small mt-2">
                    Haz click para un consejo ✨
                </p>
                </div>
            </div>

            <div class="flip-card-back card h-100 shadow-sm border-0 d-flex align-items-center justify-content-center p-4">
                <div class="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="fw-bold mb-3 text-white">{{  ciudad.nombre  }}</h5>
                        <p class="texto-justificado fst-italic fs-5 text-white">{{ ciudad.mensaje }}</p>
                        </div>

                        <router-link :to="{ name: 'detalle', params: { id: ciudad.id}}" 
                            class="btn btn-light w-100 mt-3 fw-bold">
                            Ver detalles del clima
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({ 
    ciudad: { type: Object, required: true },
    flip: { type: Boolean, default: false}
})

const emit = defineEmits(['flip-toggle'])
const store = useStore()

const toggleFavorite = () => {
    store.commit('TOGGLE_FAVORITO', props.ciudad.id);
};

const isFavorite = computed(() => {
    return store.state.user?.favoritos?.includes(props.ciudad.id);
});

const obtenerIconoClima = (code) => {
    if (code === 0) return "☀️" // despejado

    if ([1,2,3].includes(code)) return "⛅" // parcialmente nublado

    if ([45, 48].includes(code)) return "🌫️" // niebla

    if ([51, 53, 55].includes(code)) return "🌦️" // llovizna

    if([61,63,65].includes(code)) return "🌧️" // lluvia

    if([71,73,75].includes(code)) return "❄️" // nieve

    if([80,81,82].includes(code)) return "🌧️" // chubascos

    if([95,96,99].includes(code)) return "⛈️" // tormenta

    return "❓"

}

</script>

<style scoped>

.flip-card {
background-color: transparent;
width: 100%;
height: 450px;
perspective: 1000px;
margin-bottom: 20px;
transition: z-index 0s 0.2s;
pointer-events: auto;
margin-bottom: 30px;
isolation: isolate;
position: relative;

}

.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s ease-out;
transform-style: preserve-3d;
    
}

.flip-card-front, .flip-card-back {
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
border-radius: 20px;
overflow: hidden;
display: flex;
flex-direction: column;
}

.flip-card-front {
background-color: #f8f9fa;
color: black;
z-index: 2;
}

.flip-card-back {
background-color: #0d6efd;
color: white;
transform: rotateY(180deg);
z-index: 1;
pointer-events: auto;
}

.img-cuadrada {
width: 100%;
height: 250px;
object-fit: cover;
display: block;
border-radius: 20px;
}

.card-body {
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: center;
}

.flipped {
transform: rotateY(180deg);
}

.texto-justificado {
text-align: justify;
line-height:1.5;
}

.fav-btn {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 10;
    transition: transform 0.2s ease;
}

.fav-btn:hover {
    transform: scale(1.1);
}


</style>