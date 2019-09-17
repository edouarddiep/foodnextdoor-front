import { Allergen } from './Allergen.model';
import { Vendor } from './Vendor.model';
import { Typedish } from './Typedish.model';
import { CountryService } from '../service/country.service';

export class Dish {
    id: number;
    name: string;
    price: number;
    country: string;
    howSpicy: number;
    isVegan: boolean;
    isHalal: boolean;
    photo: string;
    isActive: boolean;
    rating: number;
    vendor: Vendor;
    allergens: Array<Allergen>;

    static createDish(values: any, cs: CountryService, v: Vendor, photo: string, allergens: Array<Allergen>): Dish {
        const dish = new Dish();
        dish.name = values.name;
        dish.price = values.price;
        dish.country = cs.getCode(values.country);
        dish.howSpicy = values.howSpicy;
        dish.isVegan = values.isVegan;
        dish.isHalal = values.isHalal;
        dish.isActive = true;
        dish.rating = null;
        dish.photo = photo;
        dish.vendor = v;
        dish.allergens = allergens;
        return dish;
    }
}
