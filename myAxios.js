const fetch = require('node-fetch');


async function getJson(data){
	try {
		let jsonData = await data.json();
		return jsonData

	} catch (error) {
		throw new Error('getting json')
	}
}

async function getData(url, method, options){
	try {
		let data = await fetch(url, method, options);
		return data

	} catch (error) {
		throw new Error('getting data')
	}
}

async function sendRequest(url, method, options){
	try {
		let data = await getData(url, method, options);
		let json = await getJson(data);
		return json

	} catch (error) {
		throw new Error(`which was thrown while ${error}`)
	}

}
// class MakeRequest {
// 	async send() {
// 		try {
// 			var resultData = await sendRequest(this.url, this.method, this.body)
// 			return resultData

// 		} catch (error) {
// 			throw new Error(`Oops, there is an ${error}`)
// 		}
// 	}
// }


class Request {

	constructor(baseUrl) {
		this.baseUrl = baseUrl
	}

	async send(uri, method, options) {
		try {
			var resultData = await sendRequest(this.baseUrl + uri, this.method, this.options)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}
	}

	async get(uri, options) {
		return this.send(uri, 'GET', options)
	}

	async post(uri, options) {
		return this.send(uri, 'POST', options)
	}

	async patch(uri, options) {
		return this.send(uri, 'PATCH', options)
	}

	async put(uri, options) {
		return this.send(uri, 'PUT', options)
	}

	async delete(uri, options) {
		return this.send(uri, 'DELETE', options)
	}

	async head(uri, options) {
		return this.send(uri, 'HEAD', options)
	}
}



(async () => {
	try {
		var newRequest = new Request('https://jsonplaceholder.typicode.com/');
		var RESULT = await newRequest.get('posts/1', {})
		console.log('Hooray, it works: \n\n', RESULT)
	} catch (error) {
		console.log('Just cry because of that: ', error)
	}
})()
