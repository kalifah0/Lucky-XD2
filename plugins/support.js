/*
Project Name : THEDEVELOPER
Creator      : King Hassan ( Mr Hassan )
Repo         : https://github.com/XdKing2/MALVIN-XD
Support      : wa.me/2349139082130
*/

const config = require('../settings');
const { malvin } = require('../malvin');
const { runtime } = require('../lib/functions');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

malvin({
    pattern: "support",
    alias: ["follow", "links"],
    desc: "Display support and follow links",
    category: "main",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const uptimeFormatted = runtime(process.uptime());

        const message = `
╭─『 *THEDEVELOPER SUPPORT* 』─
│ 👤 *Developer* : Mr Hassan
│ ⚙️ *Mode*      : ${config.MODE}
│ ⏱️ *Uptime*    : ${uptimeFormatted}
│ 💠 *Prefix*    : ${config.PREFIX}
│ 🔖 *Version*   : ${config.version}
│ 🕰️ *Time*      : ${currentTime}
╰─────────────

📢 *Follow & Support THEDEVELOPER* ${readMore}

🔔 *Official WhatsApp Channel*
Https://whatsapp.com/channel/0029Vb6rSz04yltQhAycK12U

🎬 *YouTube Channel*
Https://youtube.com/@Thedeveloper

👨‍💻 *Developer Contact*
Https://wa.me/+2349139082130?text=Hi%20Hassan,%20I%20need%20support!

>💡Powered By Hassan Tech Hub
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/4itzeu.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420656466131@newsletter',
                    newsletterName: '🪀『 THEDEVELOPER 』🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Support Cmd Error:", e);
        reply(`⚠️ An error occurred:\n${e.message}`);
    }
});
