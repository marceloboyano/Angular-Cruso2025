import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/country-layout.component/country-layout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page.component/by-capital-page.component';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryPage } from './components/country-page/country-page';


export const countryRoutes: Routes = [


  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,

      },
      {
        path: 'by-country',
        component: ByCountryPage,

      },
      {
        path: 'by-region',
        component: ByRegionPage,

      },
      {
        path: 'by/:code',
        component: CountryPage,
      },
       {
          path: '**',
          redirectTo: 'by-capital'
        }
    ]
  },


  {
    path: '**',
     redirectTo: ''
  }

];


export default countryRoutes;
