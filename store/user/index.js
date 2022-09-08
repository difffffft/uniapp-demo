// 全局的data
const state = {
	uid: '',
};
const mutations = {
	setUid(state, uid) {
		state.uid = uid
	}
};
// 全局的methods
const actions = {
	async userLogin({
		dispatch,
		commit
	}, data) {

	},
};
// 全局的computed
const getters = {
};
export default {
	state,
	mutations,
	actions,
	getters,
};
