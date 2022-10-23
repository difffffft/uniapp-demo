/**
 * 支持在scoped条件下，修改第三方组件库的UI
 */
const useStyleShared = {
	options: {
		styleIsolation: 'shared',
		multipleSlots: true,
	},
}

export default useStyleShared;
