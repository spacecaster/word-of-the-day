document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("word-container");
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");

    // Example word list
    const words = [
        { word: "serendipity", definition: "The occurrence of events by chance in a happy or beneficial way." },
        { word: "quintessential", definition: "Representing the most perfect or typical example of a quality or class." },
        { word: "ephemeral", definition: "Lasting for a very short time." }
	{ word: "luminous", definition: "Full of or shedding light; bright or shining, especially in the dark." },
	{ word: "elixir", definition: "A magical or medicinal potion." },
	{ word: "halcyon", definition: "Denoting a period of time in the past that was idyllically happy and peaceful." },
	{ word: "aurora", definition: "The dawn or the first light of day." },
	{ word: "zephyr", definition: "A soft gentle breeze." },
	{ word: "nebulous", definition: "In the form of a cloud or haze; hazy." },
	{ word: "wistful", definition: "Having or showing a feeling of vague or regretful longing." },
	{ word: "minutia", definition: "Small, precise, or trivial details that might be overlooked in the broader picture" },
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
