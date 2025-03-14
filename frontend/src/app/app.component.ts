import { Component } from '@angular/core';
import { MainbodyComponent } from "./components/mainbody/mainbody.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    MainbodyComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechQuest';


}
