// sidebar.service.ts
import { computed, Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _ciudades = signal([
    { id: 1, text: 'Madrid', poblacion: '3.2M' },
    { id: 2, text: 'Barcelona', poblacion: '1.6M' },
    { id: 3, text: 'Valencia', poblacion: '0.8M' },
  ]);

  get ciudades() {
    return this._ciudades();
  }

  // To set an id throw dashboard.ts
  selectedCityId = signal(null as number | null);


  // Return the id of the selected city
  SelectedCity = computed(() => {
    const ciudadId = this.selectedCityId();
    return ciudadId ? this._ciudades().find(c => c.id === ciudadId) : null;
  });
}