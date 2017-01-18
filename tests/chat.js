/**
 * Functions
 */
describe('Patterns', function() {
	/**
	 * Pattern Array
	 */
	it('Pattern Array', function() {
leaf.ai.PatternList = new leaf.List([
					[
						{
							"pattern": [
								"I like basketball"
							],
							"content": [
								"I do too. Do you like football?"
							],
							"topic": [
								{
									pattern: [
										"yes",
									],
									"content": [
										"Me too!"
									]
								},
								{
									pattern: [
										"no",
									],
									"content": [
										"I enjoy it more than basketball."
									]
								},
							]
						}
					]
                ]);

		leaf.ai.chat("Hi leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Header Array
	 */
	it('Header Array', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": [
					"Hello"
				],
				"header": [
					"Hello."
				]
			}
		]);

		leaf.ai.chat("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Content Array
	 */
	it('Content Array', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": [
					"Hello"
				],
				"content": [
					"Hello."
				]
			}
		]);

		leaf.ai.chat("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Footer array
	 */
	it('Footer string', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": [
					"Hello"
				],
				"footer": [
					"Hello."
				]
			}
		]);

		leaf.ai.chat("Hello leaf-ai.", function(response) {
			expect(response).toBe('Hello.');
		});
	});
	/**
	 * Custom commands
	 */
	it('Custom commands', function() {
		leaf.ai.PatternList = new leaf.List([
			{
				"pattern": [
					"Hello"
				],
				"content": [
					"Hello."
				],
				"custom": ""
			}
		]);

		leaf.ai.chat("Hello assistant.", function(response, model) {
			expect(
				leaf.isDefined(model.get('custom'))
			).toBe(true);
		});
	});
});
