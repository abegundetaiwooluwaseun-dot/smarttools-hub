
function generateCaption() {
    const captions = [
        "Small steps today, big results tomorrow! 🚀",
        "Creating memories and enjoying every moment. ✨",
        "Dream big, work hard, and stay consistent. 💯",
        "Your next chapter can be your best one yet! 🌟",
        "Good energy, fresh ideas, and bigger goals. 🔥"
    ];

    const result = captions[
        Math.floor(Math.random() * captions.length)
    ];

    document.getElementById("caption-result").textContent = result;
}

function generateBusinessName() {
    const firstWords = [
        "Smart", "Bright", "Nova", "Prime", "Golden",
        "Future", "Urban", "Royal", "Swift", "Creative"
    ];

    const secondWords = [
        "Hub", "Works", "Solutions", "Spot", "World",
        "Labs", "Connect", "Vision", "Edge", "Studio"
    ];

    const first = firstWords[
        Math.floor(Math.random() * firstWords.length)
    ];

    const second = secondWords[
        Math.floor(Math.random() * secondWords.length)
    ];

    document.getElementById("business-result").textContent =
        first + " " + second;
}

function generateQuote() {
    const quotes = [
        "Consistency beats motivation when motivation fades.",
        "Every expert was once a beginner.",
        "Progress is progress, no matter how small.",
        "Your future grows from what you do today.",
        "Learn something new and keep moving forward."
    ];

    const quote = quotes[
        Math.floor(Math.random() * quotes.length)
    ];

    document.getElementById("quote-result").textContent = quote;
}