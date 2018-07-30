# discord-blb
Big Letter Bot for Discord.
It´s a bot that prints text with letter/number emojis, making it look bigger.

![BLB example](https://github.com/42LoCo42/discord-blb/blob/master/example.png)

## How To install
### 1. Aquire a discord bot
1.1. Open [My Applications](https://discordapp.com/developers/applications/ "Discord My Applications") (login if neccessary)

1.2. Click "Create Application"

1.3. Enter bot information (name, description etc.). You don´t need to upload an avatar, the bot does it automatically.

1.3,5 Copy "Client ID" if you want to add the bot to a server in Step 3.1

1.4. Click "Bot" on the left

1.5. Click and confirm "Add bot"

1.6. Click "Reveal Token" and copy it. IMPORTANT: NEVER give this token to anybody. It´s your key to the bot!

### 2. Setup the environment
2.1. Donwload and install Node.js from [here](https://nodejs.org/en/download/ "Node.js download")

2.2. Create a folder for the bot

2.3. Download and unzip the current release of this repo to that folder

2.4 Open the file "token.json" and write your name and your token in the designated fields

2.5. Open a terminal there and run "npm install discord.js"

### 3. Run the bot
3.1 To add the bot to a server, open https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_HERE&scope=bot but replace CLIENT_ID_HERE with your Client ID from step 1.3,5

3.1. Open a terminal in the bot´s folder

3.2. Run "node ."

## Available Commands
!blb <message> - Prints the message with BIG letters
  
!blbinfo - Prints some basic information about the bot.
