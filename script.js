document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("word-container");
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");

    // Example word list
    const words = [
	{ word: "haze", definition: "vague or indistinct." },
	{ word: "hinterland", definition: "the remote areas beyond the coast and cities" },	        	    
        { word: "vestige", definition: "powerful image of something fading, like ephemeral" },
        { word: "ephemeral", definition: "lasting for a very short time - fleeting." },
	{ word: "luminous", definition: "bright and shining - especially in the dark." },
	{ word: "elixir", definition: "a magical or medicinal potion." },
	{ word: "nebulous", definition: "cloudy -- floating ideas" },
	{ word: "zonked", definition: "extremely tired or exhausted" },
	{ word: "nerfed", definition: "to be made weaker or less powerful, usually on purpose" },
	{ word: "Vox populi", definition: "voice of the people" }, 
	{ word: "vanguard", definition: "a group of people leading the way in new developments or ideas" }, 
	{ word: "totem", definition: "a natural object, animal, or plant that is spiritually significant" }, 
	{ word: "rigamarole", definition: "overly complicated - a bunch of unnecessary steps" },
	{ word: "Quid pro quo", definition: "this for that" },
	{ word: "Proxy", definition: "something used to represent something else indirectly" },
	{ word: "Pro forma", definition: "done for the sake of complying with requirements" },
	{ word: "Nominal", definition: "not adjusted for inflation - can also mean very small amount" },
	{ word: "Laissez-faire", definition: "let it be -- can also mean a philosophy of minimal government intervention" },
	{ word: "Gambit", definition: "strategic move or action made to gain an advantage" },
	{ word: "Bespoke", definition: "custom made -- tailored to specific requirements" },
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
