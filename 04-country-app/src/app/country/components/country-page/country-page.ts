import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CountryService } from '../../services/country';
import { Country } from '../../interfaces/country.interface';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'app-country-page',
  imports: [NotFound, CountryInformation],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
   countryCode = inject(ActivatedRoute).snapshot.params['code'];
   countryService = inject(CountryService);

    countryResource =  rxResource<Country | null, { code: string }>({
      params: () => ({ code: this.countryCode }),
      stream: ({ params }) => {
        if (!params.code || params.code.trim().length === 0) {
          return of(null);
        }
        return this.countryService.searchCountryByAlphaCode(params.code);
      },
    });
}
