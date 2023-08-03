# ChatBot Project

## Overview

This is a simple chatbot project built in Node.js that uses predefined questions and replies to engage in conversations with users. The chatbot leverages a JSON file to store the conversations, and the user's input is matched with the questions to provide appropriate responses.

## Features

- Provides predefined responses for specific user questions.
- Engages in simple conversations with users.
- Easy to customize and expand the responses in the JSON data.

## Getting Started

To run the chatbot locally on your machine, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine using Git.

```bash
git clone https://github.com/abhixdd/Chatbot
```


Use `npm install` and it will Install the required dependencies.

```sh
npm install
```

### Start the chatbot:

```sh
node index.js
```

The chatbot will greet you with "Hello! How can I assist you today?" and wait for your input.

Type your question or message, and the chatbot will respond accordingly.

To exit the chat, type "exit."

### Customizing Responses
You can customize the chatbot responses by editing the chat_data.json file. Add more question-reply pairs to expand the chatbot's capabilities. Each conversation entry should follow the format:

```json
{
  "question": "your_question_here",
  "reply": "your_response_here"
}
```

### Contributing

Contributions are welcome! If you have suggestions, feature requests, or bug reports, please open an issue or submit a pull request. Let's make this chatbot even better together!


