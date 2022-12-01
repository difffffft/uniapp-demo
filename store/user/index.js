const state = {
	login: false,
};
const mutations = {
	SET_USER_STATE(state, callback) {
		callback && typeof callback === "function" && callback(state)
	}
};
const actions = {
	async USER_LOGIN(store, data) {
		store.commit('SET_USER_STATE', state => {
			state.login = true
		})
	},
};
const getters = {};
export default {
	state,
	mutations,
	actions,
	getters,
};
