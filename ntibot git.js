const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
	// connected mesage
	console.log("NtiBot is up and running!");
	bot.on("message", (msg) => {
		let pubgRole =  msg.guild.roles.find('name', 'PUBG');
		let loRole = msg.guild.roles.find("name", "League of Legends")
		let csRole = msg.guild.roles.find("name", "CS:GO")
		let owRole = msg.guild.roles.find("name", "Overwatch")
		let rsRole = msg.guild.roles.find("name", "Rainbow Six Siege")
		let gRole = msg.guild.roles.find("name", "Garry's Mod")
		let hotsRole = msg.guild.roles.find("name", "Heroes of The Storm")
		let duckRole = msg.guild.roles.find("name", "Duck Game")
		let tfRole = msg.guild.roles.find("name", "TF2")
		let dotaRole = msg.guild.roles.find("name", "Dota 2")
		
		
		if (msg.content == "!pubg") { //give pubg role
			msg.reply("Alright, i gave you the PUBG role!")
			msg.member.addRole(pubgRole)
		}
		if (msg.content == "!LoL") { //give LoL role
			msg.reply("Alright, i gave you the League of Legends role!")
			msg.member.addRole(loRole)
		}
		if (msg.content == "!csgo") { //give csgo role
			msg.reply("Alright, i gave you the CS:GO role!")
			msg.member.addRole(csRole)
		}
		if (msg.content == "!ow") { //give ow role
			msg.reply("Alright, i gave you the Overwatch role!")
			msg.member.addRole(owRole)
		}
		if (msg.content == "!r6s") { //give r6s role 
			msg.reply("Alright, i gave you the Rainbow Six Siege role!")
			msg.member.addRole(rsRole)
		}
		if (msg.content == "!gmod") { //give gmod role
			msg.reply("Alright, i gave you the Garry's Mod role!")
			msg.member.addRole(gRole)
		}
		if (msg.content == "!hots") {
			msg.reply("Alright, i gave you the Heroes Of The Storm role!")
			msg.member.addRole(hotsRole)
		}
		if (msg.content == "!duck") {
			msg.reply("Alright, i gave you the Duck Game role, even though i don't know what the fuck that is...")
			msg.member.addRole(duckRole)
		}
		if (msg.content == "!tf2") {
			msg.reply("Alright, i gave you the Team Fortress 2 role!")
			msg.member.addRole(tfRole)
		}
		if (msg.content == "!dota2") {
			msg.reply("Alright, i gave you the Dota 2 role!")
			msg.member.addRole(dotaRole)
		}
		if(msg.content == "!help") {
			msg.reply("Here's a list of my commands: https://hastebin.com/omicocozej.diff")
		}
		if(msg.content == "!about") {
			msg.channel.sendMessage("This bot was (and still is) developed by by @Oliver#5583 (oliver boudet)")
		}
	});
});

bot.login("INSERT_BOT_TOKEN_HERE")

