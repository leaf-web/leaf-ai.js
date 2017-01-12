# content keyword

The `content` keyword defines the possible content values for the response. One is picked randomly.

----------------------------------------------------------------------

## Usage

"content": "value"


### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `Array`       | The responses                    |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": [
				"Flip a coin"
			],
			"content": [
				"heads.",
				"tails."
			]
		}
	]
