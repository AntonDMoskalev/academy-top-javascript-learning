import { ApplicationConfig,} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import {RecipesComponent} from "./recipes/recipes.component";
import {provideHttpClient, withFetch} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component:  RecipesComponent}
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(withFetch())]
};
