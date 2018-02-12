const fetch = require('node-fetch');


async function getJson(data){
	try {
		let jsonData = await data.json();
		return jsonData

	} catch (error) {
		throw new Error('getting json')
	}
}

async function getData(url, method, body){
	try {
		let data = await fetch(url, method, body);
		return data

	} catch (error) {
		throw new Error('getting data')
	}
}

async function sendRequest(url, method, body){
	try {
		let data = await getData(url, method, body);
		let json = await getJson(data);
		return json

	} catch (error) {
		throw new Error(`which was thrown while ${error}`)
	}

}
class MakeRequest {
	async send() {
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}
	}
}


class Request extends MakeRequest {

	constructor(url, body='') {
		super()

		this.url = url
		this.body = body
	}

	async get() {
		this.method = 'GET'
		return this.send()
	}

	async post() {
		this.method = 'POST'
		return this.send()
	}

	async patch() {
		this.method = 'PATCH'
		return this.send()
	}

	async put() {
		this.method = 'PUT'
		return this.send()
	}

	async delete() {
		this.method = 'DELETE'
		return this.send()
	}

	async head() {
		this.method = 'HEAD'
		return this.send()
	}
}



(async () => {
	try {
		var newRequest = new Request('https://jsonplaceholder.typicode.com/posts/1', 'GET', '');
		var RESULT = await newRequest.get()
		console.log('Hooray, it works: \n\n', RESULT)
	} catch (error) {
		console.log('Just cry because of that: ', error)
	}
})()
