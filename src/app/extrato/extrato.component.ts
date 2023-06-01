import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {


  transferencias: any[] = []
  soma: number

  constructor(private service: TransferenciaService ) { }

  ngOnInit(): void {
    // this.transferencias = this.service.transferencias
    // this.soma = this.service.somatorio
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias

      // // método para calcular o somatório das transações??
      this.soma = 0
      for( let i =0; i < this.transferencias.length; i++){
        this.soma += this.transferencias[i]?.valor
      }
      console.log("Soma das transações: ", this.soma)

    })
  }



}
