// sidebar.service.ts
import { computed, Injectable, Signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { signal } from '@angular/core';
import { Ciudad } from '../interfaces/Ciudad';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _ciudades: Ciudad[] = [
    { id: 1, text: 'Madrid', poblacion: '3.2M' },
    { id: 2, text: 'Barcelona', poblacion: '1.6M' },
    { id: 3, text: 'Valencia', poblacion: '0.8M' },
  ];

  get ciudades() {
    return this._ciudades;
  }

  // To set an id throw dashboard.ts
  selectedCityId = signal(null as number | null);

  // Return the id of the selected city
  selectedCity = computed(() => {
    const ciudadId = this.selectedCityId();
    return ciudadId ? this._ciudades.find(c => c.id === ciudadId) : null;
  }) as Signal<Ciudad | null>; // Ajusta el tipo aquí
}

