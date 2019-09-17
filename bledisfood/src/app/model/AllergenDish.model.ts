import { Dish } from './Dish.model';
import { Allergen } from './Allergen.model';

export class AllergenDish {
    id: number;
    allergen: number;
    dish: number;

    static createAllergenDish(dish:number,allergen:number) : AllergenDish{
        const allergenDish = new AllergenDish();
        allergenDish.dish = dish;
        allergenDish.allergen = allergen;
        return allergenDish;
    }    
}
