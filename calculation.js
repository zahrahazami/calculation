document.getElementById('fsplForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const distance = parseFloat(document.getElementById('distance').value);
  const frequency = parseFloat(document.getElementById('frequency').value);
  const c = 3 * Math.pow(10, 8); // Speed of light

  // Perform FSPL calculation
  const fspl = 20 * Math.log10(distance) + 20 * Math.log10(frequency) + 20 * Math.log10(4 * Math.PI / c);

  // Display the result
  document.getElementById('result').innerHTML = `FSPL: ${fspl.toFixed(2)} dB`;
});
