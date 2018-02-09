const fs = require('fs');

var promise = new Promise(function(resolve, reject){
	fs.readFile('./data.json', (err, data) => err ? reject(err) : resolve(data)	);
});


function parseJSONData(data){
	try {
	  var obj = JSON.parse(data);
	  console.log('Результат: ', obj);
	} catch (e) {
	  console.error('Ошибка: ', err)
	}
}


promise.then(parseJSONData, err => console.log('Ошибка: ', err))