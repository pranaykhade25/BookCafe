import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  onEdit(_t62: any) {
  throw new Error('Method not implemented.');
  }
  onDelete(_t62: any) {
  throw new Error('Method not implemented.');
  }
   
    message: string | undefined;
  itemList: any;
  deleteMessage: any;
    constructor(public service: ItemService, private fireStore: AngularFirestore) { }
   
    ngOnInit() {
      this.resetForm();
    }
   
    resetForm(form?: NgForm) {
      if (form != null) {
        form.resetForm();
      }
      this.service.formData = {
        id:' ',
        itemName:'',
        date: '',
        cat:'',
        note: ''
      }
    }
   
    onSubmit(form: NgForm) {
      // Reset the message value.
      this.message = '';
   
      // Making the copy of the form and assigning it to the studentData.
      let itemData = Object.assign({}, form.value);
   
      // To avoid messing up the document id and just update the other details of the student. We will remove the 'property' from the student data.
      delete itemData.id;
   
      // Does the insert operation.
      if (form.value.id == null) {
        this.fireStore.collection('items').add(itemData);
        this.message = itemData.itemName + ' information is successfully saved!';
      } else {
        // Does the update operation for the selected student.
        // The 'studentData' object has the updated details of the student.
        this.fireStore.doc('items/' + form.value.id).update(itemData);
        this.message = 'Item successfully updated!';
      }
   
      // Reset the form if the operation is successful.
      this.resetForm(form);
    }
  }
