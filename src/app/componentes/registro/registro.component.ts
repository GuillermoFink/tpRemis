import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message, SelectItem } from '../../../../node_modules/primeng/components/common/api';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  msgs: Message[] = [];

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
      
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: 'Elegir Sexo', value: '' });
    this.genders.push({ label: 'Hombre', value: 'hombre' });
    this.genders.push({ label: 'Mujer', value: 'mujer' });
    this.genders.push({ label: 'Indefinido', value: 'trol@' });
  }
  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }
  
  ValidarPws() {
    console.log("EJECUTO CONSULTA");
    return false;

  }

}
