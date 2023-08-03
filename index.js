const readline = require('readline');
const chatData = require('./chat_data.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getUserInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function getBotResponse(userInput) {
  const conversations = chatData.conversations;
  const lowercaseUserInput = userInput.toLowerCase();

  for (const convo of conversations) {
    if (lowercaseUserInput.includes(convo.question)) {
      return convo.reply;
    }
  }
  return "I'm sorry, I don't have an appropriate response for that. You can add your custom response in 'chat_data.json'";
}

async function chatLoop() {
  console.log('Chatbot: Hello! How can I assist you today?');
  while (true) {
    const user_input = await getUserInput('You: ');

    if (user_input.toLowerCase() === 'exit') {
      rl.close();
      break;
    }

    const bot_response = getBotResponse(user_input);
    console.log('Chatbot:', bot_response);
  }
}

chatLoop();
