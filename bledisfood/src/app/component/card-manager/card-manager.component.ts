import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { Dish } from 'src/app/model/Dish.model';
import { FoodService } from 'src/app/service/food.service';
import { MatSlideToggleChange, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Vendor } from 'src/app/model/Vendor.model';
import { VendorService } from 'src/app/service/vendor.service';


@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.scss']
})
export class CardManagerComponent implements OnInit {

  @Input() dish: Dish;
  dishVendor = new Vendor();
  dishPhoto: string;
  vendorPhoto: string;
  isActive: boolean;
  user = new User();
  checked: Boolean;
  autoRenew;
  isReady = false;
  base64 = 'data:image/jpeg;base64,';
  dialogRef: MatDialogRef<DialogConfirmDelete>;
  constructor(private foodService: FoodService, private vs: VendorService, private router: Router, public dialog: MatDialog) { }

  @Output()
  change: EventEmitter<MatSlideToggleChange>;

  ngOnInit() {
    this.isActive = this.dish.isActive;
    this.dishVendor = this.dish.vendor;
    this.dishPhoto = this.base64 + this.dish.photo;
    this.vendorPhoto = this.base64 + this.dishVendor.photo;
    this.isReady = true;
    this.autoRenew = this.dish.isActive;
    
    localStorage.setItem('dish', this.dish.id.toString());

    setTimeout(function () {
      const card = document.getElementById('card' + this.dish.id);
      if (this.dish.isActive) {
        card.style.setProperty('filter', 'grayScale(0)');
      } else {
        card.style.setProperty('filter', 'grayScale(1)');
      }
    }, 0);
  }

  onChange(ob: MatSlideToggleChange) {
    const card = document.getElementById('card' + this.dish.id);
    this.isActive = ob.checked;
    this.dish.isActive = this.isActive;
    this.foodService.modifyDish(this.dish).subscribe();
    if (ob.checked) {
      card.style.setProperty('filter', 'grayScale(0)');
    } else {
      card.style.setProperty('filter', 'grayScale(1)');
    }
  }

  openModal() {
    this.dialogRef = this.dialog.open(DialogConfirmDelete);
  }

  deleteDish(id: number) {
    this.foodService.removeDish(id).subscribe();
    window.location.reload();
  }

}

@Component({
  selector: 'app-card-delete',
  templateUrl: 'confirm-delete.html',
  providers: [CardManagerComponent]
})
export class DialogConfirmDelete {

  constructor(private cardManager: CardManagerComponent, private snackBar: MatSnackBar) { }

  doDelete() {
    const id = localStorage.getItem('dish');
    this.cardManager.deleteDish(parseInt(id));
    this.snackBar.open('Le plat a bien été supprimé !', 'Fermer', {
      duration: 3000,
      // here specify the position
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}

