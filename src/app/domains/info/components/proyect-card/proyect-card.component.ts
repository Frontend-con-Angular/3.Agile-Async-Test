import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyect-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.css'
})
export class ProyectCardComponent {

}
