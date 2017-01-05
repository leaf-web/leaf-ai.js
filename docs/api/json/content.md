# content keyword

The `content` keyword contains the response to the user.

----------------------------------------------------------------------

## Usage

"content": "value"


### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `string`      | A response.                      |
|                 | `Array`       | A random response.               |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": "Flip a coin"
			"content": [
				"Heads.",
				"Tails."
			]
		}
	]
