uni.createSelectorQuery()
					.in(this)
					.select('.map-wrap')
					.boundingClientRect(data => {
						this.mapHeight = Number(data.height);
						this.init();
					})
					.exec(function(res) {
						// 注意：exec方法必须执行，即便什么也不做，否则不会获取到任何数据
					});