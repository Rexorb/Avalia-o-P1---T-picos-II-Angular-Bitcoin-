import { BitcoinService } from '../bitcoin.service';
import { Component, OnInit } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-RobertoWallet',
  templateUrl: './RobertoWallet.component.html',
  styleUrls: ['./RobertoWallet.component.css'],
})
export class RobertoWalletComponent implements OnInit {
  saldo = 1000;
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
  getEURPrice() {
    return this.bitcoinService.currentEURPrice;
  }

  comprarBitcoin() {
    this.saldo += 100;
    this.update();
  }

  venderBitcoin() {
    this.saldo -= 100;
  }
}
