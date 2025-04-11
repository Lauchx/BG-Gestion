import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-information',
  standalone: false,
  templateUrl: './select-information.component.html',
  styleUrl: './select-information.component.css'
})
export class SelectInformationComponent {

  deudaForm: FormGroup;
  summaryText = '';

  constructor(private fb: FormBuilder) {
    this.deudaForm = this.fb.group({
      adviserName: ['', Validators.required],
      clientName: ['', Validators.required],
      clientDNI: [null, Validators.required],
      products: this.fb.array([
        this.fb.group({
          name: ['Master', Validators.required],
          amount: [0, [Validators.required, Validators.min(1)]],
        }),
      ]),
    });
  }

  get products() {
    return this.deudaForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(
      this.fb.group({
        name: ['Master', Validators.required],
        amount: [0, [Validators.required, Validators.min(1)]],
      })
    );
  }

  finalizar() {
    console.log(this.deudaForm.value)
    if (this.deudaForm.valid) {
      const { adviserName, clientName, clientDNI, products } = this.deudaForm.value;
      const productosTexto = products.map((p: any) => `${p.name} por $${p.amount}`).join(', ');
      this.summaryText = `Asesor: ${adviserName}, Deudor: ${clientName}, DNI: ${clientDNI}. Productos: ${productosTexto}.`;
    } else {

      this.summaryText = 'Faltan campos por completar correctamente.';
    }
  }
}
