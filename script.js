const cocktails = {
    "Negroni": { gin: 0.3, campari: 0.3, vermouth: 0.3, water: 0.1 },
    "Gin Martini": { gin: 0.7, vermouth: 0.15, water: 0.15 },
    "Daiquiri": { rum: 1.5, lime: 1, sugar: 0.5, water: 0.5 },
    // Add more cocktails and their ratios here
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
  }