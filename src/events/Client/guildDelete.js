const { ChannelType, EmbedBuilder } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: "guildDelete",
  run: async (client, guild) => {

    const channel = client.channels.cache.get(client.config.logs);
    let text;
    guild.channels.cache.forEach(c => {
      if (c.type === ChannelType.GuildText && !text) text = c;
    });
    const embed = new EmbedBuilder()
      .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
      .setTitle(`📤 Left a Guild !!`)
      .addFields([
        { name: 'Name', value: `\`${guild.name}\`` },
        { name: 'ID', value: `\`${guild.id}\`` },
        { name: 'Member Count', value: `\`${guild.memberCount}\` Members` },
        { name: 'Creation Date', value: `\`${moment.utc(guild.createdAt).format('DD/MMM/YYYY')}\`` },
        { name: `${client.user.username}'s Server Count`, value: `\`${client.guilds.cache.size}\` Servers` }
      ])
      .setColor(client.embedColor)
      .setTimestamp()
    channel.send({ embeds: [embed] });
  }
};