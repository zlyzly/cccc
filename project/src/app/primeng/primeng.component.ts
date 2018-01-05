import { Component, OnInit } from '@angular/core';
import { CarService } from './carService';
@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent implements OnInit {
  cars: object[] = [];
  sales: any[];
  tree: object[] = [];
  files: object[] = [];
  constructor(private carService: CarService) { }

  ngOnInit() {
    // this.cars = [
    //   { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    //   { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    //   { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    //   { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    //   { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
    //   { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
    //   { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
    //   { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
    //   { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
    //   { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
    // ];
    // // console.log(this.cars);
    // this.sales = [
    //   { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
    //   { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
    //   { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
    //   { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
    //   { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
    //   { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
    //   { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
    //   { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
    //   { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
    //   { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
    // ];
    this.sales = this.carService.getData().data;
    this.tree = this.carService.getTree();
    this.files = this.carService.gettree1();
  }

}
