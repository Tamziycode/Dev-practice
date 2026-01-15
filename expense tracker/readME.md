# Personal Finance Tracker (Vanilla JavaScript Implementation)

## Overview

This project is a functional web application designed to track income and expenditures. It was developed to demonstrate core competency in Vanilla JavaScript, specifically focusing on DOM manipulation, state management, and data persistence using the Web Storage API.

## Technical Implementation

The application architecture follows a data-driven approach, separating logic into three distinct layers:

### 1. State Management

All transactions are stored as objects within a centralized `transactions` array. Each object contains a unique identifier (ID), a text description, and a numerical value. This array serves as the "single source of truth" for the application.

### 2. Data Persistence

To ensure data survives page reloads, the application utilizes `localStorage`. Logic is implemented to serialize the state into JSON strings for storage and parse them back into objects upon application initialization.

### 3. DOM Rendering

The UI is updated dynamically through a rendering engine that clears and re-populates the transaction list whenever the state changes. This ensures that the interface is always synchronized with the underlying data.

## Features

- **Real-time Calculations:** Automated processing of income, expenses, and total balance using iterative logic.
- **Dynamic Styling:** Conditional CSS class application based on transaction values (positive vs. negative).
- **Persistent Storage:** LocalStorage integration for long-term data retention.
- **Responsive Design:** Utilizes CSS Flexbox and custom properties for a modern, mobile-first interface.

  ```

  ```
