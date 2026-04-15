<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
    <div class="container">

      <router-link to="/" class="navbar-brand fw-bold">
        ☀️ Clima y Salud Emocional
      </router-link>

     
      <div class="ms-auto d-flex align-items-center gap-3">
        <router-link to="/" class="nav-link text-white link-hover">
        Home
        </router-link>

        <router-link v-if="!isAuthenticated" to="/login"  class="nav-link text-white link-hover fw-bold">
          Iniciar sesión
        </router-link>

        <template v-else>
          <router-link to="/favoritos"  class="nav-link text-white link-hover fw-bold">
            Mis favoritos
          </router-link>

          <button @click="handleLogout" class="btn btn-sm btn-outline-light ms-2">
            Cerrar sesión
          </button>
        </template>
  
      <router-link to="/acerca" class="nav-link text-white link-hover" style="cursor: pointer;">
        Acerca de
      </router-link>
    </div>
  </div>
</nav>

<router-view/>

<footer class="text-center py-4 mt-5 border-top">
  <p class="text-muted">
    &copy; 2026 - Proyecto de clima y salud Emocional | Desarrollado por Karla Jara Mena.</p>
</footer>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const isAuthenticated = computed(() => store.state.isAuthenticated);

const handleLogout = () => {
  store.commit('LOGOUT');
  router.push('/');
};

</script>


<style>
.italic {
  font-style: italic;
}

.texto-justificado {
  text-align: justify;
}

.link-hover:hover {
  text-decoration: underline;
  opacity: 0.9;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

html {
  scroll-behavior: smooth;
}
</style>
