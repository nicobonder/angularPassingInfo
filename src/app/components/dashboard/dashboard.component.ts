import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.buttons.service';
import { CommonModule } from '@angular/common';
import { Ciudad } from '../../interfaces/Ciudad';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
// export class DashboardComponent {
//   constructor(public sidebarService: SidebarService)   
//  {}

//  // Take the id coming from the service and return the value of the poblacion property
//   get poblacionValue() {
//     const SelectedCity = this.sidebarService.SelectedCity();
//     return SelectedCity?.poblacion ?? 'No hay ciudad seleccionada';
//   }
// }

export class DashboardComponent {
  constructor(public sidebarService: SidebarService) {}

  get ciudades() {
    return this.sidebarService.ciudades;
  }

  @Output() ciudadSeleccionada = new EventEmitter<Ciudad>();

  seleccionarCiudad(ciudad: Ciudad) {
    this.ciudadSeleccionada.emit(ciudad);
  }
}