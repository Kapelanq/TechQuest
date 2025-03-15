import { Component } from '@angular/core';
import { AiService } from '../../services/AI/ai.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-mainbody',
  imports: [
    ReactiveFormsModule,
    NgFor,
  ],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.scss'
})
export class MainbodyComponent {
  inputForm: any;
  prompt: any;
  
  data: any = null;
  name = ""
  ingredients = []
 
  recipe = {
    name: '',
    ingredients: [],
    description: []
  }

  constructor(
    private formBuilder: FormBuilder,
    private aiService: AiService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    
  }

  async submitForm(): Promise<any>
  {
    this.prompt = this.inputForm.value['name'];

    await this.aiService.sendPrompt(this.prompt).then(
      (value) => this.data = JSON.parse(value)
    );

    this.recipe['name'] = this.data['recipes'][0]['name'];
    this.recipe['ingredients'] = this.data['recipes'][0]['ingredients'];
    if(this.data['recipes'][0]['preparation'])
      this.recipe['description'] = this.data['recipes'][0]['preparation'];
    else
      this.recipe['description'] = this.data['recipes'][0]['description'];


  }







}
