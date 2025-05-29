
# 🧰 Full Project Setup & Usage Guide

This guide provides the complete setup process for both backend and frontend tools, including dependency installation, MongoDB usage, and Git workflow tips.

---

## 🚀 Setup Instructions (with Explanations)

```bash
# --- BACKEND ESSENTIALS ---

npm i cors         
# Enables Cross-Origin Resource Sharing, allowing frontend apps (like React) to communicate with the API on a different domain/port.

npm i mongoose     
# Used for MongoDB. Provides schema-based modeling for your application data.
# MongoDB is a NoSQL database, meaning:
# - It doesn't use structured tables like SQL
# - Instead, it stores data in flexible JSON-like documents
# - A 'collection' is like an array of these documents (similar to a table)
# - Each document can have different fields

# Example:
# Collection: Users
#   Document 1: { "name": "Alice", "role": "admin" }
#   Document 2: { "username": "bob123", "logins": 42 }

# --- FRONTEND STATE MANAGEMENT (React Stack) ---

npm i redux               
# Core state management library for handling global state.

npm i axios               
# HTTP client for making API calls from the frontend.

npm i react-redux         
# Official React bindings for Redux—lets components access the Redux store.

npm i @reduxjs/toolkit    
# The recommended way to write Redux logic.
# Includes utilities for reducers, middleware, and actions with less boilerplate.

# These tools together let you build scalable, predictable state management in React apps.

# --- VERSION CONTROL: GIT COMMANDS ---

# Stage your code changes (make sure to add only what you want to track)
git add <your-files>

# Create a diff file of your staged changes:
git diff --staged > changes.txt
# This saves all currently staged changes into a file called 'changes.txt'
# Useful for reviewing or sharing changes before committing.
