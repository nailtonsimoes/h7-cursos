import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Modulo } from '../model/modulo';
import { ModulosService } from '../services/modulos.service';



@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  modulos$: Observable <Modulo[]>;
  displayedColumns = ['nome','actions'];

 // modulosService: ModulosService;

  constructor(private modulosService: ModulosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    //this.modulosService = new ModulosService();
    this.modulos$ = this.modulosService.list().pipe(
      catchError(error => {
        this.onError('Falha no carregamento de modulos')
        return of([])
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    }); 
  }
  ngOnInit(): void {
    
  }
  //metodo que leva a rota ate o componente usando rota ativa e relativa ao componente
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
  
