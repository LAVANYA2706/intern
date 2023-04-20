import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(SecondComponent)
}

}

