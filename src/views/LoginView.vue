<template>
    <div class="containter-mt-5">
        <div class="col-md-4">
            <div class="card shadow">
                <div class="card-body">
                    <h3 class="text-center mb-4">Iniciar sesión</h3>
                    <form @submit.prevent="handleLogin">
                        <div class="mb-3">
                            <label class="form-label">Usuario</label>
                            <input v-model="username" type="text" class=" form-control" placeholder="Ej: Fernanda" required>         
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Contraseña</label>
                                <input v-model="password" type="password" class="form-control" placeholder="Cualquier clave sirve" required>                               
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const username = ref('');
const password = ref('');

const handleLogin = () => {
    store.commit('SET_USER', { name: username.value });
    router.push('/favoritos');
};
</script>