import { Injectable } from '@angular/core';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  genAI = new GoogleGenerativeAI("AIzaSyBQAC-cjYyQWmX0F1FfzyHrVX9Erhng3ks");
  
  model = this.genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });
  
  entryPrompt = `Zwróć to zapytanie w postaci pliku JSON z wzoru:
              nazwa przepisu, składniki, sposób przygotowania
    `;
  constructor() { }


 
  async sendPrompt(prompt: string)
  {
    const result = await this.model.generateContent(this.entryPrompt + prompt);

    return result.response.text();
  }

 
}
