const moment = require('moment-timezone'); 
const listmenu = (prefix) => {
	let p = 0
	return ` *WHATSAPP-BOT*

*GROUP ONLY*
*${p+=1}.* ${prefix}group _open|close_
*${p+=1}.* ${prefix}antilink _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}welcome _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}setgroupicon _replyImage_
*${p+=1}.* ${prefix}setgroupname _text_
*${p+=1}.* ${prefix}setgroupdesc _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}promote _@tag_
*${p+=1}.* ${prefix}demote _@tag_
*${p+=1}.* ${prefix}kick _@tag_
*${p+=1}.* ${prefix}add _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave

*DOWNLOADER* 
*${p+=1}.* ${prefix}play _query_
*${p+=1}.* ${prefix}playvid _query_
*${p+=1}.* ${prefix}youtubedl _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_
*${p+=1}.* ${prefix}igstory _username_
*${p+=1}.* ${prefix}ig _link_
*${p+=1}.* ${prefix}tiktok _link_
*${p+=1}.* ${prefix}joox _song_


*STICKER*
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker

*EDUCATION*
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_

*SEARCHING*
*${p+=1}.* ${prefix}playstore _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ytsearch _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_

*PRIMBON*
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_

*RANDOM*
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic

*TEXTMAKER*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_

*IMAGEMAKER*
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_

*OTHER*
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar

*INFO*
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn

*OWNER*
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
`
}

const gmenu = (prefix) => {
	let p = 0
	return `*GROUP ONLY*
*${p+=1}.* ${prefix}group _open|close_
*${p+=1}.* ${prefix}antilink _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}welcome _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}setgroupicon _replyImage_
*${p+=1}.* ${prefix}setgroupname _text_
*${p+=1}.* ${prefix}setgroupdesc _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}promote _@tag_
*${p+=1}.* ${prefix}demote _@tag_
*${p+=1}.* ${prefix}kick _@tag_
*${p+=1}.* ${prefix}add _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave`
}

const dwmenu = (prefix) => {
	let p = 0
	return `*DOWNLOADER* 
*${p+=1}.* ${prefix}play _query_
*${p+=1}.* ${prefix}playvid _query_
*${p+=1}.* ${prefix}youtubedl _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_
*${p+=1}.* ${prefix}igstory _username_
*${p+=1}.* ${prefix}ig _link_
*${p+=1}.* ${prefix}tiktok _link_
*${p+=1}.* ${prefix}joox _song_`
}

const smenu = (prefix) => {
	let p = 0
	return `*STICKER*
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker`
}

const emenu = (prefix) => {
	let p = 0
	return `*EDUCATION*
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_`
}

const ffid = (prefix) => {
	let p = 0
	return `*FREE FIRE*

*⫿⸙᩠ 5💎 : 828*
*⫿⸙᩠ 20💎 : 2.760*
*⫿⸙᩠ 50💎 : 6.624*
*⫿⸙᩠ 70💎 : 9.108*
*⫿⸙᩠ 100💎 : 13.248*
*⫿⸙᩠ 140💎 : 18.216*
*⫿⸙᩠ 210💎 : 27.324*
*⫿⸙᩠ 280💎 : 36.432*
*⫿⸙᩠ 355💎 : 45.540*
*⫿⸙᩠ 425💎 : 54.648*
*⫿⸙᩠ 500💎 : 64.584*
*⫿⸙᩠ 565💎 : 72.864*
*⫿⸙᩠ 635💎 : 81.972*
*⫿⸙᩠ 720💎 : 91.080*
*⫿⸙᩠ 760💎 : 97.704*
*⫿⸙᩠ 860💎 : 109.296*
*⫿⸙᩠ 1000💎 : 127.512*
*⫿⸙᩠ 1075💎 : 136.620*
*⫿⸙᩠ 1215💎 : 154.836*
*⫿⸙᩠ 1440💎 : 182.160*
*⫿⸙᩠ 1795💎 : 227.700*
*⫿⸙᩠ 2000💎 : 248.400*
*⫿⸙᩠ 4000💎 : 496.800*
*⫿⸙᩠ 6000💎 : 745.200*
*⫿⸙᩠ 7290💎 : 910.800*

*❀ꦿ member mingguan : 27.600*
*❀ꦿ member bulanan : 110.400*

NOMINAL LAIN TANYA ADMIN`
}

