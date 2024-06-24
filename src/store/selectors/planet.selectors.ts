import { createSelector, createFeatureSelector } from '@ngrx/store';
import {PlanetState} from "../types";

/**
 * Selector to get the planet state from the store.
 * Usage: `selectPlanetState(state)`
 */
export const selectPlanetState = createFeatureSelector<PlanetState>('planets');

/**
 * Selector to get all planets from the planet state.
 * Usage: `selectAllPlanets(state)`
 */
export const selectAllPlanets = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.planets
);

/**
 * Selector to get the loading state from the planet state.
 * Usage: `selectPlanetsLoading(state)`
 */
export const selectPlanetsLoading = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.loading
);

/**
 * Selector to get the error state from the planet state.
 * Usage: `selectPlanetsError(state)`
 */
export const selectPlanetsError = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.error
);
