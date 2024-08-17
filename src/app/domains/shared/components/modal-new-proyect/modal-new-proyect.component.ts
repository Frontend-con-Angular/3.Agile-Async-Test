import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog'

@Component({
  selector: 'app-modal-new-proyect',
  standalone: true,
  imports: [],
  templateUrl: './modal-new-proyect.component.html',
  styleUrl: './modal-new-proyect.component.css'
})
export class ModalNewProyectComponent {
  dialogRef = inject(DialogRef);
}
