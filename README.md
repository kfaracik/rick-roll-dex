# Rick & Morty App

## Overview

This application is a technical task designed to showcase the implementation of a React Native app featuring a list of characters from the Rick & Morty universe. The app uses modern libraries and frameworks to ensure a clean, scalable, and efficient architecture.

### Features:

1. **Character List Screen**: Displays a paginated list of characters fetched from the Rick & Morty API.
2. **Character Details Screen**: Shows detailed information about a selected character.
3. **Search by Name**: Allows users to search for characters by name.
4. **Favorites Management**: Enables users to mark and manage their favorite characters.
5. **Filters**: Filters by status and species for more refined searches.

---

## Setup

### Prerequisites

1. Clone this repository:
   ```bash
   git clone https://github.com/kfaracik/rick-roll-dex
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the project:
   ```bash
   npm run start
   ```
4. Run on a connected device or emulator:
   ```bash
   npm run android
   npm run ios
   ```

---

## Design

For UI/UX design references, view the Figma file:  
[Design on Figma](https://www.figma.com/design/Ui91kU1cPRnMYW09DorLK1/Rick-%26-Morty-Task?node-id=0-1&node-type=canvas&t=FxH9v4bfF7NDkwUC-0)

---

## Technologies Used

### 1. **React Native**

- A JavaScript framework for building natively rendered mobile apps for iOS and Android.
- Provides flexibility to create cross-platform applications with near-native performance.

### 2. **Jotai**

- A lightweight state management library for React.
- Offers atomic state management, simplifying component communication and reducing boilerplate.

### 3. **React Query (@tanstack/react-query)**

- A powerful server-state management library.
- Handles data fetching, caching, synchronization, and updates, reducing the complexity of API integration.

### 4. **Axios**

- A promise-based HTTP client for the browser and Node.js.
- Used for API requests to fetch character data efficiently.

### 5. **react-native-mmkv**

- A high-performance key-value storage library.
- Provides secure, fast, and efficient storage for persistent data such as user preferences or cached results.

### 6. **Flash List (@shopify/flash-list)**

- An ultra-fast list component optimized for large datasets.
- Ensures smooth scrolling performance with better memory management than traditional FlatList.

### 7. **React Navigation**

- A robust library for handling navigation and routing in React Native apps.
- Used to implement both stack and bottom tab navigation in the app.

### 8. **React Native Paper**

- A collection of customizable Material Design components for React Native.
- Ensures a consistent and visually appealing UI.

### 9. **React Native Vector Icons**

- Provides a wide range of customizable icons for use in the application UI.

---

## Architecture

The app follows a modular architecture to enhance maintainability and scalability.

### Key Modules:

1. **API Layer**:
   - All API calls are centralized for easier maintenance.
   - Uses Axios for handling requests and responses.
2. **State Management**:
   - Global state is managed using Jotai for simplicity and flexibility.
   - Server state is handled with React Query to efficiently fetch, cache, and update data.
3. **UI Components**:
   - Designed with React Native Paper and Flash List for performance and modern aesthetics.
4. **Storage**:
   - Persistent data, like favorites, is stored using `react-native-mmkv`.

---

## API References

- **Base URL**: `https://rickandmortyapi.com/api/`
- **Endpoints**:
  - **Get Characters (Paginated)**: `/character?page={pageNumber}`
  - **Get Character by ID**: `/character/{id}`
  - **Search Characters by Name**: `/character?name={name}`
  - **Filter Characters**: `/character?status={status}&species={species}`

---

## Dependencies

### Core Libraries:

| Dependency              | Version |
| ----------------------- | ------- |
| `react`                 | ^18.3.1 |
| `react-native`          | ^0.76.1 |
| `@tanstack/react-query` | ^5.60.6 |
| `jotai`                 | ^2.10.3 |
| `axios`                 | ^1.7.7  |
| `react-native-mmkv`     | ^3.1.0  |

### UI and Navigation:

| Dependency                  | Version |
| --------------------------- | ------- |
| `@react-navigation/native`  | ^7.0.0  |
| `@react-navigation/stack`   | ^7.0.0  |
| `react-native-paper`        | ^5.12.5 |
| `@shopify/flash-list`       | ^1.7.2  |
| `react-native-vector-icons` | ^10.2.0 |

---

## Contributions

Feel free to fork the repository and submit a pull request with improvements or bug fixes.
