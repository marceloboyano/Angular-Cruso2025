import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
  placeholder = input('Buscar...');
  value = output<string>();
  debounceTime = input<number>(300);
  initialValue = input<string>();
  inputValue = linkedSignal<string>(() =>this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());
    onCleanup(() => clearTimeout(timeout));
  })

}
