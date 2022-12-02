//提示
uni.$u.toast("")

//弹窗
uni.showModal({
	title: `提示`,
	content: `确定xxx吗?`,
	confirmColor: '#F00',
	success: res => {
		if (res.confirm) {
			
		}
	}
});

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