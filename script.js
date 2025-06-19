document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("word-container");
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");

    // Example word list
    const words = [
	{ word: "ambrosia", definition: "the food of the gods." },
	{ word: "haze", definition: "vague or indistinct." },
	{ word: "ashen", definition: "pale gray in color" },
	{ word: "hinterland", definition: "the remote areas beyond the coast and cities" },	    
	{ word: "elegy", definition: "a poem or song composed as a lament for the dead." },	    
        { word: "nerfed", definition: "to be made weaker or less powerful, usually on purpose" },	    
								{ word: "elegy", definition: "a poem or song composed as a lament for the dead." },	    word: "sonder", definition: "The realization that each random passerby is living a life as vivid and complex as your own." },
        { word: "vestige", definition: "powerful image of something fading, like ephemeral" },
        { word: "ephemeral", definition: "Lasting for a very short time - fleeting." },
	{ word: "luminous", definition: "Full of or shedding light; bright or shining, especially in the dark." },
	{ word: "elixir", definition: "A magical or medicinal potion." },
	{ word: "aurora", definition: "The dawn or the first light of day." },
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
