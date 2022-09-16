const exampleTemplate = require('../example.hbs');
const render = context => {
    document.body.innerHTML = exampleTemplate();
};

describe('Example page', () => {
    
    render(exampleTemplate);

    it('has an element with class "test"', () => {
		const testElement = document.querySelector('.test');
		expect(testElement).not.toBeNull();
    });
});