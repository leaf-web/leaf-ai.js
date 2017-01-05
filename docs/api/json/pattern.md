# pattern keyword

The `pattern` keyword is used to match on user input.

----------------------------------------------------------------------

## Usage

"pattern": "value"


### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `string`      | Single pattern.                  |
|                 | `Array`       | Multiple patterns to match on.   |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": [
				"Good morning",
				"Good afternoon",
				"Good evening"
			]
			"content": "Hello. How may I assist you?"
		}
	]

