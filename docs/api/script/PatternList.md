# ai.PatternList

The leaf.List containing of patterns.

----------------------------------------------------------------------

## Usage

ai.PatternList;

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
            <script src="scripts/leaf-assistant.min.js"></script>

			<script>
                leaf.ai.PatternList = new leaf.List([
					[
						{
							"pattern": [
								"Flip a coin"
							],
							"response": [
								"It's heads.",
								"It's tails."
							]
						}
					]
                ]);

                leaf.ai.respond("Hello leaf.",
                    function(response, model) {
                        console.log(response);
                    },
                    function() {
                        console.log("I don't understand.");
                    }
                );
			</script>
		</body>
	</html>
