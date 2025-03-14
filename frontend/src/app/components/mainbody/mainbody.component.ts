import { Component } from '@angular/core';
import { AiService } from '../../services/AI/ai.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mainbody',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.scss'
})
export class MainbodyComponent {

  inputForm: any;
  prompt: any;
  output: any = 'Hello! I am your Eggsistant';
  state = 'answer';
  

  constructor(
    private formBuilder: FormBuilder,
    private aiService: AiService
  ) {}

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  async submitForm(): Promise<any>
  {
    this.prompt = this.inputForm.value['name'];

    this.aiService.sendPrompt(this.prompt).then(
      (value) => this.output = value
    );


  }







}
