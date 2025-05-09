//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347052414779";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURKMDZLcnRjR0RwR0ZuQ240Y0xnWmk3WEoxK3BHalBiTnFOVlBxUnZrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDVJQ3lRdHZZVWZHYXJFb1dxcU1KZThBNmQ1WUhvdE85WU1ydWJaVG5Icz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRnVIZUhTQWRycHg5UlIzSGcrbERiNCttTXBIbk9WK2F4c0dJa1FZQldVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0U2taVGJaYWNod3RDcTZKcnNjOGpSam5KOTZSOUxUbVkyUFVudnN4d2trPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQTjhIY2dyWjRJSDFaWXlsOGpaOStFcDBqR2NHb3ZKMGUyZlppOC8yR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNmQzRXVlQ2M2JDdTFHMC9BTExPWER6OFhQTjFGK2JyU2lmZHQ0eEZrMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpkeEJRdzkwbC9ON0RxV3ZwWllHbnBqR0NNb2p5aGZUK09JY0IvTnlsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzJ1RUVodWZ1SExNVUVtS2wyL0hQeGtiVlR4UUFzb0Z1akQ4VEVoMUNEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZlZFQ4dndQSmhDc2lPbUdEQVNaalVVNXhjUDhxVE16T2NJK2U1SkY1eEkwbFQweGI0N25hSnMwc2xGbkg2SHI4bGJ3bHB3NHhQWjlIMDZrQTZ3MWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJ2NFJhVUNnQnFTWDYvTWk5N3FYeWU1RkN4eTFSRTBDc2UyOEZPRXEvbU5nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhTy1vQmR4YlJCS0lNREVFTXVGVFh3IiwicGhvbmVJZCI6IjM5ZGJkOTViLTE5YzAtNDAxYS1hZWQ1LTJiMWQzZDVlMDNjMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWMFZ0TlBPRXN4eHBqVEZZTkx6M0I4RnFrTHc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik05RWJjQjJqaU41MTRCRTBGTlU3ZWtTSC93ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09HRWhhQURFSTdWOXNBR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InE3TXdha3JobXVYTDhZTWw2UUtDL2p6UUdCbWJiRW1VQTVLR1ljc0VubVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFHUTNRZGlLc1VaSzhYL0lBOEZXTlB6WVV3UHRienJyNnFRazRjZzRYV1U1a1lPbGhRYkxEQVBZQWtScnNyYmZETFBsb3VRZGRaQXdsSkcyVHBOcURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJueHpqTFo4ODUvSUxRdHJOdGMvZ1p1bXJpNkVmWDljTER4blpWanViNXFuR2M4ajhrZzI1dkhoaTFFM0R0Y0luN1FQSXhiNnBoNkZhR1FXeitHcGRqUT09In0sIm1lIjp7ImlkIjoiMjM0NzA1MjQxNDc3OTo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRyZXkgSnIuIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTI0MTQ3Nzk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhdXpNR3BLNFpybHkvR0RKZWtDZ3Y0ODBCZ1ptMnhKbEFPU2htSExCSjVsIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2Nzc0NjgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZleiJ9="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
