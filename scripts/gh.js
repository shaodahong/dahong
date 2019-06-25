const gh = require('gh-pages');

gh.publish('dist', err => {
	if (err) {
		console.log(` gh.publish(err): ${err}`);
		process.exit(1);
	}
});
