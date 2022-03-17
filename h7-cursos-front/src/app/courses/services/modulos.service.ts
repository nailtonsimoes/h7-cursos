import { Injectable } from '@angular/core';
import { Modulo } from '../model/modulo';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/internal/operators/tap';
import { first , delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  private readonly API = 'api/modulos';

  constructor(private httpClient: HttpClient) { }

  list () {
    return this.httpClient.get<Modulo[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(modulos => console.log(modulos) )
    );
  }

  Adicionar (modulo: Modulo){
    
    return this.httpClient.post<Modulo>(`${this.API}/adicionar`, modulo);
  }

  atualizar (id: number, modulo: Modulo){
    return this.httpClient.put<Modulo>(`${this.API}/editar/${id}`, modulo)
  }

  deletar (id: number){
    return this.httpClient.delete<Modulo>(`${this.API}/deletar/${id}`)
  }
}
