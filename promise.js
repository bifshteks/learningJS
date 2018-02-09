const fs = require('fs');

var promise = new Promise(function(resolve, reject){
	fs.readFile('./data.json', (err, data) => err ? reject(err) : resolve(data)	);
});

promise.then(data => {
				const obj = JSON.parse(data);
				console.log('Результат: ', obj)
			},
			err => console.log('Ошибка: ', err))