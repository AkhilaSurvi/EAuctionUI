import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import {IBuyerBidData} from './model/buyerBidDetails';

import {retry,catchError} from 'rxjs/operators';

import { throwError } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class ShowBidService {

 

  constructor(private http:HttpClient) { }

 

  //Base Url

  baseurl = 'http://localhost:8080/e-auction/api/v1/seller/show-bids/';

 

  //HttpHeaders

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type':'application/json'

    }),

  };

 

  getBidDetailsForProduct(data:String){

    return this.http.get<IBuyerBidData>(

      this.baseurl + data

    ).pipe(retry(1),catchError(this.errorHandl));

  }

 

  //Error Handling

  errorHandl(error:any){

      let errorMessage='';

      if(error.error instanceof ErrorEvent){

        //Get client-side error

        errorMessage = error.error.message;

      }

      else{

        //Get server-side error

        errorMessage = 'Error Code: ${error.status} \n Message: ${error.message}';

      }

      console.log(errorMessage);

      return throwError(()=>{

        return errorMessage;

      });

  }

 

}

 

 