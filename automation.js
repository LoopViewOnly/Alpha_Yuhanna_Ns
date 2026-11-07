// Function to fetch live player stats automatically
async function fetchMessiLiveStats() {
    try {
        // Example using a sports API endpoint (replace with your active API provider endpoint & key)
        // For demonstration, we target his baseline stats and update dynamically if the API responds successfully.
        const response = await fetch('https://v3.football.api-sports.io/players?id=154&season=2026', {
            method: 'GET',
            headers: {
                'x-apisports-key': 'YOUR_API_KEY_HERE' // Get a free key from api-sports.io
            }
        });
        
        const data = await response.json();
        
        if (data && data.response && data.response.length > 0) {
            const playerStats = data.response[0].statistics[0];
            
            // Extract latest goals & assists from the API response
            const liveGoals = playerStats.goals.total || 838;
            const liveAssists = playerStats.goals.assists || 374;
            
            // Update the data-target attributes dynamically
            document.querySelector('[data-target="838"]').setAttribute('data-target', liveGoals);
            document.querySelector('[data-target="374"]').setAttribute('data-target', liveAssists);
        }
    } catch (error) {
        console.log("Using cached/baseline legendary stats offline.", error);
    }
}

// Trigger live update check on page load
fetchMessiLiveStats();