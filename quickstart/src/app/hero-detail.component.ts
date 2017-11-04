import { Component } from '@angular/core';
import {Hero} from "./app.component";
import { Hero } from './hero';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'hero-detail',
  template: `<div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div></div>`
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
