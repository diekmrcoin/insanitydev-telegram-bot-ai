# InsanityDev Telegram Bot with AI Integration

This project is a Telegram bot designed to integrate AI functionalities, enhancing the organizational and interactive capabilities for the Insanity Dev game studio. It leverages the power of AI to provide a more dynamic and responsive user experience.

## Project Overview

The bot is built to interact with users on Telegram, offering a range of commands and AI-powered responses. It's part of Insanity Dev's initiative to incorporate more AI into their operations, making interactions more engaging and efficient.

## Features

- AI Integration: Utilizes the `@anthropic-ai/sdk` for advanced AI capabilities.
- Command Handling: Supports various commands, including a welcome message via the `/start` command.
- Environment Variables: Uses a `.env` file to securely manage sensitive information like bot tokens and API keys.

## Project Structure
```
insanitydev-telegram-bot-ai/
├── bot/
│   ├── src/
│   │   ├── bot.js
│   │   └── commands/
│   │       └── start.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── LICENSE
├── README.md
└── terraform/
  ├── .gitignore
  ├── main.tf
  ├── modules/
  │   └── lambda/
  │       └── lambda.tf
  ├── providers.tf
  ├── terraform.tf
  ├── tfbackend/
  │   └── dev.tfbackend
  └── tfvars/
    └── dev.tfvars
```

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the `bot/` directory.
3. Install the dependencies by running `npm install`.
4. Create a `.env` file in the `bot/` directory and add your Telegram bot token and any other required API keys or credentials.
5. Start the bot by running `npm start` from the `bot/` directory.
6. Your Telegram bot is now up and running! Interact with it by sending messages or commands on Telegram.

## Contributing

We welcome contributions! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request. See the [Contributing](bot/README.md#Contributing) section in the bot's README for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Authors

- Diego Maroto

---

For more information on how to use, extend, or contribute to this project, please refer to the individual README files within the project directories.