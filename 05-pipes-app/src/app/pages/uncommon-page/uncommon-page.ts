import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Marcelo',
  gender: 'male',
  age: 40,
  address: 'Juan José Castelli, Argentina',
};

const client2 = {
  name: 'Brenda',
  gender: 'female',
  age: 11,
  address: 'Juan José Castelli, Argentina',
};
@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe,I18nPluralPipe,SlicePipe,JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //i18n Select
  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18n Plural
  ClientsMap= signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  })
  clients = signal<string[]>(['Maria', 'Pedro', 'Fernando', 'Melissa', 'Natalia', 'Andrea','Juan','Carlos']);

  deleteClient() {
 this.clients.update((prev) => prev.slice(1));
}


//KeyValue Pipe
  profile= {
    name: 'Marcelo',
    age: 40,
    address: 'Juan José Castelli, Argentina'
  }


  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap', value))
  );
}
