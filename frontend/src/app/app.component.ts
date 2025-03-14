import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Anthropic from "@anthropic-ai/sdk";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechQuest';

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey: "my_api_key",
});

const msg = await anthropic.messages.create({
  model: "claude-3-7-sonnet-20250219",
  max_tokens: 20000,
  temperature: 1,
  messages: []
});
console.log(msg);
}
