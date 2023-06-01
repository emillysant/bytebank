import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NovaTranferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';

registerLocaleData( localePT, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,
    ExtratoComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt',   },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
