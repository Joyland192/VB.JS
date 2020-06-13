const { prefix } = require('./Config.json'); //prefix, token을 불러옴
//const prefix = "++"; //prefix, token을 불러옴
const token = process.env.token;
const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
const joutube = new Discord.MessageEmbed()
	.setColor('#FF9900')
	.setTitle('조이 유튜브 채널 가기')
	.setURL('https://www.youtube.com/channel/UCQ0Rn67N-SgEcaOqA3JS2mA')
	.setAuthor('조이', 'https://cdn.discordapp.com/attachments/719852428777750590/719877042304450620/download20200502163021.png')
	.setDescription('안뇽')
	.setThumbnail('https://cdn.discordapp.com/attachments/719852428777750590/719877042304450620/download20200502163021.png')
	//.addFields(
	//	{ name: 'Regular field title', value: 'Some value here' },
	//	{ name: '\u200B', value: '\u200B' },
	//	{ name: 'Inline field title', value: 'Some value here', inline: true },
	//	{ name: 'Inline field title', value: 'Some value here', inline: true },
	//)
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter(`VB`, 'https://cdn.discordapp.com/attachments/719852428777750590/719877042304450620/download20200502163021.png');
//임베드 함수 생성
client.once('ready', () => {
  console.log("Bot Login.");
});
client.on('message', (msg) => {
    if(msg.channel.type === "dm" ) { 
        if (msg.content === `${prefix} ID`){
            if ((msg.author.plsstop != 0) && (!msg.author.yee)) {
                msg.channel.send("여기 아니야 임마...");
                msg.channel.send(`이번만 해준다.. ${msg.author.id}`);
                msg.author.left = 4;
                msg.channel.send(`${msg.author.left}번만 더 해준다...`);
                msg.author.plsstop = 1;
                msg.author.yee = true;
            } else if (msg.author.plsstop <= 4) {
                msg.channel.send("여기 아니야 임마...");
                msg.channel.send(`이번만 해준다.. ${msg.author.id}`);
                msg.author.left = 4 - msg.author.plsstop;
                msg.channel.send(`${msg.author.left}번만 더 해준다...`);
                msg.author.plsstop += 1;
            } else if (msg.author.plsstop > 4) {
                msg.channel.send("작작해 내가 노예도 아니고 ㅠㅠ");
            }
        }
    }
});
client.on('message', (msg) => {
    if (msg.channel.type === "dm") {
        msg.author.dm = true
    }
    if(!msg.author.dm) {
        const args = msg.content.split(" ");
        if (msg.content === `${prefix} ID`) {
            msg.channel.send(`${msg.author.id}`);
        }
    }
});
client.on('message', (msg) => {
    const args = msg.content.split(" ");
    if (msg.content === "0.02" ) {
        // "Pong"으로 되돌려 칩니다.
        msg.channel.send("안한다구요!!");
    }
    if (msg.content === `${prefix} 뭐해`) {
        msg.author.what = Math.floor(Math.random() * 5) + 1;
        if (msg.author.what === 1) {
            msg.channel.send("몰라");
        }
        if (msg.author.what === 2) {
            msg.channel.send("잠");
        }
        if (msg.author.what === 3) {
            msg.channel.send("마인크래프트 하는데");
        }
        if (msg.author.what === 4) {
            msg.channel.send("ㅇ?");
        }
        if (msg.author.what === 5) {
            msg.channel.send("M자 탈모 박치기");
        }
    }
    if (msg.content === `테스트`) {
        msg.author.test = Math.floor(Math.random() * 2) + 1;
        if (msg.author.test === 1) {
            msg.channel.send("ㅇ");
        }
        if (msg.author.test === 2) {
            msg.channel.send("잘 되는데?");
        }
    }
    if (msg.content === `${prefix} 반응 달아`) {
        msg.author.reac = Math.floor(Math.random() * 3) + 1;
        if (msg.author.reac === 1) {
            msg.react('704949221605769226');
        }
        if (msg.author.reac === 2) {
            msg.react('712539046135463977');
        }
        if (msg.author.reac === 3) {
            msg.channel.send("싫은데");
        }
    }
    if (msg.content === "0.03") {
        msg.channel.send("안한다구요!!");       
    }
    if (msg.content === `${prefix} 유튜브`) {
        msg.channel.send(joutube);       
    }
    if (msg.content === `시발`) {
        msg.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/708522939431125033/SIVpzVG.jpg`);
    }
    if (msg.content === `ㅅㅂ`) {
        msg.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/708522939431125033/SIVpzVG.jpg`);
    }
    if (msg.content === `시벌`) {
        msg.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/708522939431125033/SIVpzVG.jpg`);
    }
    if (msg.content === `${prefix} 재배맨!`) {
        msg.channel.send(`무 무슨`);
        msg.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (msg.content === `${prefix} 재배맨`) {
        msg.channel.send(`무 무슨`);
        msg.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (msg.content === `${prefix} 강작가`) {
        msg.channel.send(`밥오`);
    }
    if (args[0] === `${prefix}문자열테스트`) {
        msg.channel.send(`(문자열 1:) ${args[1]} (문자열 2:) ${args[2]} (문자열 3:) ${args[3]}`);
    }
    if ((args[0] === `${prefix}`) && (args[1] === `랜덤`)) {
        msg.author.randomvar = Math.floor(Math.random() * args[3] + args[2])
        msg.channel.send (msg.author.randomvar);
    }
    if (args[0] === `${prefix}말해`) {
        //msg.channel.send(`args[0]: ${args[0]}, args[1]: ${args[1]}`);
        msg.channel.send(`${args[1]}`);
    }
    if (msg.content === '!fruits') {
	msg.react('🍎');
	msg.react('🍊');
	msg.react('🍇');
    }
});



client.login(token);
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
