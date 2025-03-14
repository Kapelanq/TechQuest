import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  async sendPrompt(x: string)
  {
    const genAI = new GoogleGenerativeAI("AIzaSyBQAC-cjYyQWmX0F1FfzyHrVX9Erhng3ks");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const prompt = "Hello, what is todays date?";
  
    const result = await model.generateContent(x);

    return result.response.text();
  }

 
}
