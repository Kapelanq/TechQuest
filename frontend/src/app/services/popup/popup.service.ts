import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../../components/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private dialog: MatDialog
  ) { }
  

  openPopup(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.position = {
      'left': '65%',
      'bottom' : '25%'      
    }
  

    dialogConfig.width = '1200px';
    dialogConfig.height = '400px';
  

    this.dialog.open(PopupComponent, dialogConfig);
  }


}
