const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
let prefix = config.prefix
let devs = config.devs;





client.login(config.token);
