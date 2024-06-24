import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {combineReducers, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    // Provides the router service with defined routes
    provideRouter(routes),

    // Provides an instance of the HttpClient service
    provideHttpClient(),

    // Imports providers from StoreModule for centralized state management with combined reducers
    importProvidersFrom(StoreModule.forRoot(combineReducers({}))),

    // Imports providers from EffectsModule for managing side effects in state management
    importProvidersFrom(EffectsModule.forRoot()),

    // Provides the StoreDevtools module to enable developer tools for the store
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
};
