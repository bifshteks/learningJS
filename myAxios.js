var XMLHttpRequest = require('xhr2');


// var method = process.argv[2];
var url = 'https://mathiasbynens.be/demo/ip'//process.argv[3];


function getJson(data){
	return new Promise((resolve, reject) => {
		try{
			let jsonData = JSON.parse(data);
			console.log('jsonData ', jsonData)
			resolve(jsonData)
		} catch (error) {
			reject([data, error])// reject(error, data)
		}
	});
}

function getData(url, method, body){
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open(method, url);
		xhr.onload = () => {
			if (xhr.status === 200){
				resolve(xhr.response)
			} else {
				console.log('used method2 ', method)
				reject(xhr.statusText);
			}
		};

		xhr.onerror = (error) => {
			console.log('used method ', method)
			reject(error)
		};

		xhr.send(body);
	})
}

function sendRequest(url, method, body){
	getData(url, method, body)
		// .then(
		// 	(resp) => {
		// 		console.log('retunr')
		// 		return getJson(resp)
		// 	},
		// 	(error) => {
		// 		console.error('Во время выполнения возникла ошибка: ', error);
		// 	}
		// )
		// .then(
		// 	(json) => {
		// 		// console.log(json, 'Test 10')
		// 		console.log('Данные получены: ', json)
		// 	}, 
		// 	(dataNotJson) => {
		// 		console.error('Преобразование в Json невозможно. Данные: ', dataNotJson)
		// 		// console.log('Итоговые данные: ', dataNotJson)
		// })
		.then(
			(resp) => {
				console.log('retunr')
				return getJson(resp)
					.then(
						(json) => {
							// console.log(json, 'Test 10')
							console.log('Данные получены: ', json)
						},
						(data) => {
							console.log('Преобразование в Json невозможно. Причина ', data[1], '\n\nДанные: ',data[0])
						}
					
					)
			}
		)
		.catch((error) => {
			console.error('Во время выполнения возникла ошибка: ', error);
		})
		// .then(
		// 	(json) => {
		// 		// console.log(json, 'Test 10')
		// 		console.log('Данные получены: ', json)
		// 	},
		// 	(data) => {
		// 		console.log('Преобразование в Json невозможно. Данные ', data.slice(0, 30))
		// 	}
		
		// )
		
		// .catch((error) => {
		// 	console.error('Во время выполнения возникла ошибка: ', error);
		// })
}
class Request {

	constructor(url, body='') {
		
		this.method = 'GET'
		this.url = url
		this.body = body
	}

	get() {
		sendRequest(this.url, this.method, this.body)
	}

	post() {
		this.method = 'POST'
		sendRequest(this.url, this.method, this.body)
	}

	patch() {
		this.method = 'PATCH'
		sendRequest(this.url, this.method, this.body)
	}

	put() {
		this.method = 'PUT'
		sendRequest(this.url, this.method, this.body)
	}

	delete() {
		this.method = 'DELETE'
		sendRequest(this.url, this.method, this.body)
	}

	head() {
		this.method = 'HEAD'
		sendRequest(this.url, this.method, this.body)
	}
}

var newRequest = new Request(url);
newRequest.get()