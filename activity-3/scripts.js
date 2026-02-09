// Activity 3: Dynamic Greeting Card

console.log("== Activity 3: Dynamic Greeting Card ==");

// DOM Selection Demo

console.log("\n== DOM SELECTION DEMO ==");

const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

console.log("Selected greeting message element:", greetingMessage);
console.log("Selected greeting image element:", greetingImage);
console.log("Selected name input element:", nameInput);

const cardContainer = document.querySelector(".card-container");
const firstButton = document.querySelector("button");

console.log("Selected card container:", cardContainer)
console.log("First button found:", firstButton);

const allButtons = document.querySelectorAll("button");

console.log("Found " + allButtons.length + " buttons", allButtons);

// Content Modification Demo

console.log("\n== CONTENT MODIFICATION DEMO ==");

console.log("Original message textContent:", greetingMessage.textContent);
console.log("Original image alt attribute:", greetingImage.getAttribute("alt"));

// Attribute Modification Demo

console.log("\n== ATTRIBUTE MODIFICATION DEMO ==");

console.log("Current image src:", greetingImage.getAttribute("src"));
console.log("Image has 'src' attribute:", greetingImage.hasAttribute("src"));

// Greeting Card Data

const greetings = {
    birthday: {
        message: "Happy Birthday!",
        image: "https://plus.unsplash.com/premium_vector-1733953260601-f77ce384a7e0?q=80&w=1104&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Birthday celebration greeting"
    },
    holiday: {
        message: "Happy Holidays!",
        image: "https://plus.unsplash.com/premium_vector-1733304871388-8558492f292e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Holiday celebration greeting"
    },
    thankYou: {
        message: "Thank You!",
        image: "https://plus.unsplash.com/premium_vector-1732815733322-37f4e583a0f2?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Thank you greeting"
    },
    welcome: {
        message: "Welcome!",
        image: "https://images.unsplash.com/vector-1763266643265-88df5c1e32ed?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Welcome greeting"
    }
};

// Dynamic Greeting Card Functions

console.log("\n== GREETING CARD FUNCTIONS ==");

function updateGreeting(type) {
    const greeting = greetings[type];

    if (greeting) {
        // Uptdate message
        greetingMessage.textContent = greeting.message;

        // Update image
        greetingImage.setAttribute("src", greeting.image);
        greetingImage.setAttribute("alt", greeting.alt);

        console.log("Updated greeting to:", type);
        console.log("Message:", greeting.message);
        console.log("Image:", greetingImage);
    } else {
        console.error("Greeting type " + type + " not found");
    }
}

function setBirthdayGreeting() {
    updateGreeting("birthday");
}

function setHolidayGreeting() {
    updateGreeting("holiday");
}

function setThankYouGreeting() {
    updateGreeting("thankYou");
}

function setRandomGreeting() {
    const types = Object.keys(greetings);
    const randomType = types[Math.floor(Math.random() * types.length)];
    updateGreeting(randomType);
    console.log(`Random greeting selected: ${randomType}`);
}

// Interactive Features

function personalizeGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a name to personalize the greeting!");
        console.log("Personalization attempted with empty name");
        return;
    }

    // Get current message and add name
    const currentMessage = greetingMessage.textContent;
    const personalizedMessage = `${currentMessage}\n\nDear ${name}!`;

    greetingMessage.innerHTML = personalizedMessage.replace("\n\n", "<br><br>");

    console.log("Personalized greeting for:", name);
    console.log("Full message:", personalizedMessage);

    // Clear input
    nameInput.value = "";
}

// Display welcome message on page load

document.getElementById("output").innerHTML =  
    "<h3>DOM Maniputlation Demo Loaded!</h3><p>Successfully selected and ready to manipulate DOM elements</p><p>Check the console for detailed demonstrations of DOM operations</p>";

console.log("Dynamic Greeting Card application loaded successfully!");