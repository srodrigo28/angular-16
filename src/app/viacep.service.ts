import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViaCepResult } from './_models/ViacepResult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<ViaCepResult>
    (this.apiUrl + cep + "/json")
    // (this.apiUrl+cep)
    .pipe(
      map((response) => {
        return response;
      })
    )
  }
}
