import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RobertoWalletComponent } from './RobertoWallet/RobertoWallet.component';
import { RobertoCurrencyComponent } from './RobertoCurrency/RobertoCurrency.component';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'Wallet', component: RobertoWalletComponent },
      { path: 'Currency', component: RobertoCurrencyComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RobertoWalletComponent,
    RobertoCurrencyComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BitcoinService],
})
export class AppModule {}
