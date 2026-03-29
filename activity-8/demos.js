// Activity 8: Asynchronous JavaScript Demos
// This file demos async concepts that will be used in scripts.js

console.log("== Activity 8: Quote of the Day Generator ==");

// Part A: Asynchronous JavaScript Demos
console.log("\n== ASYNCHRONOUS JAVASCRIPT DEMOS ==");

// Demonstrate setTimeout
console.log("Starting setTimeout demos...");
console.log("1. This logs immediately");

setTimeout(() => {
    console.log("3. This logs after 1 second (setTimeout)");
}, 1000);

console.log("2. This also logs immdiately (before setTimeout callback");

// Demonstrate the event loop
console.log("\nEvent loop demo:");
console.log("A. Synchronous code");

setTimeout(() => {
    console.log("C. Asynchronous callback (0ms timeout)");
}, 0);

console.log("B. More synchronous code");

// Promise demo
console.log("\nPromise demo:");

const simplePromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.3; // 70% success rate
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 500);
});

// Handling promise with .then/.catch
function demonstratePromise() {
    console.log("Demonstrating promise with .then/.catch...");

    simplePromise
        .then((result) => {
            console.log("Promise success:", result);
        })
        .catch((error) => {
            console.log("Promise error:", error);
        });
}

// Handling promise with async/await
async function demonstrateAsyncAwait() {
    console.log("Demonstrating promise with async/await...");

    try {
        const result = await simplePromise;
        console.log("Async/await success:", result);
    } catch (error) {
        console.log("Async/await error:", error);
    }
}

// Call both demos
demonstratePromise();
demonstrateAsyncAwait();

// Part B: Fetch API Introduction
console.log("\n== FETCH API INTRODUCTION ==");

// Basic fetch demo with .then/.catch
function demonstrateFetch() {
    console.log("Demonstrating basic fetch with .then/.catch...");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            console.log("Response object:", response);
            console.log("Response status:", response.status);
            console.log("Response ok:", response.ok);
            return response.json();
        })
        .then((data) => {
            console.log("JSON data:", data);
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

// Async/await version of fetch
async function demonstrateFetchAsync() {
    console.log("Demonstrating fetch with async/await...");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/2"
        );
        console.log("Async response object:", response);
        console.log("Async response status:", response.status);

        const data = await response.json();
        console.log("Async JSON data:", data);
    } catch (error) {
        console.error("Async fetch error:", error);
    }
}

// Call both demos
demonstrateFetch();
demonstrateFetchAsync();