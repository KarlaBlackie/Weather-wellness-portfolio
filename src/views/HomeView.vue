<template>
    <div>
        <section class="hero-section text-center mb-5">
            <h1 class="display-4 fw-bold text-primary mb-4">Clima y salud emocional</h1>
            <p class="lead text-muted">Busca tu ciudad y descubre consejos para tu bienestar</p>
            <input v-model="filtro" type="text" class="form-control w-50 mx-auto shadow-sm" placeholder="Escribe el nombre de una ciudad...">
        </section>

        <section class="weather-grid">
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div v-for="ciudad in ciudadesFiltradas" :key="ciudad.id" class="col">
                    <FlipCard
                    :ciudad="ciudad"
                    :flip="ciudad.flip"
                    @flip-toggle="ciudad.flip = !ciudad.flip"
                    />
                </div>
            </div>
                    
            
                <div v-if="ciudadesFiltradas.length === 0" class="text-center mt-5">
                    <p class="text-muted">No se encontraron ciudades con ese nombre</p>
                </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ciudades as datosCrudos } from '@/data/ciudades.js'
import FlipCard from '@/componentes/FlipCard.vue'

const filtro = ref('')

const listaCiudades = ref(datosCrudos.map(c => ({
  ...c,
  flip: false,
  clima: null  
})))



const obtenerClimaCiudad = async (ciudad) => {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current_weather=true&timezone=auto`

        const res = await fetch(url)
        const data = await res.json()
        ciudad.clima = data.current_weather

    } catch (error) {
        console.error("Error:", error)
    }
}
const ciudadesFiltradas = computed(() => {
    return listaCiudades.value.filter(c =>
        c.nombre.toLowerCase().includes(filtro.value.toLowerCase())
    )
})


onMounted(async () => {
    await Promise.all(
    listaCiudades.value.map(c =>  obtenerClimaCiudad(c))
    ) 
})

</script>



