import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.buttons.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent   
 {
  constructor(public sidebarService:    
 SidebarService) {}

 setIdSelectedCity(ciudadId: number) {
  this.sidebarService.selectedCityId.set(ciudadId);
  console.log("ciudad id " + ciudadId); 
}
}