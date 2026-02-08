import { Injectable, signal } from '@angular/core';
export type AvailableLocales = 'es' | 'fr' | 'en';
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocales>('es');
  constructor() {
   this.currentLocale.set((localStorage.getItem('locale') as AvailableLocales) ?? 'es');
  }
  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(newLocale: AvailableLocales) {
    localStorage.setItem('locale', newLocale);
    this.currentLocale.set(newLocale);
    window.location.reload();
  }
}
