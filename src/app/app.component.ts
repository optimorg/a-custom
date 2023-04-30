import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { OrderListComponent } from './order-list/order-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acustom';
  items: Observable<any[]>;
  constructor(
    firestore: AngularFirestore,
    public dialog: MatDialog
    ) {
    this.items = firestore.collection('items').valueChanges();
  }
  openOrderDialog(){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(CustomerFormComponent, dialogConfig)
  }
  openOrderListDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(OrderListComponent, dialogConfig)
  }
}
