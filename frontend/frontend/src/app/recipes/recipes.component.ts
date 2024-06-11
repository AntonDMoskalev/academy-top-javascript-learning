import {Component, OnInit} from '@angular/core';
import {RecipesService} from "./services/recipes.service";
import {tap} from "rxjs";
import {NgForOf} from "@angular/common";

interface RecipesData {
  id: number,
  name: string,
  description: string
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  title: string = "Привет мир"
  recipes!: RecipesData[]

  constructor(
    private recipesService: RecipesService
  ) {
  }

  ngOnInit(): void {
    this.recipesService.getRecipesList().pipe(
      tap(res => this.recipes = res),
    ).subscribe()
  }
}
