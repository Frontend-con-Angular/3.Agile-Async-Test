import { Component, inject } from '@angular/core';
import { ModalNewProyectComponent } from '../modal-new-proyect/modal-new-proyect.component';
import {MatIconModule} from '@angular/material/icon';
import { Dialog } from '@angular/cdk/dialog'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-proyects',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './menu-proyects.component.html',
  styleUrl: './menu-proyects.component.css'
})
export class MenuProyectsComponent {
  dialog = inject(Dialog);

  openDialog(){
    this.dialog.open(ModalNewProyectComponent)
  }
}
