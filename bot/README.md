# Telegram Bot

This project contains a Telegram bot that can be used to perform various actions and respond to user commands.

## Project Structure

The project has the following file structure:

```
telegram-bot
├── src
│   ├── bot.js
│   └── commands
│       └── start.js
├── .env
├── package.json
└── README.md
```

- `src/bot.js`: This file is the main file of the Telegram bot. It contains the code to initialize and configure the bot, as well as handle incoming messages and commands.

- `src/commands/start.js`: This file exports a function `startCommand` which handles the `/start` command. It can be used to send a welcome message or perform any other action when the command is triggered.

- `.env`: This file is the environment file. It is used to store sensitive information such as the bot token or API keys. Make sure to add this file to your `.gitignore` to keep your secrets safe.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project. You can use it to install the required packages and run scripts such as starting the bot.

## Telegram webhook config

`npm run set-webhook -- -t $BOT_TOKEN -D '{ "url": $FULL_URL_TO_FUNCTION }'`
Telegram [docs](https://core.telegram.org/bots/api#setwebhook)

## Getting Started

To set up and run the Telegram bot, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file and add your Telegram bot token and any other required API keys or credentials.
4. Start the bot by running `node src/bot.js`.
5. Your Telegram bot is now up and running! You can interact with it by sending messages or commands.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Please note that this is just a scaffold for the `README.md` file. You can customize it further based on your specific project requirements and add more detailed instructions or information as needed.
