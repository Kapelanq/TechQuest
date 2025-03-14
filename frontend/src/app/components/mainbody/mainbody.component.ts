import { Component } from '@angular/core';
import { AiService } from '../../services/AI/ai.service';
import {FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mainbody',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.scss'
})
export class MainbodyComponent {

  inputForm: any;
  prompt: any;

  constructor(
    private formBuilder: FormBuilder,
    private aiService: AiService
  ) {}

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  submitForm(){
    this.prompt = this.inputForm.value['name'];
    console.log(this.aiService.sendPrompt(this.prompt))

  }







}
