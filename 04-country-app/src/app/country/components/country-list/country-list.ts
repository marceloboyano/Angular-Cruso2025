import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryList {
    countries = input.required<Country[]>();

    errorMessage = input<string|unknown|null|undefined>();
    isLoading = input<boolean>(false);
    isEmpty = input<boolean|unknown|null|undefined>(false);
}
