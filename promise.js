const fs = require('fs');

const openJson = (path) => new Promise(
	(resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) {
				reject(err);
			}
			try {
				resolve(JSON.parse(data));
			} catch (err) {
				reject(err)
			}
		})
});

openJson('./data.json').then(
	(obj) => console.log(obj),
	(err) => console.log(err)
)
