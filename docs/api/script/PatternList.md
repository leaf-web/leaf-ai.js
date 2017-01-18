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
                leaf.ai.PatternList.merge([
					[
						{
							"pattern": [
								"Flip a coin"
							],
							"content": [
								"It's heads.",
								"It's tails."
							]
						}
					]
                ]);

                leaf.ai.respond("Flip a coin.",
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
