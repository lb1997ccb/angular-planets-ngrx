# Planets App

This project demonstrates the use of Angular with NgRx for managing state, specifically for fetching and displaying data from an external API.

## Functionality

### Planet Service (`PlanetService`)

The `PlanetService` retrieves data about planets from an external API using Angular's `HttpClient`.

### NgRx Effects (`PlanetEffects`)

`PlanetEffects` implements NgRx effects to handle asynchronous actions related to planets, such as loading and error handling.

### NgRx Selectors

- `selectAllPlanets`: Selects the array of planets from the NgRx store.
- `selectPlanetsLoading`: Selects the loading state indicating whether planets are being fetched.
- `selectPlanetsError`: Selects any error that occurs while fetching planets.

## Installation
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `ng serve`.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
