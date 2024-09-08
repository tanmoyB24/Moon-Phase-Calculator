<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moon Phase Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #phase {
            font-size: 18px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Moon Phase Calculator</h1>
    <button id="calculateButton">Get Moon Phase</button>
    <div id="phase"></div>

    <script>
        // Function to calculate the Moon phase
        function getMoonPhase(date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            
            // Use a simple algorithm to calculate the Moon phase
            var c = 0;
            var e = 0;
            var jd = (year - 2000) * 365.25 + (month - 1) * 30.6 + day;
            var d = jd - 2451550.1;
            var p = (d - (c / 2)) / 29.53058867;
            var phase = p - Math.floor(p);
            
            if (phase < 0.03 || phase > 0.97) {
                return "New Moon";
            } else if (phase < 0.25) {
                return "First Quarter";
            } else if (phase < 0.5) {
                return "Full Moon";
            } else {
                return "Last Quarter";
            }
        }

        // Function to update the Moon phase display
        function updateMoonPhase() {
            var now = new Date();
            var phase = getMoonPhase(now);
            document.getElementById('phase').innerText = `Current Moon Phase: ${phase}`;
        }

        // Add event listener to the button
        document.getElementById('calculateButton').addEventListener('click', updateMoonPhase);
    </script>
</body>
</html>
