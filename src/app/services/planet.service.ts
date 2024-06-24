import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Planet} from "../../store/models/planet.model";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false';

  constructor(private http: HttpClient) { }

  /**
   * Fetches the list of planets from the external API.
   * @returns An Observable emitting an array of Planet objects.
   */
  getPlanets(): Observable<Planet[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.bodies || []) // Ensure 'bodies' is initialized as an array
    );
  }
}
