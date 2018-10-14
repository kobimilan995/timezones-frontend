export default {
    namespaced: true,
    state: {
        gmt: ''
    },
    mutations: {
        SET_GMT(state, gmdate) {
            state.gmt = gmdate;
        },

        INCREMENT_GMT(state) {
            state.gmt = moment(state.gmt).add(1, "seconds").format();
        }
    },
    actions: {

    }
}
