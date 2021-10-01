import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-RobertoCurrency',
  templateUrl: './RobertoCurrency.component.html',
  styleUrls: ['./RobertoCurrency.component.css'],
})
export class RobertoCurrencyComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.update();
  }

  update() {
    this.bitcoinService.update();
    this.bitcoinService.updateEUR();
  }

  getPrice() {
    return this.bitcoinService.currentPrice;
  }
  getEURPrice(){
    return this.bitcoinService.currentEURPrice;
  }
}
