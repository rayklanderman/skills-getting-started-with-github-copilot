document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      // For GitHub Pages, use static demo data
      const activities = {
        "Chess Club": {
          description: "Learn strategies and compete in chess tournaments",
          schedule: "Fridays, 3:30 PM - 5:00 PM",
          max_participants: 12,
          participants: ["michael@mergington.edu", "daniel@mergington.edu"]
        },
        "Programming Class": {
          description: "Learn programming fundamentals and build software projects",
          schedule: "Tuesdays and Thursdays, 3:30 PM - 4:30 PM",
          max_participants: 20,
          participants: ["emma@mergington.edu", "sophia@mergington.edu"]
        },
        "Gym Class": {
          description: "Physical education and sports activities",
          schedule: "Mondays, Wednesdays, Fridays, 2:00 PM - 3:00 PM",
          max_participants: 30,
          participants: ["john@mergington.edu", "olivia@mergington.edu"]
        }
      };

      // Clear loading message
      activitiesList.innerHTML = "";

      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft = details.max_participants - details.participants.length;

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <p><strong>Schedule:</strong> ${details.schedule}</p>
          <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
        `;

        activitiesList.appendChild(activityCard);

        // Add option to select dropdown
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        activitySelect.appendChild(option);
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Handle signup form submission
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const activity = activitySelect.value;
    if (!activity) return;

    // For demo, just show a message
    messageDiv.classList.remove("hidden");
    messageDiv.textContent = `Signed up ${email} for ${activity}! (Demo only)`;
    setTimeout(() => messageDiv.classList.add("hidden"), 3000);
  });

  fetchActivities();
});
