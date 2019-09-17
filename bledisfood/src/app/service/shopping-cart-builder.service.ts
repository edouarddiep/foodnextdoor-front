import { Injectable, Injector } from "@angular/core";
import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ShoppingCartComponent } from "../component/shopping-cart/shopping-cart.component";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";

interface ShoppingCartConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: ShoppingCartConfig = {
  hasBackdrop: true,
  backdropClass: "dark-backdrop"
};

@Injectable({
  providedIn: "root"
})
export class ShoppingCartBuilderService {
  overlayRef: OverlayRef;
  shoppingCartPortal: ComponentPortal<ShoppingCartComponent>;
  isSingleton = false;

  constructor(private overlay: Overlay, private injector: Injector) { }

  instantiate(config: ShoppingCartConfig = {}) {
    if (this.isSingleton) {
      return;
    }
    this.isSingleton = true;
    const shoppingCartConfig = { ...DEFAULT_CONFIG, ...config };
    this.overlayRef = this.createOverlay(shoppingCartConfig);
    const injector = this.createInjector(this.overlayRef, this.injector);
    this.shoppingCartPortal = new ComponentPortal(
      ShoppingCartComponent,
      null,
      injector
    );
    return this.overlayRef;
  }

  createInjector(overlayRef: OverlayRef, injector: Injector): PortalInjector {
    const tokens = new WeakMap([[OverlayRef, overlayRef]]);
    return new PortalInjector(injector, tokens);
  }

  createOverlay(config: ShoppingCartConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  getOverlayConfig(config: ShoppingCartConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .top("33px")
      .right("0");

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy
    });

    return overlayConfig;
  }

  open() {
    this.overlayRef.attach(this.shoppingCartPortal);
    this.overlayRef.backdropClick().subscribe(_ => this.overlayRef.detach());
  }

  getOverlay(): OverlayRef {
    return this.overlayRef;
  }
}