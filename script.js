const cocktails = {
    "Negroni": { gin: 0.3, campari: 0.3, vermouth: 0.3, water: 0.1 },
    "Gin Martini": { gin: 0.7, vermouth: 0.15, water: 0.15 },
    "Daiquiri": { rum: 1.5, lime: 1, sugar: 0.5, water: 0.5 },
    // Add more cocktails and their ratios here
  };

const cocktailQuotes = {
    "Negroni": "The Negroni. One part gin, one part Campari, one part sweet vermouth. Build it over ice, stir it gently, and garnish with orange peel. It is a perfect balance of sweet and bitter, and a great way to start an evening.",
    "Gin Martini": "I like to have a martini, two at the very most — After three I'm under the table, After four, I'm under my host",
    "Daiquiri": "My favorite drink in the world... The sweetest and simplest drink I know of.",  // Ernest Hemingway, A Farewell to Arms
    // Add more quotes for other cocktails
  };
  
function calculateRatios() {
    const recipe = document.getElementById("cocktail").value;
    const volume = parseFloat(document.getElementById("volume").value);

    if (!recipe || !volume) {
      alert("Please select a cocktail and enter a volume.");
      return;
    }
  
    const ratios = cocktails[recipe];
    const totalRatio = Object.values(ratios).reduce((a, b) => a + b, 0);
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    for (const ingredient in ratios) {
      const ingredientRatio = ratios[ingredient];
      const ingredientVolume = (volume * ingredientRatio) / totalRatio;
      const result = document.createElement("p");
      result.textContent = `${ingredient}: ${ingredientVolume.toFixed(2)}ml`;
      resultsDiv.appendChild(result);
    }
    const quoteDiv = document.getElementById("quote"); // Add a new element for the quote
  
    // Clear any previous quote
    quoteDiv.innerHTML = "";
  
    // Retrieve the quote based on the recipe (if it exists)
    const quote = cocktailQuotes[recipe];
    if (quote) {
      const quoteParagraph = document.createElement("p");
      quoteParagraph.textContent = quote;
      quoteDiv.appendChild(quoteParagraph);
    }
}