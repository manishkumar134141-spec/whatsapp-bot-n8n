# 🤖 WhatsApp Bot (n8n Integration)

A custom WhatsApp bot built using `whatsapp-web.js` that integrates with n8n workflows. It automates responses by connecting your WhatsApp Client to an external automation server.

## 🚀 Features
- **Automated Replies:** Listens for incoming messages and triggers n8n workflows.
- **Node.js Core:** Built on `whatsapp-web.js` for reliable WhatsApp Web automation.
- **Python Support:** Includes Python scripts (`bot.py`) for additional processing logic.

## 🛠️ Tech Stack
- **Node.js** (Runtime)
- **whatsapp-web.js** (Library)
- **n8n** (Workflow Automation)
- **Docker** (Containerization)
- **Python** (Auxiliary Scripts)

## 📋 Prerequisites
Before running this project, ensure you have the following installed:
- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** (Required to run the environment locally)
- Node.js (v18 or higher recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/manishkumar134141-spec/whatsapp-bot-n8n.git](https://github.com/manishkumar134141-spec/whatsapp-bot-n8n.git)
   cd whatsapp-bot-n8n

```

2. **Install Dependencies**
```bash
npm install

```


3. **Start Docker**
Make sure your Docker Desktop is running in the background.
4. **Run the Bot**
```bash
node bot.js

```


5. **Scan QR Code**
The terminal will generate a QR code. Scan it with your WhatsApp mobile app to log in.

## ⚠️ Notes

* The `.wwebjs_auth` and `node_modules` folders are git-ignored to keep the repo clean and secure.
* Ensure your n8n webhook URL is correctly configured in `bot.js`.
