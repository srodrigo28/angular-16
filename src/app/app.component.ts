import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViacepService } from './viacep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private viacepService: ViacepService){}

  ngOnInit(): void { 
    this.initializeForm();
    this.observePreenchimentoCep(); 
  };
  
  initializeForm(){
    this.form = this.fb.group({
      cep: ['', [Validators.required] ],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    })
  }

  observePreenchimentoCep(){
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if(value?.length == 8){
        // buscar o endereço
        this.buscarCep();
      }
    })
  }

  buscarCep(){
    var cep = this.form.get('cep')?.value;
    this.viacepService.getEnderecoByCep(cep).subscribe(
      {
        next: (res) => {
          this.form.patchValue({
            logradouro: res.logradouro,
            bairro: res.bairro,
            cidade: res.localidade,
            estado: res.estado,
          })
        },
        error: () => {
          alert('Erro ao buscar cep')
          console.log('error ao buscar cep')
        }
      }
    )
  }

  title = 'angualr-16';
}
