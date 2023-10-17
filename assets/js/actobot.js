// Ganti dengan kunci API OpenAI Anda
const apiKey = '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';

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    addMessage(userInput, 'user');

    fetchOpenAIResponse(userInput)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Tambahkan pernyataan ini untuk melihat respons API dalam konsol
            addMessage(data.choices[0].text, 'bot');
        })
        .catch(error => {
            console.error(error);
        });
}

function fetchOpenAIResponse(input) {
    return fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: input,
            max_tokens: 150, // Jumlah token maksimum dalam respons
        }),
    });
}

function addMessage(text, sender) {
    const chat = document.getElementById('chat');
    const message = document.createElement('div');
    message.classList.add('message-' + sender);
    message.innerHTML = text;
    chat.appendChild(message);
    document.getElementById('user-input').value = '';
}
