let statusBarHeight = uni.getSystemInfoSync().statusBarHeight
let menuButtonHeight = uni.getMenuButtonBoundingClientRect().height
let navHeight = (uni.getMenuButtonBoundingClientRect().top - statusBarHeight) * 2 + menuButtonHeight
let headerHeight = statusBarHeight + navHeight
let res = {
	statusBarHeight,
	menuButtonHeight,
	navHeight,
	headerHeight,
	statusBarHeightStr: statusBarHeight + 'px',
	menuButtonHeightStr: menuButtonHeight + 'px',
	navHeightStr: navHeight + 'px',
	headerHeightStr: headerHeight + 'px'
}
console.log(res);