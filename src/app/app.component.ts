import { Component } from '@angular/core';

import { ShowBidService } from './show-bid.service';

 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'e-auction-frontend';

  showValidationError:boolean=false;

  validationError:any='';

  bids:any='';

  showBidData:boolean=false;

 

  constructor(private showBidService:ShowBidService) { }

 

  searchBids(){

    this.showValidationError = false;

    var productId = (<HTMLInputElement>document.getElementById("prdId")).value;

    if(productId==''){

      this.showValidationError=true;

      this.validationError='Please enter ProductId to proceed';

      return;

    }

    this.showBidService.getBidDetailsForProduct(productId).subscribe((res)=>{

      this.bids = res;

      this.showBidData=true;

    });

  }

}

 

 