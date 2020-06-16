const { prefix } = require('./Config.json'); //prefix, token을 불러옴
//const prefix = "++"; //prefix, token을 불러옴
const token = process.env.token;
const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
//커밋 완료
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
client.on('message', ( message ) => {
    if(message.channel.type === "dm" ) { 
        if (message.content === `${prefix} ID`){
            if ((message.author.plsstop != 0) && (!message.author.yee)) {
                message.channel.send("여기 아니야 임마...");
                message.channel.send(`이번만 해준다.. ${message.author.id}`);
                message.author.left = 4;
                message.channel.send(`${message.author.left}번만 더 해준다...`);
                message.author.plsstop = 1;
                message.author.yee = true;
            } else if (message.author.plsstop <= 4) {
                message.channel.send("여기 아니야 임마...");
                message.channel.send(`이번만 해준다.. ${message.author.id}`);
                message.author.left = 4 - message.author.plsstop;
                message.channel.send(`${message.author.left}번만 더 해준다...`);
                message.author.plsstop += 1;
            } else if (message.author.plsstop > 4) {
                message.channel.send("작작해 내가 노예도 아니고 ㅠㅠ");
            }
        }
    }
});
client.on('message', ( message ) => {
    if (message.channel.type === "dm") {
        message.author.dm = true
    }
    if(!message.author.dm) {
        const args = message.content.split(" ");
        if (message.content === `${prefix} ID`) {
            message.channel.send(`${message.author.id}`);
        }
    }
});
client.on('message', (message) => {
    const args = message.content.split(" ");
    if (message.content === "0.02" ) {
        // "Pong"으로 되돌려 칩니다.
        message.channel.send("안한다구요!!");
    }
    if (message.content === `${prefix} 뭐해`) {
        message.author.what = Math.floor(Math.random() * 5) + 1;
        if (message.author.what === 1) {
            message.channel.send("몰라");
        }
        if (message.author.what === 2) {
            message.channel.send("잠");
        }
        if (message.author.what === 3) {
            message.channel.send("마인크래프트 하는데");
        }
        if (message.author.what === 4) {
            message.channel.send("ㅇ?");
        }
        if (message.author.what === 5) {
            message.channel.send("M자 탈모 박치기");
        }
    }
    if (message.content === `테스트`) {
        message.author.test = Math.floor(Math.random() * 2) + 1;
        if (message.author.test === 1) {
            message.channel.send("ㅇ");
        }
        if (message.author.test === 2) {
            message.channel.send("잘 되는데?");
        }
    }
    if (message.content === `${prefix} 반응 달아`) {
        message.author.reac = Math.floor(Math.random() * 3) + 1;
        if (message.author.reac === 1) {
            message.react('704949221605769226');
        }
        if (message.author.reac === 2) {
            message.react('712539046135463977');
        }
        if (message.author.reac === 3) {
            message.channel.send("싫은데");
        }
    }
    if (message.content === "0.03") {
        message.channel.send("안한다구요!!");       
    }
    if (message.content === `${prefix} 나 누구야`) {
        message.channel.send(`너..그..어.. ${message.author.tag} ?`);       
    }
    if (message.content === `${prefix} 유튜브`) {
        message.channel.send(joutube);       
    }
    if (message.content === `시발`) {
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/708522939431125033/SIVpzVG.jpg`);
    }
    if (message.content === `ㅅㅂ`) {
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/708522939431125033/SIVpzVG.jpg`);
    }
    if (message.content === `시벌`) {
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/708522939431125033/SIVpzVG.jpg`);
    }
    if (message.content === `${prefix} 재배맨!`) {
        message.channel.send(`무 무슨`);
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (message.content === `${prefix} 재배맨`) {
        message.channel.send(`무 무슨`);
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (message.content === `${prefix} 강작가`) {
        message.channel.send(`밥오`);
    }
    if (args[0] === `${prefix}문자열테스트`) {
        message.channel.send(`(문자열 1:) ${args[1]} (문자열 2:) ${args[2]} (문자열 3:) ${args[3]}`);
    }
    if ((args[0] === `${prefix}`) && (args[1] === `랜덤`)) {
        message.author.randomvar = Math.floor(Math.random() * args[3] + args[2])
        message.channel.send (message.author.randomvar);
    }
    if (message.content === `${prefix} 바보`) {
        message.author.addRole(guild.roles.find(role => role.name == "바보"));
    }
    if (args[0] === `${prefix}말해`) {
        //message.channel.send(`args[0]: ${args[0]}, args[1]: ${args[1]}`);
        message.channel.send(`${args[1]}`);
    }
    if (message.content === '!fruits') {
	message.react('🍎');
	message.react('🍊');
	message.react('🍇');
    }
    if(message.content.startsWith('!전체공지')) {
        if(checkPermission(message)) return
        if(message.member != null) { // 채널에서 공지 쓸 때
          let contents = message.content.slice('!전체공지'.length);
          message.member.guild.members.array().forEach(x => {
            if(x.user.bot) return;
            x.user.send(`<@${message.author.id}> ${contents}`);
          });
          return message.reply('공지를 전송했습니다.');
        } else {
          return message.reply('채널에서 실행해주세요.');
        }
      }
});



client.login(token);
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
