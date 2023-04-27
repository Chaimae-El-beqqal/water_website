function calculate() {
    const quantity = document.getElementById("quantity").value;
  const unit = document.getElementById("unit").value;
  
  // Convert the quantity to milliliters
  let mlQuantity;
  if (unit === "l") {
    mlQuantity = quantity * 1000;
  } else {
    mlQuantity = quantity;
  }
    
    // Calculate the wasted quantity
    const perHour = mlQuantity;
    const perDay = mlQuantity * 24;
    const perWeek = mlQuantity * 24 * 7;
    const perMonth = mlQuantity * 24 * 30;
    const perYear = mlQuantity * 24 * 365;
    
    // Calculate the number of plants and animals that can be watered
    const plants = Math.floor(mlQuantity / 200);
    const animals = Math.floor(mlQuantity / 800);
    
    // Display the results
    const results = document.getElementById("results");
    results.innerHTML = `
     <p>Vous gaspillez :</p>
    <p>En 1 heure : <span>${perHour} ml</span>  d'eau.</p>
    <p>En 1 jour :  <span>${perDay} ml</span>  d'eau.</p>
    <p>En 1 semaine :  <span>${perWeek} ml</span>  d'eau.</p>
    <p>En 1 mois : <span>${perMonth} ml</span>  d'eau.</p>
    <p>En 1 an : <span>${perYear} ml</span>  d'eau.</p>
    <p>Vous pourriez arroser <span>${plants}</span> plantes </p>
    <p>NB : Par exemple, une petite plante d'intérieur peut nécessiter moins de 200 millilitres d'eau par jour</p>
    `;
  }
  