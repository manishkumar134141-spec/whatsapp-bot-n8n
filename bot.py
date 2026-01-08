import requests

# 1. Use your ngrok URL if testing from outside, or localhost if testing on same machine
# REPLACE THIS with your actual Webhook URL from Step 2
url = "http://localhost:5555/webhook-test/chat"

# 2. The data payload (matches what we set up in Step 3)
payload = {
    "message": "Hello, who created you?",
    "sender": "Manish",
    "chat_id": "12345"
}

# 3. Send the request
try:
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        print("Bot Reply:", response.json()['reply'])
    else:
        print(f"Error {response.status_code}: {response.text}")
        
except Exception as e:
    print(f"Connection Failed: {e}")