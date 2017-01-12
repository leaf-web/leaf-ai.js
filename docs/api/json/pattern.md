# pattern keyword

The `pattern` keyword defines the pattern to match a message against.

> Use an astrisk for a wildcard character.
----------------------------------------------------------------------

## Usage

"pattern": "value"

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `Array`       | The patterns                     |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": [
				"Good morning",
				"Good afternoon",
				"Good evening"
			],
			"content": [
				"Hello. How may I assist you?"
			]
		}
	]

