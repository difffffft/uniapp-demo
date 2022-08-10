import CryptoJS from 'crypto-js'

export default (params = {}) => {
	const AES_KEY = 'aC0oC0bI1aT0fA0r'
	const AES_IV = 'mJ0eA3aB2nE8nR0a'
	const obj = {
		...params,
		t: new Date().getTime(),
	}
	const data = CryptoJS.enc.Utf8.parse(JSON.stringify(obj))
	const key = CryptoJS.enc.Utf8.parse(AES_KEY)
	const iv = CryptoJS.enc.Utf8.parse(AES_IV)
	const res = CryptoJS.AES.encrypt(data, key, {
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	}).toString()
	return res
}
