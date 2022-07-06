let handler = async m => m.reply(`
            .✵.GRUB HUBOO.✵.

            https://chat.whatsapp.com/IwctkX5hjVm32U1I8hMOAs
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler