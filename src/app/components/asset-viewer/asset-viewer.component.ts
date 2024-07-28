import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.buttons.service';

@Component({
  selector: 'app-asset-viewer',
  standalone: true,
  imports: [],
  templateUrl: './asset-viewer.component.html',
  styleUrl: './asset-viewer.component.css'
})
export class AssetViewerComponent {
  constructor(public sidebarService: SidebarService) {}

  get poblacionFormateada() {
    const ciudadSeleccionada = this.sidebarService.SelectedCity();
    return ciudadSeleccionada?.poblacion
      ? ciudadSeleccionada.poblacion.replace('M', '000000')
      : 'No hay ciudad seleccionada';
  }

}
