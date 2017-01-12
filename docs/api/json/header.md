# header keyword

The `header` keyword defines the possible header values for the response. One is picked randomly.

----------------------------------------------------------------------

## Usage

"content": "value"


### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `Array`       | The headers                      |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": [
				"Flip a coin"
			],
			"header": [
				"It landed on"
			],
			"content": [
				"heads.",
				"tails."
			]
		}
	]
