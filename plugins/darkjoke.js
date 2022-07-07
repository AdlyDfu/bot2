let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), 'Dark Jokes', Wm, 'NEXT', 'drag joles', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
