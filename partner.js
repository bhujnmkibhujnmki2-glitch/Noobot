const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const { EMBED_COLOR, SERVER_LINE } = require('../../config.js');

module.exports = {

  name: 'partner',
    
  aliases: ['pt'],

  owners: true,

  async execute(message) {

    const embed = new EmbedBuilder()

      .setTitle('الـبـارتـنـر')

      .setDescription(`**
\`\`\`
قــوانـيـن الـبـارتـنـر الـخـاصـة بـ 𝐀𝐋𝐅𝐀 𝐌𝐞𝐦𝐛𝐞𝐫𝐬
\`\`\` :

- <:discotoolsxyzicon30:1464698774910668980> يـجـب أن يـكـون عــدد اعـضـاء سـيـرفـرك لا يـقـل عـن 100 عــضـو 


- <:discotoolsxyzicon24:1464699611917844530> يـجـب احـتـرام الاونــر و عــدم مـنـشـن


- <a:Light_blue_star:1464699756654891251> يـسـتـحـب أن يـكـون نــوع الـسـيـرفـر بـيـع اعــضـاء مــثـلـنـا 


-# لــطـلـب بـارتـنـر يـرجـى الـضـغـط عـلـى الـزر بالاسـفـل
**`)

      .setColor(`${EMBED_COLOR}`)
      
      .setImage('https://i.postimg.cc/854LpcSg/Untitled62-20260124081708.png')
    
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(

      new ButtonBuilder()

        .setCustomId('partner-request')

        .setLabel('طـلـب بـارتـنـر')
        .setEmoji({
            id:`1435831806145597470`,
            name:`DnS_link`
            })
        .setStyle(ButtonStyle.Secondary),

    );

    await message.channel.send({ embeds: [embed], components: [row] });

await message.channel.send(`${SERVER_LINE}`);
  },

};