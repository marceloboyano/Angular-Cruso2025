import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export class ByCountryPage {
  countryService = inject(CountryService);

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query || params.query.trim().length === 0) {
        return of([]);
      }
      this.router.navigate(['/country/by-country'], { queryParams: { query: params.query } });
      return this.countryService.searchByCountry(params.query);
    },
  });

  //   countryResource = resource({
  //     params: () => ({ query: this.query() }),
  //     loader: async ({ params }) => {
  //       if (!params.query) return [];
  //       return await firstValueFrom(this.countryService.searchByCountry(params.query));
  //     },
  //   });
}
