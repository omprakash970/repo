"""
A simple utility module for the sample repository.
This demonstrates how to organize code in modules.
"""

def calculate_sum(a, b):
    """Add two numbers together."""
    return a + b

def calculate_product(a, b):
    """Multiply two numbers together."""
    return a * b

def display_info():
    """Display information about this module."""
    info = {
        "name": "Sample Repository Utilities",
        "version": "1.0.0",
        "description": "Basic utility functions for learning",
        "author": "GitHub Learner"
    }
    
    print("📋 Module Information:")
    for key, value in info.items():
        print(f"  {key.title()}: {value}")
    
    return info

if __name__ == "__main__":
    # Demo when run directly
    display_info()
    print(f"\n🧮 Math Examples:")
    print(f"  5 + 3 = {calculate_sum(5, 3)}")
    print(f"  5 × 3 = {calculate_product(5, 3)}")