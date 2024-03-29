const { EmbedBuilder } = require("discord.js");

module.exports = {
  	name: "remove",
    category: "Music",
  	description: "Removes a song from the queue.",
	args: true,
    usage: "<song # in queue>",
    userPerms: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
  
		const player = client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new EmbedBuilder()
                .setColor(client.embedColor)
                  .setAuthor({ name: `| Please play one song before using this command`,
                  iconURL:message.author.displayAvatarURL()});
            return message.channel.send({embeds: [thing]});
        }

    const position = (Number(args[0]) - 1);
       if (position > player.queue.size) {
        const number = (position + 1);
         let thing = new EmbedBuilder()
            .setColor(client.embedColor)
          .setAuthor({name:`|No song was found at number ${number}.\nTotal Songs: ${player.queue.size} `,
      iconURL: message.author.displayAvatarURL()});
            return message.channel.send({embeds: [thing]});
        }

    const song = player.queue[position]
		player.queue.remove(position);

		const emojieject = client.emoji.remove;

		let thing = new EmbedBuilder()
			.setColor(client.embedColor)
          .setAuthor({name:`| Song removed `,
      iconURL: message.author.displayAvatarURL()})
			    .setDescription(` [${song.title.substring(0, 63)}](${client.config.links.support})`)
  .setTimestamp()
		  return message.channel.send({embeds: [thing]});
	
    }
};
