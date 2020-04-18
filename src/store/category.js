export default {
    state: {
        creditCategory: [],
        debetCategory: [],
    },
    mutations: {
        getCategory(state, payLoad) {
            state.creditCategory = payLoad.credit;
            state.debetCategory = payLoad.debet;
        }
    },
    actions: {
        asyncGetCreditCategory ({commit}, payload) {
            setTimeout(() => {
                commit('getCategory', payload.category)
            }, payload.timeOut)
        }
    },
    getters: {
        computedCreditCategory (state) {
            return state.creditCategory;
        },
        computedDebetCategory (state) {
            return state.debetCategory;
        }
    }
}