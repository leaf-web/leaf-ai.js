/**
 * Functions
 */
describe('Patterns', function() {
	/**
	 * Pattern string
	 */
	it('Pattern string', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"content": "Hello."
			}
		]);

		leaf.ai.respond("Hello assistant.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Pattern Array
	 */
	it('Pattern Array', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": [
					"Hello",
					"Hi",
					"Good morning"
				],
				"content": "Hello."
			}
		]);

		leaf.ai.respond("Hi leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Header string
	 */
	it('Header string', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"header": "Hello."
			}
		]);

		leaf.ai.respond("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Header Array
	 */
	it('Header Array', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"header": [
					"Hello."
				]
			}
		]);

		leaf.ai.respond("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Content string
	 */
	it('Content string', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"content": "Hello."
			}
		]);

		leaf.ai.respond("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Content Array
	 */
	it('Content Array', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"content": [
					"Hello."
				]
			}
		]);

		leaf.ai.respond("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Footer string
	 */
	it('Footer string', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"footer": "Hello."
			}
		]);

		leaf.ai.respond("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Footer Array
	 */
	it('Footer Array', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"footer": [
					"Hello."
				]
			}
		]);

		leaf.ai.respond("Hello assistant.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Custom commands
	 */
	it('Custom commands', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": "Hello",
				"content": [
					"Hello."
				],
				"custom": ""
			}
		]);

		leaf.ai.respond("Hello assistant.", function(response, model) {
			expect(
				leaf.isDefined(model.get('custom'))
			).toBe(true);
		});
	});
});
