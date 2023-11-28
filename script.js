document.addEventListener("DOMContentLoaded", function() {
    // Sample data for AP CS class
    const apcsUsers = [
        { name: "Aadi Shah", points: 100, classPeriod: 6 },
        { name: "Logan Lighthall", points: 100, classPeriod: 7 },
        { name: "Calder Davis", points: 100, classPeriod: 7 },
        { name: "Alex North", points: 100, classPeriod: 7 },
        { name: "Thomas Dela Merced", points: 100, classPeriod: 4 },
        { name: "Eshaan Chowdhry", points: 100, classPeriod: 5 },
        { name: "Shriya Patel", points: 100, classPeriod: 7 },
        // { name: "James Wilson", points: 80, classPeriod: 1 },
        // { name: "Sophia Miller", points: 75, classPeriod: 2 },
        // { name: "Daniel Moore", points: 70, classPeriod: 1 },
        // { name: "Ava Taylor", points: 65, classPeriod: 2 },
    ];

    // Sample data for Advanced Programming class
    const advancedProgrammingUsers = [
        { name: "Hiruy Derese", points: 100, classPeriod: 2 },
        { name: "Jishnu Mehta", points: 50, classPeriod: 1 },
        // { name: "Ella Martinez", points: 130, classPeriod: 1 },
        // { name: "William Garcia", points: 20, classPeriod: 2 },
        // { name: "Grace Robinson", points: 110, classPeriod: 1 },
        // { name: "Liam Davis", points: 100, classPeriod: 2 },
        // { name: "Chloe Smith", points: 95, classPeriod: 1 },
        // { name: "Mason Taylor", points: 90, classPeriod: 2 },
        // { name: "Zoe Brown", points: 85, classPeriod: 1 },
        // { name: "Ethan Wilson", points: 80, classPeriod: 2 },
    ];

    let currentLeaderboard = "APCS";

    function displayLeaderboard(users) {
        // Sort users by points in descending order
        users.sort((a, b) => b.points - a.points);

        const leaderboardBody = document.getElementById("leaderboard-body");
        leaderboardBody.innerHTML = "";

        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.points}</td>
                <td>${user.classPeriod}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }

    function toggleLeaderboard(leaderboard) {
        currentLeaderboard = leaderboard;

        if (currentLeaderboard === "APCS") {
            displayLeaderboard(apcsUsers);
        } else if (currentLeaderboard === "AdvancedProgramming") {
            displayLeaderboard(advancedProgrammingUsers);
        }
    }

    // Initial display for AP CS class
    displayLeaderboard(apcsUsers);

    // Add event listeners
    document.getElementById("apcsButton").addEventListener("click", function() {
        toggleLeaderboard("APCS");
    });

    document.getElementById("advancedButton").addEventListener("click", function() {
        toggleLeaderboard("AdvancedProgramming");
    });
});
