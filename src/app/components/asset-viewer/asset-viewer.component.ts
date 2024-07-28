import { Component, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.buttons.service';
import { CommonModule } from '@angular/common';
import { Ciudad } from '../../interfaces/Ciudad';

@Component({
  selector: 'app-asset-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-viewer.component.html',
  styleUrl: './asset-viewer.component.css'
})
export class AssetViewerComponent {
  @Input() ciudadSeleccionada: Ciudad | null = null;

  calcularValor(poblacion?: string): number {
    if (poblacion) {
      const poblacionNumerica = parseFloat(poblacion.replace('M', ''));
      return poblacionNumerica * 2;
    } else {
      console.error('La población no es un string válido');
      return 0; // O cualquier otro valor por defecto
    }
  }
}

/*export class AssetViewerComponent {
  constructor(public sidebarService: SidebarService) {}

  get poblacionFormateada() {
    const ciudadSeleccionada = this.sidebarService.SelectedCity();
    return ciudadSeleccionada?.poblacion
      ? ciudadSeleccionada.poblacion.replace('M', '000000')
      : 'No hay ciudad seleccionada';
  }

}
*/