


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = HACKER-X; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by TalkDrove*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '2349018371490' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || '', //Paste your sessBByte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JyaXh1dUlDc3lkb2YvbFl3VUYzUVN0dDVhUkJxVnMrUy9SVmh2ZUlYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9acU1uMUs3N0tNZlk1aXV6MVhlRWZ0NFJqNlk4RW5MUW1zdHdOYVVFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTW1LdHFkVDMzbmpzb2ZMRE1maWJNRGMxaG4zNEF0TUwrLytGNjk3VTJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJocUJGOHdvZHlSaXRqYXByUGIra050Szkrcjl6aHFvb2RzM29pTW5zMWk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKZytsZFBGMjJ2TnpDUENIb1gxUUFreit6Y1VTaEJhc2ZLNVFCcTk1MDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZMSTFHRDdPcVlvYVVXNVdWQnJkajlkYW1xQ3Z0aGhId1Jnc2JnZzRWbUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lvVm1MOG8zY1pHMkFWcUtxZHRnQytCb2gvWm1aRkt2UU9XTVFqSWxXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE9QNVRKVkludEVYcXp2TndOWjk4SjNtN3o5eElReWV6NHpIZVNyeTBoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo0YUVRRFVYNUJQWE5MSjNUZWhFNktZTHl5WXY2UTluWkVIaXZZL05QRTRsWmtkamtOa0RxT1crZnlISG1VYU1nTlRqZXJ0SEp6TlRTZnlqUUFzNUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJLQThaMDZSTEsyWFRabEhWUEE4L1lvMkRwWXZiaXJ4bjExWHFYNzAzN3FrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTgzNzE0OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTFCRjdENTE1QTMxNEMyN0QyRTg1MDVBQkU4RkJGQkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDEwNDc0NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAxODM3MTQ5MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QjUyNTA2MjNEMzFFQzZCMjg4NzdGNTk3MTA5QUYyQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTA0NzQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVX1hNa3p0R1FsNlZ6Yk43UmoyT0dnIiwicGhvbmVJZCI6ImJiMGM0ZjEzLWFkYWMtNGE0Yy1iNTNkLWUwZGY4N2ZjZDhkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dFJ4OXgyZ1Jib2FwT0oxMmgwV0tkaVArRk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjlNM0sxNW5zU3M0bzNFVk9SUFFISFByNjhZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhRQ0RLV1hBIiwibWUiOnsiaWQiOiIyMzQ5MDE4MzcxNDkwOjM2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1PTU8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szenE5MEhFSm1BajdZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjM2LzJBOFRwYmNoS1d4aFFHWlJ0K0VIck9ML0grTWRBU3hCd0xYSDFaaG89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijc0YVpiWFFLTm5TMDA3WmtrTFY2T2xUNUlmL1ZHdVo5K1NVQnJQdmhxSHB3ZXhzektDR2JnR0dESTcwQmdYWExyanFKTlJpRVB6d05vWHlxZ0NURkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBcUIzQ1lnMVRRQWJUeXJCYzhrdmR1V1RSNVJsN0RYcUgyMG9mSHZNMWJ3V2QwckVkamt1MmNEVGtsaE1zKyt2Wk9XN3V5ZEtMOGNPMkkzNEV4NmFEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTgzNzE0OTA6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZCt2OWdQRTZXM0lTbHNZVUJtVWJmaEI2emkveC9qSFFFc1FjQzF4OVdZYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDEwNDc0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWk8ifQ==yte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpSRnZIMkVmNEwvMEZuZ0U4R0ZYbnUwKzQxdzk0Qi91dWJHTUFKcHMyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NEeFRaRmxKT29veXBzeU9WOGc4ZlM4ZHQrMmJGWVUrZ3Joc3Y0RXVVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSmZudkx2S0NpbHJOSUFUY3hjUUd6empHSHNnVnVRQUNDUE5rbWlJWlZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmSm5JOFptcDg0TCswRDBnMzc2bnhySVBJRVhZM0IwRG5EZGEweUFnM0hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQcG5xZDQwcEpvdmhTVEFLYWkzeTJlSFRBeWxFNnVPTDdjOFA1b00xbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1pcGg5ZmtQcXFqVE85MUc3MnFqc2tvWEM1Zkp1YnBNaWc4bnFlVXg5QUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktrMFBRN282MFdZemdULzhOWTdjVzdqM0lGUjhjMklQRGRjZ000YTVYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFAvRUR6OUYrSERieFFOZGdpcm0rTDRyYTlHdVBBN1dvc2h5cUdNVnNtbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNkSGo3WE9LaDgrMTdXVllmZlRFeEhjVU9LVzZoN1F0YisvNm5hNXRLSU1CUURXejg3c3UxZUwySXY4M1ZYQzRWREt0My9yTGpHemI1VW4zSWZpaUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJQd0t4U0Z4c20ySlIrYmpzaVRwMjBNRmpZSU9CbXcwTjh1L2s2RWVvVjg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTgzNzE0OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREI0QTEyMjJEOEU4MEYzMzhDN0FCMjA3RTlENDIzMTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDEwMjkxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAxODM3MTQ5MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxOUFEQTM2RjlDREMyODJGMkMzOThEMUYxQjIwNDk1QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTAyOTE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwekJIWHVUZlFQU0ZQYXZHQ0E1aDBRIiwicGhvbmVJZCI6IjUwMjk0ZDc1LWY0NGMtNGM0Yy04NTMxLTNlZmI3NTJiZGZiMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QUlkN1NnS2pmeUgyNXRnM29jVndNUG5UeGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjZhMmorVWNpaUJHam03aE9icjZLdFhYbmY0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFRTks2TFdQIiwibWUiOnsiaWQiOiIyMzQ5MDE4MzcxNDkwOjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1PTU8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t6enE5MEhFUER4anJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjM2LzJBOFRwYmNoS1d4aFFHWlJ0K0VIck9ML0grTWRBU3hCd0xYSDFaaG89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ims4USswNStXNHBCdHlvdVZXTTdBcURLdG5IdnRldVdZZndGeDlWUjJ3SzRIdnhpUmlEbERiM25YeDErcE9jclNLTFdEZmsxVU8yUnVxN0kyWmI4c0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2UytYZk42MnE1Z1dnTWhiakdsQmlUVUZIMW5iN1FycE16NmJiVy9zU2NKY2EyVlFwK0ZDbTRzU0I0NUlKUnl4dWIrbUNQeVJLc0s4aU01NWxORWJCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTgzNzE0OTA6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZCt2OWdQRTZXM0lTbHNZVUJtVWJmaEI2emkveC9qSFFFc1FjQzF4OVdZYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDEwMjkxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWk0ifQ==ion ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'private' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'ANONYMOUS MOMO' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by TalkDrove*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || false  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
