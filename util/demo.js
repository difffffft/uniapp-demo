//提示
uni.$u.toast("")

//查询节点信息
uni.createSelectorQuery()
	.in(this)
	.select('.app')
	.boundingClientRect(data => {

	})
	.exec(function(res) {

	});

//页面或者组件中使用vuex
this.$store.commit('SET_USER_STATE', state => { state.login = true })
this.$store.dispatch('USER_LOGIN')
import { mapState } from 'vuex';
computed: {
	...mapState({
		login: state => state.user.login,
	})
},