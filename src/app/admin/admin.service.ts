import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    
    
    
  constructor(private db : AngularFireDatabase) { }
   
    

    getRequests(user: firebase.User) {
      
    return  this.db.list('/Requests/').snapshotChanges().pipe(map(changes => changes
        .map(c => ({key: c.payload.key, ...c.payload.val()}))));
    
    
    }

    update(key, isApproved){
        this.db.object('Requests/'+key).update({
            isApproved : isApproved
        });
    }

 

   
}
