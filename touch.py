from flask import Flask, render_template, request 
import requests 
  
app = Flask(__name__) 


ratios = {
    "NEGRONI": {"GIN": 0.3, "SWEET VERMOUTH": 0.3, "CAMPARI": 0.3, "WATER": 0.1},
    "VODKA MARTINI": {"VODKA": 0.75, "DRY VERMOUTH": 0.15, "WATER": 0.1},
    "GIN MARTINI": {"GIN": 0.75, "DRY VERMOUTH": 0.15, "WATER": 0.1}
}
  
  
@app.route("/", methods=["GET", "POST"])
def cocktail_scaler():
  if request.method == "POST":
    try:
      cocktail_name = request.form["cocktail_name"]
      desired_volume = float(request.form["desired_volume"])
      print(f"Selected cocktail: {cocktail_name}")
      print(f"Desired volume: {desired_volume}")

      # Check for valid input
      if cocktail_name not in ratios or desired_volume <= 0:
        error_message = "Invalid cocktail selection or volume. Please try again."
        return render_template("index.html", error_message=error_message)

      # Get recipe for chosen cocktail
      recipe = ratios[cocktail_name]
      print(recipe)

      # Scale ingredient amounts based on desired volume
      scaled_ingredients = {
          ingredient: volume * desired_volume  # Assuming volumes are in ml
          for ingredient, volume in recipe.items()
          if volume is not None  # Exclude non-liquid ingredients
      }
      print(scaled_ingredients)

      return render_template(
          "index.html",
          cocktail_name=cocktail_name,
          desired_volume=desired_volume,
          scaled_ingredients=scaled_ingredients,
      )
    except Exception as e:  # Handle other unexpected exceptions
      print(f"An error occurred: {e}")
      error_message = "An error occurred. Please check your input and try again."
      return render_template("index.html", error_message=error_message)

  else:
    # Display initial form
    return render_template("index.html", cocktail_names=ratios.keys())

if __name__ == "__main__":
  app.run(debug=True)