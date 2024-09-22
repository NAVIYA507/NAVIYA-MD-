const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
  
cmd({
    pattern: "save",
    desc: "status video save",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
    const textLower = m.body.toLowerCase();

    if (triggerWords.includes(textLower)) {

      if (m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo) {

        const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;



        if (quotedMessage) {

          // Check if it's an image

          if (quotedMessage.imageMessage) {

            const imageCaption = quotedMessage.imageMessage.caption;

            const imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);

            await gss.sendMessage(m.from, {

              image: { url: imageUrl },

              caption: imageCaption,

              contextInfo: {

                mentionedJid: [m.sender],

                forwardingScore: 9999,

                isForwarded: true,

              },

            });

          }



          // Check if it's a video

          if (quotedMessage.videoMessage) {

            const videoCaption = quotedMessage.videoMessage.caption;

            const videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);

            await gss.sendMessage(m.from, {

              video: { url: videoUrl },

              caption: videoCaption,

              contextInfo: {

                mentionedJid: [m.sender],

                forwardingScore: 9999,

                isForwarded: true,

              },

            });



}catch(e){
console.log(e)
reply(`${e}`)
}
})
