function convertTemperature() {
  const temperature = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  let result;

  if (unit === "celsius") {
    result = (temperature * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).innerHTML = `${temperature} Celsius is ${result} Fahrenheit.`;
  } else if (unit === "fahrenheit") {
    result = ((temperature - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).innerHTML = `${temperature} Fahrenheit is ${result} Celsius.`;
  }
}
