let isLoggedIn = false;
let loggedInUsername = ""; // Added variable to store the username

const reminders = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Replace "your_username" and "your_password" with actual credentials
    if (username === "" && password === "") {
        isLoggedIn = true;
        loggedInUsername = username; // Store the logged-in username
        document.getElementById("login-error").textContent = "";
        document.getElementById("login-page").style.display = "none";
        document.getElementById("home-page").style.display = "block";
    } else {
        document.getElementById("login-error").textContent = "Incorrect username or password. Try again.";
    }
}


function logout() {
    isLoggedIn = false;
    document.getElementById("home-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
}

function showSetReminder() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("set-reminder-page").style.display = "block";
}

function hideSetReminder() {
    document.getElementById("set-reminder-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}
function showModifyReminder() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("Modify-reminder-page").style.display = "block";
}

function hideModifyReminder() {
    document.getElementById("Modify-reminder-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}
function showDisableReminder() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("Disable-reminder-page").style.display = "block";
    displayReminders();
}

function hideDisableReminder() {
    document.getElementById("Disable-reminder-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}
function showDeleteReminder() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("Delete-reminder-page").style.display = "block";
    displayReminders();
}
function hideDeleteReminder() {
    document.getElementById("Delete-reminder-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}
function showEnableReminder() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("Enable-reminder-page").style.display = "block";
    displayReminders();
}
function hideEnableReminder() {
    document.getElementById("Enable-reminder-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}
function showViewReminder() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("View-reminder-page").style.display = "block";
    displayReminders();
}
function hideViewReminder() {
    document.getElementById("View-reminder-page").style.display = "none";
    document.getElementById("home-page").style.display = "block";
}

function addReminder() {
    const reminderText = document.getElementById("reminder-text").value;
    if (reminderText.trim() !== "") {
        reminders.push(reminderText);
        document.getElementById("reminder-text").value = "";
        displayReminders();
    }
}

function displayReminders() {
    const reminderList = document.getElementById("reminder-list");
    reminderList.innerHTML = "";
    reminders.forEach((reminder, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${reminder}`;
        reminderList.appendChild(li);
    });
}

    const currentDate = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('dateMessage').textContent = `Today is ${formattedDate}`;

    document.addEventListener("DOMContentLoaded", function () {
        // Fetch user's name from the server using an API or any other method
        // Replace this with your actual method of fetching the user's name
        fetchUserData()
            .then(function (data) {
                // Assuming the server returns the user's name in 'data.name'
                const usernameElement = document.getElementById("username");
                usernameElement.textContent = data.name;
            })
            .catch(function (error) {
                console.error("Error fetching user data: " + error);
            });
    });
    
    // Function to fetch user data from the server
    function fetchUserData() {
        // Replace this with your actual API endpoint or data retrieval logic
        return fetch("getUserInfo.php")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Assuming the response is in JSON format
            });
    }
        // Sample reminder data (name and description)
        const reminders1 = [
            { name: "Meeting with Client", description: "Discuss project progress with the client." },
            { name: "Pay Bills", description: "Pay electricity, water, and internet bills." },
            { name: "Grocery Shopping", description: "Buy groceries for the week." },
            { name: "Doctor's Appointment", description: "Visit the dentist for a checkup." },
            { name: "Project Deadline", description: "Complete the project report by Friday." }
        ];

        // Function to populate the dropdown with reminders and display description
        function populateDropdown() {
            const dropdown = document.getElementById("reminderDropdown");
            const descriptionText = document.getElementById("descriptionText");

            // Loop through the reminders and create an option element for each
            for (const reminder of reminders) {
                const option = document.createElement("option");
                option.value = reminder.name;
                option.textContent = `${reminder.name} - ${reminder.description.substring(0, 30)}...`;
                dropdown.appendChild(option);

                // Add a data attribute to store the full description
                option.dataset.description = reminder.description;
            }

            // Event listener to update the displayed description when an option is selected
            dropdown.addEventListener("change", function () {
                const selectedOption = dropdown.options[dropdown.selectedIndex];
                const selectedDescription = selectedOption.dataset.description;
                descriptionText.textContent = selectedDescription;
            });
        }

        // Call the populateDropdown function to fill the dropdown with reminders
        populateDropdown();


        
