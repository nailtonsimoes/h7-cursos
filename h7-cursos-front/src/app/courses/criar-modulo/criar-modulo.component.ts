import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../services/modulos.service';
import { catchError, Observable, of } from 'rxjs';
import { Modulo } from '../model/modulo';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-criar-modulo',
  templateUrl: './criar-modulo.component.html',
  styleUrls: ['./criar-modulo.component.scss']
})
export class CriarModuloComponent implements OnInit {

  modulo: Modulo = new Modulo;
 // form!: FormGroup;

  constructor(private modulosService: ModulosService) { }

  ngOnInit(): void {
   /*  this.form = this.fb.group({
      nome: ['']
      }); */
  }
  
  adicionarModulo (){

    this.modulosService.Adicionar(this.modulo).subscribe(
      (modulo: Modulo) =>{
        alert('Adicionado com sucesso!')
      }
    );
  }
  
  atualizarModulo (){

    this.modulosService.atualizar(this.modulo.id,this.modulo ).subscribe(
      (modulo: Modulo) =>{
        alert('Atualizado com sucesso!')
      }
    );
  }

  deletarModulo (){
    this.modulosService.deletar(this.modulo.id).subscribe(
      (modulo: Modulo) =>{
        alert('Deletado com sucesso!')
      }
    );
  }

 
}
