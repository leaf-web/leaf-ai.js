# ai.chat

Executes a callback based on the the success of a match.

> The success callback gets the response and model passed as arguments.

----------------------------------------------------------------------

## Usage

ai.chat(pattern, success, failure);

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| pattern         | `string`      | The pattern.                     |
| success         | `Function`    | The success callback.            |
| failure         | `Function`    | The failure callback.            |

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
            <script src="scripts/leaf-assistant.min.js"></script>

			<script>
                leaf.ai.PatternList = new leaf.List(
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
                );

                leaf.ai.respond("Flip a coin",
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
