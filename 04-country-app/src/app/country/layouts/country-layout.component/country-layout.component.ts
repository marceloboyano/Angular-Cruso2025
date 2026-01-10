import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "../../pages/top-menu/top-menu";

@Component({
  selector: 'app-country-layout.component',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './country-layout.component.html',
  styleUrl: './country-layout.component.css',
})
export class CountryLayoutComponent {

}
