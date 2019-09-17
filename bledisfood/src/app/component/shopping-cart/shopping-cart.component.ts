import { Component, EventEmitter, OnInit } from "@angular/core";
import { Dish } from "src/app/model/Dish.model";
import { OverlayRef } from "@angular/cdk/overlay";
import { ShoppingCartService } from "src/app/service/shopping-cart.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { DeviceDetectorService } from "ngx-device-detector";
import { Router } from "@angular/router";
import { ShoppingCartBuilderService } from "src/app/service/shopping-cart-builder.service";

const ANIMATION_TIMINGS = "400ms cubic-bezier(0.25, 0.8, 0.25, 1)";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
  animations: [
    trigger("fade", [
      state("fadeOut", style({ opacity: 0 })),
      state("fadeIn", style({ opacity: 1 })),
      transition("* => fadeIn", animate(ANIMATION_TIMINGS))
    ]),
    trigger("slideContent", [
      state(
        "void",
        style({ transform: "translate3d(0, 25%, 0) scale(0.9)", opacity: 0 })
      ),
      state("enter", style({ transform: "none", opacity: 1 })),
      state(
        "leave",
        style({ transform: "translate3d(0, 25%, 0)", opacity: 0 })
      ),
      transition("* => *", animate(ANIMATION_TIMINGS))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {
   distinctItems: Array<Dish>;
   items: Array<Dish>;
   itemCounter: Map<number, number>;
   cartTotal = 0;
   isMobSafari = false;
   deviceInfo = this.deviceService.getDeviceInfo();

  animationState: "void" | "enter" | "leave" = "enter";
  animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor(
    private shoppingCartService: ShoppingCartService,
    private deviceService: DeviceDetectorService,
    private router: Router,
    private overlayRef: OverlayRef
  ) { }

  ngOnInit() {
    this.shoppingCartService.getCounterToAdd().subscribe(itemCounter => {
      this.itemCounter = itemCounter;
    });
    this.loadCartItems();
    if (
      this.deviceInfo.browser === "Safari" &&
      this.deviceInfo.device === "iPhone"
    ) {
      this.isMobSafari = true;
    }
    this.setPadding(this.isMobSafari);
  }

  // Updates the total price for all items in the cart
  getCartTotal() {
    if (this.items.length > 0) {
      this.items.forEach(item => {
        this.cartTotal += item.price;
      });
      return this.cartTotal;
    }
  }

  // Retrieves the list of items and generates a new list of unique ones for display
  loadCartItems() {
    this.shoppingCartService.getItemsToAdd().subscribe(items => {
      this.cartTotal = 0;
      this.items = items;
      this.distinctItems = this.getUnique(items, "id");
      this.getCartTotal();
    });
  }

  // Removes duplicate items for display in the cart
  getUnique(arr, comp) {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }

  // Opens order summary page
  order() {
    const shoppingCart = document.getElementById("shopping-cart");
    this.shoppingCartService.pushItemsToOrder(
      this.distinctItems,
      this.itemCounter
    );
    shoppingCart.style.setProperty('opacity', '0');
    setTimeout(() => {
        this.overlayRef.detach();
    }, 500);
    this.router.navigate(["order-summary"]);
  }

  onAnimationStart(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = "leave";
  }

  setPadding(isSafari) {
    const shoppingCart = document.getElementById("shopping-cart");
    if (isSafari) {
      shoppingCart.style.setProperty("padding-bottom", "90px");
    } else {
      shoppingCart.style.setProperty("padding-bottom", "20px");
    }
  }
}