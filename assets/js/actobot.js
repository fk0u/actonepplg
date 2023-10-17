const apiKey = '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';

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    addMessage(userInput, 'user');

    fetchOpenAIResponse(userInput)
        .then(response => {
            addMessage(response.choices[0].text, 'bot');
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
    })
    .then(response => response.json());
}

function addMessage(text, sender) {
    const chat = document.getElementById('chat');
    const message = document.createElement('div');
    message.classList.add('message-' + sender);
    message.innerHTML = text;
    chat.appendChild(message);
    document.getElementById('user-input').value = '';
}
