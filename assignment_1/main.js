function convertTemperature() {
  // Get the Celsius value from the input
  const celsius = document.getElementById('celsius').value;

  // Convert to Fahrenheit
  const fahrenheit = (celsius * 9) / 5 + 32;
  // Convert to Kelvin
  const kelvin = parseFloat(celsius) + 273.15;

  // Display the results
  document.getElementById('fahrenheit').textContent =
    'Fahrenheit: ' + fahrenheit.toFixed(2);
  document.getElementById('kelvin').textContent =
    'Kelvin: ' + kelvin.toFixed(2);
}
