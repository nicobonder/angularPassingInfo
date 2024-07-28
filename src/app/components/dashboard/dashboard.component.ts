import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.buttons.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public sidebarService: SidebarService)   
 {}

 // Take the id coming from the service and return the value of the poblacion property
  get poblacionValue() {
    const SelectedCity = this.sidebarService.SelectedCity();
    return SelectedCity?.poblacion ?? 'No hay ciudad seleccionada';
  }
}