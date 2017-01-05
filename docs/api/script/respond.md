# ai.respond

Executes a success callback if a match if found, and passes in the response and Model.

----------------------------------------------------------------------

## Usage

ai.respond(pattern, success, failure);

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
                leaf.ai.PatternList = new leaf.List([
                    {
                        "pattern": "Hello",
                        "respond": "Hello, how can I help you today?"
                    }
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
