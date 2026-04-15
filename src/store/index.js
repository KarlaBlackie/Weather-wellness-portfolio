import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null,
        isAuthenticated: false

    },

    mutations: {
        SET_USER(state, userData) {
            state.user = {
                ...userData,
                favoritos: userData.favoritos || [] 
            };
            state.isAuthenticated = true;
        },

        TOGGLE_FAVORITO(state, ciudadId) {
            if (state.user) {
                const index = state.user.favoritos.indexOf(ciudadId);
                if (index > -1) {
                    state.user.favoritos.splice(index, 1);
                } else {
                    state.user.favoritos.push(ciudadId);
                }
            }
        },

        LOGOUT(state) {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});