document.addEventListener("DOMContentLoaded", function() {
    // Sample data for AP CS class
    const apcsUsers = [
        { name: "Aadi Shah", points: 300, classPeriod: 6 },
        { name: "Aaron Read", points: 200, classPeriod: 6 },
        { name: "Alex North", points: 300, classPeriod: 7 },
        { name: "Alex Ko", points: 300, classPeriod: 6 },
        { name: "Alex Huang", points: 100, classPeriod: 6 },
        { name: "Amit Yosefi", points: 100, classPeriod: 4 },
        { name: "Amy Zednick", points: 100, classPeriod: 5 },
        { name: "Arunima Deval", points: 100, classPeriod: 7 },
        { name: "Calder Davis", points: 100, classPeriod: 7 },
        { name: "Daniel Reinholdtsen", points: 100, classPeriod: 6 },
        { name: "Daniel Major", points: 0, classPeriod: 5 },
        { name: "Eshaan Chowdhry", points: 300, classPeriod: 5 },
        { name: "Evenne Burgess", points: 100, classPeriod: 6 },
        { name: "Ishan Awasthi", points: 200, classPeriod: 4 },
        { name: "Jaylon Paulson", points: 200, classPeriod: 4 },
        { name: "Jerusha Arun", points: 200, classPeriod: 4 },
        { name: "Kara Ko", points: 300, classPeriod: 6 },
        { name: "Kimiya Shafaat", points: 100, classPeriod: 4 },
        { name: "Logan Lighthall", points: 100, classPeriod: 7 },
        { name: "Lyle Whittlinger", points: 100, classPeriod: 7 },
        { name: "Meri Galstyan", points: 300, classPeriod: 6 },
        { name: "Nate Pickering", points: 100, classPeriod: 6 },
        { name: "Sewit Deresse", points: 200, classPeriod: 4 },
        { name: "Shriya Patel", points: 100, classPeriod: 7 },
        { name: "Thomas Dela Merced", points: 300, classPeriod: 4 },
        { name: "Thomas Cooper", points: 100, classPeriod: 5 },
    ];

    // Sample data for Advanced Programming class
    const advancedProgrammingUsers = [
        { name: "Hiruy Derese", points: 100, classPeriod: 2 },
        { name: "Jishnu Mehta", points: 50, classPeriod: 1 },
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
