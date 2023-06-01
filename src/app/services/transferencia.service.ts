import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listTransferencia: any[]
private soma: number
private url = 'http://localhost:3000/transferencias'


constructor( private httpClient: HttpClient ) {
  this.listTransferencia = []
 }

 get transferencias(){
   return this.listTransferencia
 }

 get somatorio(){
   return this.soma
 }

 todas(): Observable<Transferencia[]>{
   return this.httpClient.get<Transferencia[]>(this.url)
 }

 adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia)
  this.listTransferencia.push(transferencia)

  return this.httpClient.post<Transferencia>(this.url, transferencia)
 }

 hidratar(transferencia: any){
  transferencia.data = new Date()
 }
}
