import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-aside',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-aside.component.html',
  styleUrl: './layout-aside.component.css'
})
export class LayoutAsideComponent {
  nameArtefact = signal('');
}
