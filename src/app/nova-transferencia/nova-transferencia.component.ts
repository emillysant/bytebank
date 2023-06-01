import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTranferenciaComponent {

  @Output() onTranfer = new EventEmitter<any>();

  valor: number
  destino: string

  constructor(private service: TransferenciaService, private router: Router ){

  }

  transferir() {
    console.log('Solicitada nova transferencia')

    const emitValue: Transferencia = {valor: this.valor, destino: this.destino}
    this.onTranfer.emit(emitValue)

    //
    this.service.adicionar(emitValue).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    },
     (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0
    this.destino = ""
  }
}
