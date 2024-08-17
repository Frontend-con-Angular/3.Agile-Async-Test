import { Component } from '@angular/core';
import { MenuProyectsComponent } from '../menu-proyects/menu-proyects.component';
import { MenuSettingsComponent } from '../menu-settings/menu-settings.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatMenuModule, MatIconModule, MenuProyectsComponent, MenuSettingsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
