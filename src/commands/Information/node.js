const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "node",
    category: "Information",
    description: "Displays node information.",
    args: false,
    usage: "",
    userPerms: [],
    owner: true,
    execute: async (message, args, client, prefix) => {

        const all = client.manager.nodes.map(node => 
            `Node Resso Connected` +
            `\nTotal Players: ${node.stats.players}` +
            `\nTotal Playing: ${node.stats.playingPlayers}` +
           `\nUptime: ${new Date(node.stats.uptime).toISOString().slice(11, 19)}`  +
            `\nReservable Memory: ${Math.round(node.stats.memory.reservable / 1024 / 1024)}mb` +
            `\nUsed Memory: ${Math.round(node.stats.memory.used / 1024 / 1024)}mb` +
            `\nFree Memory: ${Math.round(node.stats.memory.free / 1024 / 1024)}mb` +
            `\nAllocated Memory: ${Math.round(node.stats.memory.allocated / 1024 / 1024)}mb` +
            `\nCores: ${node.stats.cpu.cores}` +
            `\nSystem Load: ${(Math.round(node.stats.cpu.systemLoad * 100) / 100).toFixed(2)}%` +
            `\nLavalink Load: ${(Math.round(node.stats.cpu.lavalinkLoad * 100) / 100).toFixed(2)}%`
        ).join('\n\n----------------------------\n');

        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Resso Node', iconURL: client.user.displayAvatarURL() })
            .setDescription(`\`\`\`${all}\`\`\``)
            .setColor(client.embedColor)
        message.reply({ embeds: [embed] })
    }
}
