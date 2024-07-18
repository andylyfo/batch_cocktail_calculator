const cocktails = {
    "Negroni": { gin: 0.3, campari: 0.3, vermouth_s: 0.3, water: 0.1 },
    "Gin Martini": { gin: 0.7, vermouth_d: 0.15, water: 0.15 },
    "Daiquiri": { rum_w: 1.5, lime: 1, sugar: 0.5, water: 0.5 },
    // Add more cocktails and their ratios here
  };

const ingredients = {
    "gin": "Gin",
    "campari": "Campari",
    "vermouth_s": "Sweet Vermouth",
    "vermouth_d": "Dry Vermouth",
    "water": "Filtered Water",
    "rum": "Rum",
    "rum_w": "White Rum",
    "sugar": "Simple Syrup",
    "vodka": "Vodka"
}

const cocktailQuotes = {
    "Negroni": {
        quote: "Around number three it's like... 'Where'd my pants go? And who the hell are you?'",
        author: "Anthony Bourdain" // Or another relevant source
    },
    "Gin Martini": {
        quote: "I like to have a martini, two at the very most—after three I'm under the table, after four, I'm under my host",
        author: "Dorothy Parker"
    },
    "Daiquiri": {
        quote: "My favorite drink in the world... The sweetest and simplest drink I know of.",
        author: "Ernest Hemingway, A Farewell to Arms"
    }}

const cocktailServing = {
    "Negroni": {
        serve: "In a squat tumbler. Over large cubes of Ice.",
        garnish: "A thick slice of orange."
    },
    "Gin Martini": {
        serve: "In a Martini Glass.",
        garnish: "An Olive."
    },
    "Daiquiri": {
        serve: "In a Coupe Glass",
        garnish: "A lime wedge."
    }}


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
    const quoteDiv = document.getElementById("quote");
    quoteDiv.innerHTML = ""; // Clear previous quote
    const servingDiv = document.getElementById("serving");
    servingDiv.innerHTML = ""; // Clear previous quote
  
    for (const ingredient in ratios) {
      const ingredientRatio = ratios[ingredient];
      const ingredientVolume = (volume * ingredientRatio) / totalRatio;
      const result = document.createElement("p");
      result.textContent = `${ingredient}: ${ingredientVolume.toFixed(2)}ml`;
      resultsDiv.appendChild(result);
    }

  



    const quote = cocktailQuotes[recipe];
    if (quote) {
      const quoteParagraph = document.createElement("p");
  
      // Create a span element for the quote itself (bold and in quotations)
      const quoteObject = cocktailQuotes[recipe];
      if (quoteObject) {
        const quoteParagraph = document.createElement("p");
    
        const quoteSpan = document.createElement("span");
        quoteSpan.classList.add("quote-text");
        quoteSpan.textContent = `"${quoteObject.quote}"`;
    
        const authorSpan = document.createElement("span");
        authorSpan.classList.add("quote-author");
        authorSpan.textContent = ` - ${quoteObject.author}`;
    
        quoteParagraph.appendChild(quoteSpan);
        quoteParagraph.appendChild(authorSpan);
        quoteDiv.appendChild(quoteParagraph);}
    }

    const serving = cocktailServing[recipe];
    if (serving) {
      const servingParagraph = document.createElement("p");
  
      // Create a span element for the quote itself (bold and in quotations)
      const servingObject = cocktailServing[recipe];
      if (servingObject) {
        const servingParagraph = document.createElement("p");
    
        const serveSpan = document.createElement("span");
        serveSpan.classList.add("serving-serve");
        serveSpan.textContent = `Serve: ${servingObject.serve} `;
    
        const garnishSpan = document.createElement("span");
        garnishSpan.classList.add("serving-garnish");
        garnishSpan.textContent = ` Garnish: ${servingObject.garnish}`;
    
        servingParagraph.appendChild(serveSpan);
        servingParagraph.appendChild(garnishSpan);
        servingDiv.appendChild(servingParagraph);}
    }
}