import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  async sendPrompt(prompt: any)
  {
    const genAI = new GoogleGenerativeAI("AIzaSyBQAC-cjYyQWmX0F1FfzyHrVX9Erhng3ks");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const result = await model.generateContent(prompt);

    return result.response.text();
  }

 
}
