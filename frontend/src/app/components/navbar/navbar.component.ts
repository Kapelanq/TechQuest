import { Component } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private popup: PopupService
  ){

  }

  openPopup(){
    this.popup.openPopup();
  }

}
