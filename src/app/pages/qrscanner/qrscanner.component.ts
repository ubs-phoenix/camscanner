import { Component, OnInit } from '@angular/core';

import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  constructor() { }

  ngOnInit() {
  }

  camerasFoundHandler(msg){
    console.log(msg);
  }

  scanSuccessHandler(msg){
    console.log(msg);

  }

  scanErrorHandler(msg){
    console.log(msg);

  }

  scanFailureHandler(msg){
    console.log(msg);

  }

  scanCompleteHandler(msg){
    console.log(msg);

  }

}
