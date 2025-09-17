// Hello World in JavaScript
// This demonstrates basic JavaScript concepts

/**
 * Function to create a greeting message
 * @param {string} name - The name to greet (default: "World")
 * @returns {string} A greeting message
 */
function greet(name = "World") {
    return `Hello, ${name}!`;
}

/**
 * Function to display welcome information
 */
function welcomeMessage() {
    console.log("🎉 Welcome to my first GitHub repository!");
    console.log("This is a JavaScript example!");
    
    // Array of names to greet
    const names = ["World", "GitHub", "JavaScript", "Developers"];
    
    // Greet each name
    names.forEach(name => {
        console.log(greet(name));
    });
}

/**
 * Function to demonstrate basic JavaScript features
 */
function demonstrateFeatures() {
    console.log("\n📚 JavaScript Features Demo:");
    
    // Variables and data types
    const projectName = "Sample Repository";
    const version = 1.0;
    const isActive = true;
    const features = ["Variables", "Functions", "Arrays", "Objects"];
    
    console.log(`Project: ${projectName} v${version}`);
    console.log(`Active: ${isActive}`);
    console.log(`Features: ${features.join(", ")}`);
    
    // Object example
    const repository = {
        name: "repo",
        owner: "omprakash970",
        language: "JavaScript",
        purpose: "Learning Git and GitHub"
    };
    
    console.log("\n📁 Repository Info:");
    Object.entries(repository).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
    });
}

// Main execution
function main() {
    welcomeMessage();
    demonstrateFeatures();
    console.log("\n🚀 Happy coding!");
}

// Run the program if this file is executed directly
if (require.main === module) {
    main();
}

// Export functions for use in other modules
module.exports = {
    greet,
    welcomeMessage,
    demonstrateFeatures
};