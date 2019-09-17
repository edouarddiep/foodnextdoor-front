import { User } from './User.model';

export class Vendor {
    id: number;
    rating: number;
    IBAN: string;
    user: User;
    photo: string;
    no_rue: string;
    adresse: string;
    code_postal: number;
    ville: string;
    pays: string;

    static createVendor(user: any, photo: string): Vendor {
        const vendor = new Vendor();
        vendor.adresse = user.adresse;
        vendor.code_postal = user.code_postal;
        vendor.IBAN = user.IBAN;
        vendor.rating = 4;
        vendor.no_rue = user.no_rue;
        vendor.ville = user.ville;
        vendor.pays = 'Suisse';
        vendor.user = user;
        vendor.photo = photo;
        return vendor;
    }
}