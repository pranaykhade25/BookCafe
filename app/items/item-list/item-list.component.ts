import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ItemService } from 'src/app/shared/item.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  deleteMessage: string | undefined;
  itemList: Item[] = [];
  constructor(private service: ItemService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.service.getAllItems().subscribe((response: any[]) => {
      this.itemList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as Item;
      })
      // Sorting the item-list in ascending order.
      this.itemList = this.itemList.sort((obj1, obj2) => (obj1 as any).quantity - (obj2 as any).quantity);
    });
  }
 
  onEdit(item: Item) {
    this.service.formData = Object.assign({}, item);
  }
 
  onDelete(item: Item) {
    this.fireStore.doc('items/' + item.id).delete();
    this.deleteMessage = item.itemName + ' information is successfully deleted!';
  }
}