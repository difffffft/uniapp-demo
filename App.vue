<script>
import versionUpdateCheck from '@/plugin/version.plugin';
export default {
	onLaunch: async function() {
		versionUpdateCheck.install();
	},
	onShow: async function() {},
	onHide: async function() {}
};
</script>

<style lang="scss">
//uView的组件公共样式
@import '@/uni_modules/uview-ui/index.scss';
//项目的公共样式
@import '~@/style/app.module.scss';
</style>
