# Global Pokédex

A simple React-based Pokédex application that allows users to search, browse, and view details of Pokémon. It uses the [PokéAPI](https://pokeapi.co/) for fetching Pokémon data and features pagination, search functionality, and a detailed view for individual Pokémon.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

---


## Features

- **Search Pokémon**: Search Pokémon by name.
- **Pagination**: Navigate through pages of Pokémon data.
- **Detailed View**: View detailed stats (e.g., height, weight, and base experience) for each Pokémon.
- **Debounced Search**: Ensures efficient searching without overloading API requests.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Aaron-M00/go-canvas-take-home.git
   cd go-canvas-take-home
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Application**
   ```bash
   npm start
   ```

4. **Visit the App**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## API Description
This application fetches Pokémon data from the PokéAPI (https://pokeapi.co/). The PokéAPI is a free and open-source RESTful API that provides data on over 1300 Pokémon, including details like name, type, stats, and abilities.

The API is used in two main ways:

- Fetching the List of Pokémon: The main list of Pokémon is fetched with the endpoint https://pokeapi.co/api/v2/pokemon?limit=1300. This returns basic information (such as name and URL) for each Pokémon.
- Fetching Pokémon Details: When a user clicks on a Pokémon, the application makes another request to the Pokémon's specific URL to fetch detailed data like height, weight, and base experience.

---

## Assumptions and Limitations

### Assumptions
- The application assumes that the API will consistently return data in a structured format, including a valid URL for each Pokémon to fetch additional details.
- The list of Pokémon is assumed to be manageable for the purpose of this application. The app fetches the list of all 1300 Pokémon initially, which could be too large for very slow connections, but works well under normal conditions.

### Limitations and Trade-offs
- **Performance and Efficiency:** Due to the large number of Pokémon (1300+), the application loads all Pokémon names at once. In a real-world application, pagination or lazy loading should be used to reduce initial load time and server strain.
- **Limited API Usage:** The application only uses a subset of the available data from the API, primarily focusing on Pokémon names and details like height, weight, and experience. It does not include other attributes such as abilities, stats, or types in the search functionality, though it could be extended to do so.
- **API Call Frequency:** To prevent excessive API calls, caching is used via React Query, but any changes to the query parameters (like a new search term) will cause the list of Pokémon to be refetched. In a production environment, implementing more advanced caching strategies could further optimize the performance.
- **Handled Loading:** In case the application takes extra time to load records on the first time, there should be some way to show a skeleton in place of it.

---

## Project Structure

```
global-pokedex/
├── src/
│   ├── components/
│   │   ├── PokemonList.jsx      # Displays the Pokémon list with pagination
│   │   ├── PokemonSearch.jsx    # Search bar for filtering Pokémon
│   │   ├── Pagination.jsx       # Pagination controls
│   │   ├── PokemonCard.jsx      # Card for displaying a single Pokémon
│   │   ├── PokemonDetails.jsx   # Displays detailed information about a Pokémon
│   ├── App.js                   # Main app entry point
│   ├── index.js                 # React DOM render
├── public/
│   ├── index.html               # Base HTML file
├── package.json                 # Project dependencies
└── README.md                    # Project documentation
```

---

## Technologies Used

- **React.js**: For building the user interface.
- **React Query (@tanstack/react-query)**: For managing server state and caching API data.
- **PokéAPI**: Public API for fetching Pokémon data.
- **Tailwind CSS**: For styling the application.
- **React Loader Spinner**: For loading indicators.
- **Axios**: For fetching Pokémon details.

---

## Acknowledgments

- **PokéAPI**: For providing an extensive Pokémon database.
- **React Query Documentation**: For guidance on API management.
- **Tailwind CSS**: For rapid UI development.
