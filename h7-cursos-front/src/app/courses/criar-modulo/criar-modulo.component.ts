import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../services/modulos.service';
import { Modulo } from '../model/modulo';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-criar-modulo',
  templateUrl: './criar-modulo.component.html',
  styleUrls: ['./criar-modulo.component.scss']
})
export class CriarModuloComponent implements OnInit {

  form: UntypedFormGroup;

  modulo: Modulo = new Modulo;


  constructor(private formBuilder: UntypedFormBuilder,
    private modulosService: ModulosService,
    private _snackBar: MatSnackBar,
    private location: Location
    ) { 
      this.form = this.formBuilder.group({
        nome: [null]
      });
    }

  ngOnInit(): void {
  }
  
  //metodo que liga o botão salvar ao serviço de criar curso
  onSubmit(){
    this.modulosService.adicionar(this.form.value)
    .subscribe(modulo => this.onSuccess(), error => this.onError());
  }
  //metodo usando a biblioteca location do angular common para voltar a pagina
  onCancel(){
    this.location.back();
  }

  //metodo para exibir mensagem de erro

  private onError() {
    this._snackBar.open("Erro ao Salvar Curso!", "", {duration: 3000});
  }

  private onSuccess() {
    this._snackBar.open("Curso salvo com sucesso!!", "", {duration: 3000});
    this.onCancel();
  }
  
    // atualizarModulo (){

    //   this.modulosService.atualizar(this.modulo._id , this.modulo ).subscribe(
    //     (modulo: Modulo) =>{
    //       alert('Atualizado com sucesso!')
    //     }
    //   );
    // }

    // deletarModulo (){
    //   this.modulosService.deletar(this.modulo._id).subscribe(
    //     (modulo: Modulo) =>{
    //       alert('Deletado com sucesso!')
    //     }
    //   );
    // }

 
}
