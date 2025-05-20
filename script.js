let championMap = {}; // season → driver

// Load champions from API
async function loadChampions() {
  try {
    const response = await fetch('https://ergast.com/api/f1/driverStandings/1.json?limit=1000');
    const data = await response.json();
    const standings = data.MRData.StandingsTable.StandingsLists;

    standings.forEach(entry => {
      const year = parseInt(entry.season);
      if (year >= 1950 && year <= 1974) {
        const driver = entry.DriverStandings[0].Driver;
        const name = `${driver.givenName} ${driver.familyName}`;
        championMap[year] = name;
      }
    });
  } catch (err) {
    console.error("Error fetching champion data:", err);
  }
}

// Check guess and update table
function checkGuess(nameGuess) {
  nameGuess = nameGuess.trim().toLowerCase();
  let found = false;

  for (let season in championMap) {
    const correctName = championMap[season];
    if (correctName.toLowerCase() === nameGuess) {
      // Update matching row(s)
      const rows = document.querySelectorAll("table tbody tr");
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length && cells[0].textContent.trim() === season) {
          cells[1].textContent = correctName;
          found = true;
        }
      });
    }
  }

  if (!found) {
    alert("Incorrect guess. Try again!");
  }
}

// Listen for form submit
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("message");
  const guess = input.value;
  checkGuess(guess);
  input.value = "";
});

// Load data on start
document.addEventListener("DOMContentLoaded", loadChampions);
