import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
 
export class PWAServiceService {
 promptEvent: any;

  constructor(private swUpdate : SwUpdate, ) {
    swUpdate.available.subscribe(event=> {
      if(true){
        window.location.reload();
      }
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });

    this.promf();
   }


   promf(){
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
   }

}


