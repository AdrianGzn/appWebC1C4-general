import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})
export class FormDataComponent {
  formPersonalData: FormGroup;

  constructor() {
    this.formPersonalData = new FormGroup({
      age: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern(/^\d+$/)]),
      heigth: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(250), Validators.pattern(/^\d+(\.\d+)?$/)]),
      weight: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(300), Validators.pattern(/^\d+(\.\d+)?$/)]),
      gender: new FormControl('', [Validators.required])
    });
  }

  submit() {
    const gender = this.formPersonalData.get('gender')?.value;
    if (gender !== 'masculino' && gender !== 'femenino') {
      alert("En género solo puede poner 'masculino' o 'femenino'.");
    } else if (this.formPersonalData.invalid) {
      alert("El formulario no está llenado correctamente o tiene campos vacíos.");
    } else if (!this.formPersonalData.touched) {
      alert("El formulario no ha sido llenado.");
    } else {
      console.log(this.formPersonalData.value);
      this.sendMessage();
    }
  }

  @Input() messageChild: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.formPersonalData.value);
  }
}
