# footer keyword

The `footer` keyword defines the possible footer values for the response. One is picked randomly.

----------------------------------------------------------------------

## Usage

"content": "value"


### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `Array`       | The footers                      |

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
			],
			"footer": [
				" Did you guess it correctly?"
			]
		}
	]
