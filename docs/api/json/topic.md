# topic keyword

The `topic` keyword allows you to match patterns in a context. It is good for follow up questions.

----------------------------------------------------------------------

## Usage

"topic": "value"

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `Array`       | The patterns                     |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": [
				"How are you"
			],
			"content": [
				"I am fine. Are you doing good?""
			],
			"topic": [
				{
					"pattern": [
						"Yes"
					],
					"content": [
						"Glad to hear!"
					]
				},
				{
					"pattern": [
						"No"
					],
					"content": [
						"That's too bad!"
					]
				}
			]
		}
	]

