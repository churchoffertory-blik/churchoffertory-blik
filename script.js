const copyBtn = document.getElementById("copyBtn");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

copyBtn.addEventListener("click", async () => {
    const number = phone.textContent;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(number);
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = number;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        }

        message.textContent = "✅ Phone number copied!";
    } catch (error) {
        message.textContent = "❌ Copy failed.";
    }

    setTimeout(() => {
        message.textContent = "";
    }, 2000);
});