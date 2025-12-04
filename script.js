const webhookUrl = 'https://discord.com/api/webhooks/1444881923909619712/rrsDVZbrvQxBYnNPrsWP2wLBpAOxZxvi4QTwDIoJyof_bZWP-TrO_so9z0ehii2qSIUP';

function sendMessage() {
    const message = document.getElementById('message').value;
    const responseElement = document.getElementById('response');
    
    if (!message) {
        responseElement.innerText = "Please enter a message.";
        responseElement.style.color = "red";
        return;
    }
    
    const data = {
        content: message
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        responseElement.innerText = "Message sent successfully!";
        responseElement.style.color = "green";
        document.getElementById('message').value = '';  // Clear the input field
    })
    .catch(error => {
        responseElement.innerText = "An error occurred. Please try again.";
        responseElement.style.color = "red";
        console.error("Error:", error);
    });
}
