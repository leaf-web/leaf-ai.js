# How to Write a Bot

## 1. Simple Rules

To respond to someone writing `hello`, use the following rule format:

**assistant.json**

    [
        {
            "pattern": "hello",
            "respond": "Hello, what can I help you with today?"
        }
    ]

----

## 2. Complex Rules

To respond to someone writing `hello` or `hi`, use the following rule format:

**assistant.json**

    [
        {
            "pattern": [
                "hello",
                "hi"
            ],
            "respond": "Hello, what can I help you with today?"
        }
    ]

----

## 2. Random Responses

To use a random response, use the following rule format:

**assistant.json**

    [
        {
            "pattern": [
                "hello",
                "hi"
            ],
            "respond": [
                "Hello.",
                "Hello, how may I help you today?"
            ]
        }
    ]
