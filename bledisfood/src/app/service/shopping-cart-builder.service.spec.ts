import { TestBed } from '@angular/core/testing';

import { ShoppingCartBuilderService } from './shopping-cart-builder.service';

describe('ShoppingCartBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartBuilderService = TestBed.get(ShoppingCartBuilderService);
    expect(service).toBeTruthy();
  });
});
