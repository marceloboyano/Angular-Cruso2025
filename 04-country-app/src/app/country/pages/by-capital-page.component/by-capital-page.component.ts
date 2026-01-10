import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-capital-page.component',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() =>this.queryParam);



countryResource = rxResource({
  params: () => ({ query: this.query() }),
  stream: ({ params }) => {
    if (!params.query || params.query.trim().length === 0) {
      return of([]);
    }
    this.router.navigate(['/country/by-capital'], { queryParams: { query: params.query } });
    return this.countryService.searchByCapital(params.query);
  },
});

  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];
  //     return await firstValueFrom(this.countryService.searchByCapital(params.query));
  //   },
  // });

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (countries) => {
  //       this.countries.set(countries);
  //       this.isLoading.set(false);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //       this.isError.set(err.message);
  //       this.countries.set([]);
  //     },
  //   });
  // }
}
