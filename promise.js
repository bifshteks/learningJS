const fs = require('fs');

// const openJson = (path) => new Promise(
// 	(resolve, reject) => {
// 		fs.readFile(path, (err, data) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			try {
// 				resolve(JSON.parse(data));
// 			} catch (err) {
// 				reject(err)
// 			}
// 		})
// });


// openJson('./data.json').then(
// 	(obj) => console.log(obj),
// 	(err) => console.log(err)
// )



const parseJson = (obj) => new Promise((resolve, reject) => {
	try{
		const data = JSON.parse(obj);
		resolve(data)
	} catch(e){
		reject(e)
	}	
})
const openFile = (path) => new Promise((resolve, reject) => {
	fs.readFile(path, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(parseJson(data))
			}
		})	
})

openFile('./data.json').then((res)=> console.log(res), (err) => console.log(err))