const { prefix } = require('./Config.json'); //prefix, token을 불러옴
//const prefix = "++"; //prefix, token을 불러옴
const token = process.env.token;
const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
//커밋 완료4

client.once('ready', () => {
	console.log("Bot Login.");
	client.user.setActivity(`XVB                                `);
});


client.login(token);
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
