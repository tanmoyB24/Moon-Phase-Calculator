<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Magnitude Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20px;
        }
        input {
            margin: 10px;
            padding: 5px;
        }
        button {
            padding: 10px;
            font-size: 16px;
        }
        #result {
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Star Magnitude Calculator</h1>
    <label for="luminosity">Star Luminosity (in Solar Units):</label>
    <input type="number" id="luminosity" step="0.01" required>
    <br>
    <label for="distance">Distance (in Parsecs):</label>
    <input type="number" id="distance" step="0.01" required>
    <br>
    <button id="calculateButton">Calculate Magnitude</button>
    <div id="result"></div>

    <script>
        // Function to calculate the apparent magnitude of a star
        function calculateMagnitude(luminosity, distance) {
            const luminositySun = 1; // Solar luminosity in solar units
            const distanceModulus = 5 * Math.log10(distance) - 5;
            const absoluteMagnitude = -2.5 * Math.log10(luminosity / luminositySun);
            const apparentMagnitude = absoluteMagnitude + distanceModulus;
            return apparentMagnitude.toFixed(2);
        }

        // Function to update the result display
        function updateResult() {
            const luminosity = parseFloat(document.getElementById('luminosity').value);
            const distance = parseFloat(document.getElementById('distance').value);

            if (!isNaN(luminosity) && !isNaN(distance) && luminosity > 0 && distance > 0) {
                const magnitude = calculateMagnitude(luminosity, distance);
                document.getElementById('result').innerText = `Apparent Magnitude: ${magnitude}`;
            } else {
                document.getElementById('result').innerText = 'Please enter valid values.';
            }
        }

        document.getElementById('calculateButton').addEventListener('click', updateResult);
    </script>
</body>
</html>