const ffvilog = (prefix) => {
	let p = 0
	return `*FREE FIRE VILOG*

> 100 DM = Rp 12.250
> 200 DM = Rp 24.500
> 310 DM = Rp 36.750
> 410 DM = Rp 49.000
> 520 DM = Rp 61.250
> 620 DM = Rp 73.500
> 720 DM = Rp 85.750
> 830 DM = Rp 98.000
> 930 DM = Rp 110.250
> 1.060 DM = Rp 122.500
> 2.180 DM = Rp 245.000
> 5.600 DM = Rp 612.000

#PAKET MEMBERSHIP

> Mingguan = Rp 24.500
> Bulanan = Rp 98.000`
}

const mlid = (prefix) => {
	let p = 0
   return `*MOBILE LEGENDS*
   
86 💎 = 18.700
172 💎 = 37.200
257 💎 = 56.900
344 💎 = 74.000
429 💎 = 93.100
514 💎 = 112.900
706 💎 = 148.200
878 💎 = 184.900
1050 💎 = 221.900
1412 💎 = 295.900
2195 💎 = 439.075
2901 💎 = 586.250
3688 💎 = 729.100
4394 💎 = 877.200
5532 💎 = 1.095.900
6238 💎 = 1.242.100
7727 💎 = 1.533.000
9288 💎 = 1.824.000
12976 💎 = 2.552.300
18576 💎 = 3.647.260

Starlight Member = 123.900
Twilight Pass = 123.900`
}

const pubgid = (prefix) => {
	let p = 0
	return `*PUBG SERVER INDO

${p+=1} > 16 UC = Rp 2.900
${p+=1} > 26 UC = Rp 4.700
${p+=1} > 53 UC = Rp 9.200
${p+=1} > 105 UC = Rp 18.200
${p+=1} > 131 UC = Rp 22.200
${p+=1} > 263 UC = Rp 45.200
${p+=1} > 530 UC = Rp 88.200
${p+=1} > 825 UC = Rp 132.200
${p+=1} > 1.100 UC = Rp 177.200`
}

const srcmenu = (prefix) => {
	let p = 0
	return `*SEARCHING*
*${p+=1}.* ${prefix}playstore _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ytsearch _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_`
}

const pmenu = (prefix) => {
	let p = 0
	return `*PRIMBON*
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_`
}

const rnmenu = (prefix) => {
	let p = 0
	return `*RANDOM*
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic`
}

const txmaker = (prefix) => {
	let p = 0
	return `*TEXTMAKER*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_`
}

const imgmaker = (prefix) => {
	let p = 0
	return `*IMAGEMAKER*
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_`
}

const othmenu = (prefix) => {
	let p = 0
	return `*OTHER*
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar`
}

const info = (prefix) => {
	let p = 0
	return `*INFO*
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn`
}

const ownerm = (prefix) => {
	let p = 0
	return `*OWNER*
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit`
}

const ingfo = `
__________________________________
*Notes :*
*- Jangan Pernah Menelpon Bot Dan Owner Jika Menelpon Akan di block Otomatis dan TIdak ada Kata Unblock ‼️*
*- Jika Menemukan Bug, Error, Saran Fitur Harap Segera Lapor Ke Owner*
*- Bot Ini masih dalam Tahap pengembangan baru bikin:v*
*- Prefix bisa di set sesuai keinginan sendiri*
*- Bot Ini Dilengkapi Anti Spam, anda bisa menggunakan command berikutnya setelah prosess sebelumnya berakhir*
			
*Group : Coming soon*
__________________________________
*🔖 || IG*
@cyzchan_store
*FOLLOW YA KAK^_^*

`


const mess = {
             wait: 'Tunggu sebentar yaa',
			 group: 'this command can only be used in groups!',
			 admin: 'only be used by admin!',
			 botAdmin: 'this command can only be used if the bot is an admin groups',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'This command is only for the owner!'
}

module.exports = {
	listmenu,
	gmenu,
	dwmenu,
	smenu,
	emenu,
	srcmenu,
	pmenu,
	rnmenu,
	txmaker,
	imgmaker,
	othmenu,
	info,
	ownerm,
	ingfo,
	mess,
	pubgid,
	mlid,
	ffid,
	ffvilog
}
