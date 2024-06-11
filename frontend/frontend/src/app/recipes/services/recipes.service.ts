import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface RecipesData {
  id: number,
  name: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient
  ) {}

  getRecipesList(): Observable<RecipesData[]> {
    const URL = "http://127.0.0.1:8000/api/recipe/";
    return this.http.get<RecipesData[]>(URL)
  }
}