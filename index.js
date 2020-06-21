const { prefix } = require('./Config.json'); //prefix, token을 불러옴
//const prefix = "++"; //prefix, token을 불러옴
const token = process.env.token;
const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
const fs = require('fs');
// 저장
//fs.writeFileSync("C:\Users\JoyLand192\PycharmProjects\깁치봇\venv\VB.JS\Exp.json", JSON.stringify(save));
// 불러오기
//save = JSON.parse(fs.readFileSync("C:\Users\JoyLand192\PycharmProjects\깁치봇\venv\VB.JS\Exp.json"));
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
//커밋 완료3
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
  const loginlog = client.channels.cache.get('724231205570215946');
  loginlog.send(`봇 로그인.`);
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
    const blueholdcn = client.channels.cache.get('721252326249070652');
    const reinforcejd = client.channels.cache.get('541904100607131658');
    const namutest = client.channels.cache.get('697389133361971315');
    message.author.maxexp = message.author.level*300;
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
    if(message.content.startsWith(`${prefix} 블홀공지`)) {
        let bhkj = message.content.slice(`${prefix} 블홀공지`.length);
        blueholdcn.send(bhkj);
        blueholdcn.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`)
        message.reply('메시지를 전송했습니다.');
    }
    if(message.content.startsWith(`${prefix} 나무채팅`)) {
        let nmtt = message.content.slice(`${prefix} 나무채팅`.length);
        namutest.send(nmtt);
        namutest.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`)
        message.reply('메시지를 전송했습니다.');
    }
    //if ((args[0] === `${prefix}`) && (args[1] === `렌포잡담`)) {
    //    reinforcejd.send(`${args[2]}`);
    //}
    if(message.content.startsWith(`${prefix} 렌포잡담`)) {
        let rfjd = message.content.slice(`${prefix} 렌포잡담`.length);
        reinforcejd.send(rfjd);
        reinforcejd.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`)
        message.reply('메시지를 전송했습니다.');
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
    if (message.content === "띵킹") {
        message.react('🤔');
    }
    if (message.content === "몸 어때") {
        message.channel.send("갠찮아");       
    }
    if (message.content === `${prefix} 지워`) {
        message.author.plsdel = Math.floor(Math.random() * 5) + 1;
        if (message.author.plsdel === 1) {
            message.channel.send("시러");
        }
        if (message.author.plsdel === 2) {
            message.delete();
        }
        if (message.author.plsdel === 3) {
            message.delete();
        }
        if (message.author.plsdel === 4) {
            message.delete();
        }
        if (message.author.plsdel === 5) {
            message.delete();
        }
    }
    if (message.content === `${prefix} 나 누구야`) {
        message.channel.send(`너..그..어.. ${message.author.name} ?`);       
    }
    if (message.content === `${prefix} 경험치 설정`) {
        message.channel.send(`경험치를 0으로 설정했습니다.`);   
        message.author.exp = 0;
        message.author.level = 1;
    }
    if (message.content === `${prefix} 경험치 올리기`) {
        message.channel.send(`경험치를 100만큼 올립니다.`);   
        message.author.exp += 100;
    }
    if(message.author.exp >= message.author.maxexp) {
        message.author.exp -= message.author.maxexp;
        message.author.level++;
        message.channel.send("축하합니다! 레벨업 하셨습니다!");
    }
    if (message.content === `${prefix} 경험치`) {
        message.channel.send(`당신의 보유 경험치는 ${message.author.exp}/${message.author.maxexp} 입니다.`);       
    }
    if (message.content === `${prefix} 레벨`) {
        message.channel.send(`당신의 레벨은 ${message.author.level}Lv 입니다.`);       
    }
    if (message.content === `${prefix} 유튜브`) {
        message.channel.send(joutube);       
    }
    if ((args[0] === `${prefix}`) && (args[1] === `닉네임`)) {
        client.user.setUsername(`${args[2]}`);
        message.channel.send(`닉네임을 ${args[2]} 으로 설정 했어.`);
        if (args[2] == `${client.user.username}`) {
            message.channel.send(`원래 이거였는데?`)
        }
        if (args[2] == `바보`) {
            message.channel.send(`..디질래?`);
        }
    }
    if (message.channel.id === '541904100607131658') {
        if (message.content.startsWith (`ㅅㅂ`)) {
            message.delete();
        }
        if (message.content.startsWith (`시발`)) {
            message.delete();
        }
        if (message.content.startsWith (`씨발`)) {
            message.delete();
        }
        if (message.content.startsWith (`ㅆㅂ`)) {
            message.delete();
        }
        if (message.content.startsWith (`시벌`)) {
            message.delete();
        }
    }
    if (message.content === `${prefix} 여기 어디야`) {
        message.channel.send(`여기 거긴데 그..`)
        message.channel.send(`**${message.guild.name}**`)
    }
    if (message.content.startsWith (`ㅅㅂ`)) {
        message.channel.send('욕은 나빠 >:(');
    }
    if (message.content.startsWith (`시발`)) {
        message.channel.send('욕은 나빠 >:(');
    }
    if (message.content.startsWith (`씨발`)) {
        message.channel.send('욕은 나빠 >:(');
    }
    if (message.content.startsWith (`ㅆㅂ`)) {
        message.channel.send('욕은 나빠 >:(');
    }
    if (message.content.startsWith (`시벌`)) {
        message.channel.send('욕은 나빠 >:(');
    }
    if (message.content.startsWith (`소환`)) {
        message.react('🤔');
    }
    if (message.content.startsWith (`수버 등장`)) {
        message.author.surber = Math.floor(Math.random() * 3) + 1;
        if (message.author.surber === 1) {
            message.channel.send('스윽');
        }
        if (message.author.surber === 2) {
            message.channel.send('쾅');
        }
        if (message.author.surber === 3) {
            message.channel.send('펑');
        }
    }
    if (message.content === `${prefix} 꿀벌`) {
        message.channel.send(`야 ${message.author.tag}.. 왜 울고있는거야..?`).then(() => message.channel.send ('..소난다..'));
    }
    if (message.content === `${prefix} 평가`) {
        message.react('👍').then(() => message.react('👎').then(() => message.channel.send(`VB의 기능에 대해 평가해주세요.`)));
    }
    if (message.content === `${prefix} 재배맨!`) {
        message.channel.send(`무 무슨`);
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (message.content === `${prefix} 재배맨`) {
        message.channel.send(`무 무슨`);
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (message.content === `<@556660274380406805>`) {
        message.channel.send(`으악 핑`);
        message.channel.send(`왜 불러`);
    }
    if (message.content === `${prefix} 강작가`) {
        message.channel.send(`밥오`);
    }
    if (args[0] === `${prefix}문자열테스트`) {
        message.channel.send(`(문자열 1:) ${args[1]} (문자열 2:) ${args[2]} (문자열 3:) ${args[3]}`);
    }
    if (message.content === `${prefix} 순서 1`) {
        message.author.qna = 1;
        message.channel.send(`JL의 턴입니다.`);
    }
    if (message.content === `${prefix} 순서 2`) {
        message.author.qna = 2;
        message.channel.send(`V의 턴입니다.`);
    }
    if (message.content === `${prefix} 순서 3`) {
        message.author.qna = 3;
        message.channel.send(`AR의 턴입니다.`);
    }
    if (message.content === `${prefix} 순서 `) {
        if (message.author.qna = 1) {
            message.channel.send(`JL의 턴입니다.`);
        }
        if (message.author.qna = 2) {
            message.channel.send(`V의 턴입니다.`);
        }
        if (message.author.qna = 3) {
            message.channel.send(`AR의 턴입니다.`);
        }
    }
    if ((args[0] === `${prefix}`) && (args[1] === `랜덤`)) {
        message.author.randomvar = Math.floor(Math.random() * args[3] + args[2])
        message.channel.send (message.author.randomvar);
    }
    if (message.content === `${prefix} 바보`) {
        message.author.addRole(guild.roles.find(role => role.name == "바보"));
    }
    if(message.content.startsWith(`${prefix} 말해`)) {
        let saypls = message.content.slice(`${prefix} 말해`.length);
        message.channel.send(saypls);
    }
    if (message.content === '!fruits') {
	message.react('🍎');
	message.react('🍊');
	message.react('🍇');
    }
    message.author.exp += 20;
});


client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    const newUser = member.user;
    const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);
  
    welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
  
    member.addRole(guild.roles.find(role => role.name == "게스트"));
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    const deleteUser = member.user;
    const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);
  
    byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
  });
  
  client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    const newUser = member.user;
    const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);
  
    welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
  
    member.addRole(guild.roles.find(role => role.name == "게스트"));
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    const deleteUser = member.user;
    const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);
  
    byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
  });
  
  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if(message.content == 'ping') {
      return message.reply('pong');
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
  
  function checkPermission(message) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
      return true;
    } else {
      return false;
    }
  }





client.login(token);
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
