import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Planet} from "../../../store/models/planet.model";
import {Store} from "@ngrx/store";
import {selectAllPlanets, selectPlanetsError, selectPlanetsLoading} from "../../../store/selectors/planet.selectors";
import {loadPlanets} from "../../../store/actions/planet.actions";

/**
 * Component that displays a list of planets fetched from the store.
 * Uses NgRx for state management.
 */
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  /** Observable emitting an array of planets */
  planets$!: Observable<Planet[]>;

  /** Observable indicating whether planets are currently being loaded */
  loading$!: Observable<boolean>;

  /** Observable emitting any error that occurs while fetching planets */
  error$!: Observable<any>;

  /**
   * Constructs the PlanetsComponent.
   * @param store NgRx store service used for state management
   */
  constructor(private store: Store<{ planets: { entities: Planet[], loading: boolean, error: any } }>) {
    // Initialize observables for planets, loading state, and error from the store
    this.planets$ = this.store.select(selectAllPlanets);
    this.loading$ = this.store.select(selectPlanetsLoading);
    this.error$ = this.store.select(selectPlanetsError);
  }

  /**
   * Lifecycle hook called after Angular has initialized all data-bound properties of the component.
   * Dispatches an action to load planets from the store.
   */
  ngOnInit() {
    this.store.dispatch(loadPlanets());
  }
}
