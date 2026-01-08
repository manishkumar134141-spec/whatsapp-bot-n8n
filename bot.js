const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

// ✅ UPDATED: Production URL (No "-test")
const WEBHOOK_URL = 'http://localhost:5555/webhook/chat'; 

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        // Keeps browser visible to prevent "Couldn't link device" errors
        headless: false, 
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    // Fixes the "hanging" issue after scanning
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    }
});

// 1. GENERATE QR CODE
client.on('qr', (qr) => {
    console.log('--- QR RECEIVED ---');
    console.log('Scan the QR below (or in the pop-up browser window):');
    qrcode.generate(qr, { small: true });
});

// 2. CONNECTION SUCCESSFUL
client.on('ready', () => {
    console.log('✅ WhatsApp Bot is ready and connected!');
});

// 3. LISTEN FOR MESSAGES
client.on('message', async (msg) => {
    // Ignore status updates
    if (msg.from.includes('status')) return;

    console.log(`📩 Message from ${msg.from}: ${msg.body}`);

    try {
        // Send to n8n
        const response = await axios.post(WEBHOOK_URL, {
            message: msg.body,
            sender: msg.from,
            chat_id: msg.from
        });

        // Get Reply from n8n
        if (response.data && response.data.reply) {
            msg.reply(response.data.reply);
            console.log(`🤖 Replied: ${response.data.reply}`);
        }
    } catch (error) {
        console.error('❌ Error connecting to n8n:', error.message);
    }
});

console.log('Initializing Client...');
client.initialize();