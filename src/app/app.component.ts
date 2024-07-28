import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssetViewerComponent } from './components/asset-viewer/asset-viewer.component';
import { SidebarService } from './services/sidebar.buttons.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, DashboardComponent, AssetViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passingInformation';

  sidebarService = inject(SidebarService);
  // dashboard = inject(DashboardComponent);
}
