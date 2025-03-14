import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleGenerativeAI } from '@google/generative-ai'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechQuest';

   genAI = new GoogleGenerativeAI("AIzaSyBQAC-cjYyQWmX0F1FfzyHrVX9Erhng3ks");
   model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

   prompt = "What is 2+2?";

   result = this.model.generateContent(this.prompt);
  

ngOnInit(): void{
  console.log(this.result);
}

}
