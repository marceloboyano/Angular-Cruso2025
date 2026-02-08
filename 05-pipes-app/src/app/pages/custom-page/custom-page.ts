import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { HttpResponseBase } from '@angular/common/http';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from "../../pipes/hero-creator.pipe";
import { HeroSortByPipe } from "../../pipes/hero-sort.pipe";
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from "../../pipes/hero-filtre.pipe";

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

    name = signal('Marcelo Boyanosky');

    upperCase = signal(true);
    heroes = signal(heroes);

    sortBy = signal<keyof Hero | null>(null);

    searchQuery = signal('');

}
