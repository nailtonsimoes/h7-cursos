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
      tap((modulos:Modulo[]) => console.log(modulos) )
    );
  }

  adicionar (modulo: Modulo){
    return this.httpClient.post<Modulo>(`${this.API}/adicionar`, modulo).pipe(first());  //esse pipe first .pipe(first())
  }

  atualizar (id: string, modulo: Modulo){
    return this.httpClient.put<Modulo>(`${this.API}/editar/${id}`, modulo)
  }

  deletar (id: string){
    return this.httpClient.delete<Modulo>(`${this.API}/deletar/${id}`)
  }
}
