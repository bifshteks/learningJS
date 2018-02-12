var XMLHttpRequest = require('xhr2');
const fetch = require('node-fetch');


// var method = process.argv[2];
// var url = 'https://mathiasbynens.be/demo/ip'//process.argv[3];


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
	// getData(url, method, body)
	// 	.then(
	// 		(resp) => {
	// 			console.log('retunr')
	// 			return getJson(resp)
	// 				.then(
	// 					(json) => {
	// 						// console.log(json, 'Test 10')
	// 						console.log('Данные получены: ', json)
	// 					},
	// 					(data) => {
	// 						console.log('Преобразование в Json невозможно. Причина ', data[1], '\n\nДанные: ',data[0])
	// 					}
					
	// 				)
	// 		}
	// 	)
	// 	.catch((error) => {
	// 		console.error('Во время выполнения возникла ошибка: ', error);
	// 	})
}


class Request {

	constructor(url, body='') {
		
		// this.method = 'GET'
		this.url = url
		this.body = body
	}

	async get() {
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}

	}

	async post() {
		this.method = 'POST'
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}

	}

	async patch() {
		this.method = 'PATCH'
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}

	}

	async put() {
		this.method = 'PUT'
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}

	}

	async delete() {
		this.method = 'DELETE'
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}

	}

	async head() {
		this.method = 'HEAD'
		try {
			var resultData = await sendRequest(this.url, this.method, this.body)
			return resultData

		} catch (error) {
			throw new Error(`Oops, there is an ${error}`)
		}

	}
}

// var newRequest = new Request(url);
// newRequest.get()


(async () => {
	try {
		var newRequest = new Request('https://jsonplaceholder.typicode.com/posts/1', 'GET', '');
		var RESULT = await newRequest.get()
		console.log('Hooray, it works: ', RESULT)
	} catch (error) {
		console.log('Just cry because of that: ', error)
	}
})()
// function getData(url, method, body){
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.responseType = 'json';
//         xhr.open(method, url);
//         xhr.onload = () => {
//             if (xhr.status === 200){
//                 resolve(xhr.response)
//             } else {
//                 console.log('used method2 ', method)
//                 reject(xhr.statusText);
//             }
//         };

//         xhr.onerror = (error) => {
//             console.log('used method ', method)
//             reject(error)
//         };

//         xhr.send(body);
//     })
// }

// async () => {
//     try {
//         const resp = await getData('/api/v1/test/')
//         console.log(resp)
//     } catch (err) {
//        console.log(err)
//     }
// }()