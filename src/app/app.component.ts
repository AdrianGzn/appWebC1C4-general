import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormDataComponent } from './components/form-data/form-data.component';
import { CaloriesSectionComponent } from './components/calories-section/calories-section.component';
import { InfoGraphicComponent } from './components/info-graphic/info-graphic.component';
import { ContainerCardsComponent } from './components/container-cards/container-cards.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormDataComponent, CaloriesSectionComponent, InfoGraphicComponent, ContainerCardsComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Formulario';

  formPersonalData: FormGroup;
  tmb: number = 0;
  desayuno: number = 0;
  comida: number = 0;
  cena: number = 0;
  imc: number = 0;

  constructor(private form: FormBuilder) {
    this.formPersonalData = this.form.group({
      age: [null],
      heigth: [null],
      weight: [null],
      gender: ['', [Validators.minLength(5), Validators.maxLength(20)]]
    });
  }

  caloriesParent: number[] = [0, 0, 0];
  amountParient: number[] = [50, 50, 50, 50];
  messageParient: string = '';

  receiveMessage(data: any) {
    console.log('Datos recibidos del formulario:', data);
    
    if (data.gender === 'masculino') {
      this.tmb = 1.37 * (88.362 + (13.397 * data.weight) + (4.799 * data.heigth) - (5.677 * data.age));
    } else if (data.gender === 'femenino') {
      this.tmb = 1.37 * (447.593 + (9.247 * data.weight) + (3.098 * data.heigth) - (4.33 * data.age));
    }

    this.desayuno = this.tmb / 4;
    this.comida = this.tmb / 3;
    this.cena = this.tmb / 3;

    this.caloriesParent = [Math.round(this.desayuno), Math.round(this.comida), Math.round(this.cena)];
    console.log('Calorías calculadas:', this.caloriesParent);

    this.imc = Math.round(data.weight / Math.pow(data.heigth / 100, 2));

    if (this.imc < 18.5) {
      this.messageParient = 'Considere alimentarse más. Tiene peso bajo.';
      this.amountParient = [40, 20, 30, 10];
      
    } else if (this.imc < 24.9) {
      this.messageParient = 'Tiene un peso ideal.';
      this.amountParient = [50, 20, 25, 5];

    } else if (this.imc < 29.9) {
      this.messageParient = 'Considere hacer ejercicio. Tiene sobrepeso.';
      this.amountParient = [50, 15, 30, 5];

    } else if (this.imc >= 30) {
      this.messageParient = 'Considere hacer ejercicio continuamente. Tiene obesidad.';
      this.amountParient = [60, 15, 20, 5];
    }
  }
}
