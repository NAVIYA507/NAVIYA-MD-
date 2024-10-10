const mediaCommadns = require('./commands/mediacommands');
const axios = require('axios');
const { cmd } = require('..command');


   cmd({
       pattern: "mediadownload",
       desc: "Download media using URL",
       category: "download",
       react: "📥",
       filename: __filename
   }, async (conn, mek, m, { from, args, reply }) => {
       try {
           if (args.length === 0) {
               return reply("කරුණාකර ඕනෑම media එකක් download කිරීමට URL එකක් ලබා දෙන්න.");
           }
           
           let mediaUrl = args[0];
           if (!mediaUrl.startsWith("http")) {
               return reply("Valid URL එකක් ලබා දෙන්න (e.g., http:// or https://)");
           }
           
           const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
           await reply(`✅ Media download කිරීම සාර්ථකයි: ${mediaUrl}`);

      ddxd$$dd   } catch (error) {
           console.log(error);
           reply("මැදි‍ය Download කිරීමේදී දෝෂයක් පවතී.");
       }
   });
