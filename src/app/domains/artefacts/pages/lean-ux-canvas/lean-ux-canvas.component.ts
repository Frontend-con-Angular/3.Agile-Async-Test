import { Component, signal } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lean-ux-canvas',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './lean-ux-canvas.component.html',
  styleUrl: './lean-ux-canvas.component.css'
})
export class LeanUxCanvasComponent {
  items = signal(['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']);
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items(), event.previousIndex, event.currentIndex);
  }
}
