import { Dish } from './Dish.model';
import { User } from './User.model';

export class Comment {
    id: number;
    body: string;
    date: Date;
    dish: Dish;
    user: User;
}
