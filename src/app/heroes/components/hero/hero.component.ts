import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}-${this.age}`;
  }

  changeHero(nameToChange: string): void {
    this.name = nameToChange;
  }
  changeAge(ageToChange: number): void {
    this.age = ageToChange;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
