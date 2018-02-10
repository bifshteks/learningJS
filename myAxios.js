var XMLHttpRequest = require('xhr2');


var method = process.argv[2];
var url = process.argv[3];


function getJson(data){
	return new Promise((resolve, reject) => {
		try{
			let jsonData = JSON.parse(data);
			resolve(jsonData)
			console.log('Test 4')
		} catch (error) {
			// console.log('Test 5', data)
			reject(data)// reject(error, data)
		}
	});
}

function getData(url, method){
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = () => {
			if (xhr.status === 200){
				// let jsonData = JSON.parse(xhr.response);
				console.log('Test 1')
				resolve(xhr.response)
			} else {
				console.log('Test 2')
				reject(xhr.statusText);
			}
		};

		xhr.onerror = (error) => {
			console.log('Test 3')
			reject(error)
		};

		xhr.send();
	})
}

getData(url, method)
	.then((resp) => {
		// let jsonData = JSON.parse(resp);
		console.log('Test 6')
		return getJson(resp)
		console.log('Test 7')
	}, (error) => {
		console.log('Не удалось отправить запрос. Ошибка: ', error)
	})
	.then((json) => {
		console.log(json, 'Test 10')
		console.log('Данные получены: ', json)
	}, (error, dataNotJson) => {
		console.error('Преобразование в Json невозможно. Данные: ', error)
		console.log('Итоговые данные: ', dataNotJson)
	})
	.catch((error) => {
		console.error('Во время выполнения возникла ошибка: ', error);

	})