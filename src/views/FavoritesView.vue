<template>
    <div class="container mt-5 text-center">
        <h1 v-if="user" class="display-4 mb-4">
            ¡Bienvenida, {{ user.name }}!👋
        </h1>

        <div v-if="misFavoritas.length > 0" class="row mt-4 justify-content-center">
            <div v-for="ciudad in misFavoritas" :key="ciudad.id" class="col-md-4 mb-4">
                <FlipCard
                    :ciudad="ciudad"
                    :flip="ciudad.flip"
                    @flip-toggle="ciudad.flip = !ciudad.flip"
                    />
            
            </div>
        </div>

        <div v-else class="mt-5 py-5 border rounded bg-light">
            <p class="fs-4 text-muted">Aún no has guardado ciudades en tus favoritos.</p>
        </div>
    

        <router-link to="/" class="btn btn-outline-secondary mt-4">
            Volver al buscador
        </router-link>

    </div>

</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ciudades } from '../data/ciudades.js';
import FlipCard from '@/componentes/FlipCard.vue';


const store = useStore();

const user = computed(() => store.state.user);

const misFavoritas = computed(() => {
    if (!user.value) return [];
    return ciudades.filter(ciudad => user.value.favoritos.includes(ciudad.id));
});
</script>