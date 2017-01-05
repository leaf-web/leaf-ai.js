# header keyword

The `header` keyword prepends text to the response.

----------------------------------------------------------------------

## Usage

"header": "value"

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `string`      | Text to append.                  |
|                 | `Array`       | Random text to append.           |

----------------------------------------------------------------------

## Example

	[
		{
			"pattern": "Roll a die."
			"header": [
				"You rolled a ",
				"It landed on "
			],
			"content": [
				"one.",
				"two.",
				"three.",
				"four.",
				"five.",
				"six."
			]
		}
	]
