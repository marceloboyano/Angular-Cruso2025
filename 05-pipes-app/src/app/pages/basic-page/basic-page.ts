import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocales, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  loacleServices = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID)); // lo ideal es tomar el locale del servicio LocaleService pero es otra opcion nada mas
  nameLower = signal('marcelo');
  nameUpper = signal('MARCELO');
  fullName = signal('marcelo BOYAnosky');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocales) {
    this.loacleServices.changeLocale(locale);
  }
}
