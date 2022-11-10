<template>
	<view class="app-upload">
		<u-upload :fileList="fileList" multiple @afterRead="handleAfterRead" @delete="handleUploadDelete" name="file"
			:maxCount="9" previewFullImage></u-upload>
	</view>
</template>

<script>
	import {
		BASE_URL
	} from "@/config"
	
	/**
	 * 用法:
	 * 
	 * 
	   <app-upload ref="appUpload"></app-upload>
	   let list = this.$refs.appUpload.getFileList()
	   if (list) {
	       console.log("文件列表", list);
	   } else {
	       uni.$u.toast("文件未上传完毕")
	       return
	   }
	 */

	export default {
		name: "app-upload",
		data() {
			return {
				fileList: []
			};
		},
		methods: {
			getFileList() {
				let list = []
				for (let i = 0; i < this.fileList.length; i++) {
					let item = this.fileList[i]
					if (item.status == "failed") {
						return false
					}
					list.push(item.url)
				}
				return list
			},
			reqUploadFile({ filePath }) {
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: BASE_URL + "/api/upload/file",
						filePath,
						name: 'file',
						success: (res) => {
							resolve(res.data)
						},
						fail: (err) => {
							reject({ message: '文件上传失败' })
						}
					});
				})
			},
			async handleAfterRead(event) {
				//要上传的文件
				let lists = [].concat(event.file);
				//要上传文件的数量
				let fileListLen = this.fileList.length;
				//每选择一个就添加一个状态
				lists.map(item => {
					this.fileList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					});
				});
				//添加完成之后，开始上传图片
				for (let i = 0; i < lists.length; i++) {
					let item = this.fileList[fileListLen];
					try {
						const url = await this.reqUploadFile({
							filePath: lists[i].url,
						});
						//替换该项
						this.fileList.splice(fileListLen, 1, Object.assign(item, {
							status: 'success',
							message: '上传成功',
							url
						}))
					} catch (e) {
						//替换该项
						this.fileList.splice(fileListLen, 1, Object.assign(item, {
							status: 'failed',
							message: '上传失败',
						}))
					}
					fileListLen++;
				}
			},
			handleUploadDelete(event) {
				this.fileList.splice(event.index, 1);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
