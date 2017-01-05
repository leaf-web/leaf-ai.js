# footer keyword

The `footer` keyword appends text to the response.

----------------------------------------------------------------------

## Usage

"footer": "value"

### Options

| Options         | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| value           | `string`      | Text to prepend.                 |
|                 | `Array`       | Random text to prepend.          |

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
			],
			"footer": " Do you want to play again?"
		}
	]
