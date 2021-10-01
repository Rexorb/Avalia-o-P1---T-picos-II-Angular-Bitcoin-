import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: { updated: string };
  disclaimer: string;
  bpi: {
    [key in 'USD' | 'BRL']: {
      code: string;
      description: string;
      rate_float: number;
      rate: string;
    };
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  BRL: number;
}

interface EUR {
  time: { updated: string };
  disclaimer: string;
  bpi: {
    [key in 'EUR']: {
      code: string;
      description: string;
      rate_float: number;
      rate: string;
    };
  };
}

interface eurUpdate {
  timestamp: Date;
  EUR: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;
  currentEURPrice: EUR;
  lastUpdate: Date;
  updateList: Array<PriceUpdate> = [];
  updateEURList: Array<eurUpdate> = [];

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/brl.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
        this.updateList.push({
          timestamp: this.lastUpdate,
          BRL: this.currentPrice.bpi.BRL.rate_float,
          USD: this.currentPrice.bpi.USD.rate_float,
        });
      });
  }
  updateEUR() {
    this.http
      .get<EUR>('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();
        this.currentEURPrice = data;
        this.updateEURList.push({
          timestamp: this.lastUpdate,
          EUR: this.currentEURPrice.bpi.EUR.rate_float,
        });
      });
  }
}
