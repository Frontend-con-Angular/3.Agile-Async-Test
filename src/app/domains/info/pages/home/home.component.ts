import { Component } from '@angular/core';
import { ProyectCardComponent } from '../../components/proyect-card/proyect-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
