document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("word-container");
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");

    // Example word list
    const words = [
	{ word: "haze", definition: "vague or indistinct." },
	{ word: "hinterland", definition: "the remote areas beyond the coast and cities" },	        	    
	{ word: "luminous", definition: "bright and shining - especially in the dark." },
	{ word: "elixir", definition: "a magical or medicinal potion." },
	{ word: "nebulous", definition: "cloudy -- floating ideas" },
	{ word: "zonked", definition: "extremely tired or exhausted" },
	{ word: "nerfed", definition: "to be made weaker or less powerful, usually on purpose" },
	{ word: "vox populi", definition: "voice of the people" }, 
	{ word: "totem", definition: "a natural object, animal, or plant that is spiritually significant" }, 
	{ word: "quid pro quo", definition: "this for that" },
	{ word: "proxy", definition: "something used to represent something else indirectly" },
	{ word: "pro forma", definition: "done for the sake of complying with requirements" },
	{ word: "nominal", definition: "not adjusted for inflation - can also mean very small amount" },
	{ word: "laissez-faire", definition: "let it be -- can also mean a philosophy of minimal government intervention" },
	{ word: "gambit", definition: "strategic move or action made to gain an advantage" },
	{ word: "bespoke", definition: "custom made -- tailored to specific requirements" },
	{ word: "counterfactual", definition: "what would have happened if the world had been different in some way. a statement, scenario, or model about an alternative reality that didn’t actually occur" },
	{ word: "conduit", definition: "a channel of conveying" },
	{ word: "corpus", definition: "a collection of written texts" },
	{ word: "du jour", definition: "-- of the day" },
	{ word: "apropro", definition: "-- e.g., Apropro of your earlier comment, revisting the map and timeline -- e.g., Her remark was perfectly apropro" },
	{ word: "bamboozle", definition: "trick - cheat - deceive - usually in a playful or sneaky way" },
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
