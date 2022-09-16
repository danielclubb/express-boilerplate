module.exports = {
	process(source) {
		return `
			const Handlebars = require('handlebars');
			module.exports = Handlebars.compile(\`${source}\`);
		`;
	}
};
