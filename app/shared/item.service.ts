import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from './item.model';
 
@Injectable({
  providedIn: 'root'
})
 
export class ItemService {

 
  constructor(private fireStore: AngularFirestore) { }
 
  // Student form data.
  formData: Item = new Item;
 
  // Fetch all students information.
  getAllItems() {
    
    return this.fireStore.collection('items').snapshotChanges();
 
    // We will use the id in order to perform the update or delete operation.
  }
}