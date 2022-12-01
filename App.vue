<script>
	import WxVersionUpdateCheck from '@/plugin/wx_version_update.plugin';
	export default {
		onLaunch: function() {
			WxVersionUpdateCheck.install()
		},
		onShow: function() {},
		onHide: function() {}
	};
</script>

<style lang="scss">
	//uView的组件公共样式
	@import '@/uni_modules/uview-ui/index.scss';
	//项目的图标
	@import '/style/icon.scss';
	//项目的公共样式
	@import '/style/app.scss';
</style>
