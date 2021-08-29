const fs = require('fs')
const axios = require('axios') 
module.exports = async (jdgn, Client, client) =>{
try {
			const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
			from = jdgn.jid
			if (!dataGc[from] || !dataGc[from].welcome && !dataGc[from].leave) return
			const mdata = await client.groupMetadata(from)
			jdgn.participants.forEach(async num =>{
			if (num == client.user.jid) return
			if (jdgn.action == 'add') {
				stst = await client.getStatus(`${num.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`).catch(() => ppimg = 'https://i.ibb.co/fdDSTdq/IMG-20210727-123923.jpg')
				member = mdata.participants.length
				let pushname = client.contacts[num].vname || client.contacts[num].notify || num.split('@')[0] 
				teks = `*WELCOME IN GROUP ${mdata.subject}*\n        「 *NEW USER* 」\n\n*Nama :* ${pushname}\n*Bio :* ${stst}\n*Member :* ${member}\n\n*SEMOGA BETAH YA KAK, PESAN CACA JANGAN LUPA BACA RULES DULU YAH*\n*Description :* \n${mdata.desc}`
				axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/welcome2?name=${encodeURIComponent(pushname)}&discriminator=${encodeURIComponent(member)}&member=${encodeURIComponent(member)}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=https://i.ibb.co/x2tB0Pv/pexels-photo-1363876.jpg&apikey=s12FNA4JnafrJJN`) 
.then(res => {
Client.sendFileFromUrl(jdgn.jid, `${res.data.result}`, 'user.jpg', teks, null, {contextInfo: {"mentionedJid": Client.getMentionedJidList(teks), "stanzaId":"xxxx","participant":"0@s.whatsapp.net","quotedMessage":{"groupInviteMessage":{"groupJid":from,"inviteCode":"OKOKLAH","inviteExpiration":"0","groupName":from,"caption":`Participant Added/Join ${pushname}`}},"remoteJid":num}})
}) 
			} else if (jdgn.action == 'remove') {
				stst = await client.getStatus(`${num.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				var ppimg;
				ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`).catch(() => ppimg = 'https://i.ibb.co/fdDSTdq/IMG-20210727-123923.jpg')
				let pushname = client.contacts[num].vname || client.contacts[num].notify || num.split('@')[0] 
				member = mdata.participants.length
				teks = `*LEAVE IN GROUP ${pushname}*\n        「 *NEW USER* 」\n\n*Nama :* ${pushname}\n*Bio :* ${stst}\n*Member :* ${member}\n\n*SELAMAT TINGGAL BEBAN GROUP ^_^*`
				axios.get(`https://dapuhy-api.herokuapp.com/api/canvas/goodbye2?name=${encodeURIComponent(pushname)}&discriminator=${encodeURIComponent(member)}&member=${encodeURIComponent(member)}&gcname=${encodeURIComponent(mdata.subject)}&pp=${encodeURIComponent(ppimg)}&bg=https://i.ibb.co/x2tB0Pv/pexels-photo-1363876.jpg&apikey=s12FNA4JnafrJJN`) 
.then(res => {
Client.sendFileFromUrl(jdgn.jid, `${res.data.result}`, 'leave.jpg', teks, null, {contextInfo: {"mentionedJid": Client.getMentionedJidList(teks), "stanzaId":"xxxx","participant":"0@s.whatsapp.net","quotedMessage":{"groupInviteMessage":{"groupJid":from,"inviteCode":"OKOKLAH","inviteExpiration":"0","groupName":from,"caption":`Participant Leeave/kicked ${pushname}`}},"remoteJid":num}})
}) 
			}
			})
		} catch (e) {
			console.log(e)
		}
	}
