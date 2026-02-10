const params = new URLSearchParams(window.location.search);
const query = params.get("q");

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const statsDiv = document.getElementById("stats");

input.value = query;

async function loadResults() {
  if (!query) return;

}

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    window.location.href = `results.html?q=${encodeURIComponent(input.value)}`;
  }
});

loadResults();
