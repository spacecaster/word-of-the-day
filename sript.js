document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("word-container");
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");

    // Example word list
    const words = [
        { word: "serendipity", definition: "The occurrence of events by chance in a happy or beneficial way." },
        { word: "quintessential", definition: "Representing the most perfect or typical example of a quality or class." },
        { word: "ephemeral", definition: "Lasting for a very short time." }
        // Add more words as needed
    ];

    function getWordOfTheDay() {
        const date = new Date();
        const index = date.getDate() % words.length;
        return words[index];
    }

    const wordOfTheDay = getWordOfTheDay();
    wordElement.textContent = wordOfTheDay.word;
    definitionElement.textContent = wordOfTheDay.definition;
});
