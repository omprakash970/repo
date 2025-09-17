#!/usr/bin/env python3
"""
Hello World Program
A simple Python script to demonstrate basic programming concepts.
"""

def greet(name="World"):
    """
    Function to greet someone
    
    Args:
        name (str): The name to greet (default: "World")
    
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}!"

def main():
    """Main function to run the program"""
    print("🎉 Welcome to my first GitHub repository!")
    print(greet())
    print(greet("GitHub"))
    print(greet("Python"))
    
    # Interactive part
    user_name = input("What's your name? ")
    if user_name.strip():
        print(greet(user_name))
    else:
        print("Nice to meet you, anonymous user!")

if __name__ == "__main__":
    main()