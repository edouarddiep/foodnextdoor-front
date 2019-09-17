// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const URL = {
  serv: '127.0.0.1:8000',
  domaine: 'http://127.0.0.1:8000',
  token: '/api/token/',
  customer: {
    verb: '/customers/',
    filter_name: '?name__icontains=',
  },
  vendor: {
    verb: '/vendors/',
    filter_name: '?name__icontains=',
    filter_npa: '?code_postal=',
  },
  dish: {
    verb: '/dishes/',
    filter_name: '?name__icontains=',
    filter_country: '?country__in=',
    filter_vegan: 'isVegan__icontains=true',
    filter_halal: 'isHalal__icontains=true',
  },
  invoice: {
    verb: '/invoices/',
    filter_name: '?name__icontains=',
  },
  comment: {
    verb: '/comments/',
    filter_name: '?name__icontains=',
  },
  allergen: {
    verb: '/allergens/',
    filter_name: '?name__icontains=',
  },
  allergenDish: {
    verb: '/allergenDish/',
    filter_name: '?name__icontains=',
  },
  user: {
    verb: 'users/',
    filter_name: '?name__icontains=',
  },
  auth: {
    verb: '/accounts/register/',
    created: '?name__icontains=',
  },
  typeDish: {
    verb: '/typeDish/',
    filter_name: '?name__icontains=',
  },
  orders: {
    verb: '/orders/',
    filter_name: '?name__icontains=',
  },
  detailedOrders: {
    verb: '/detailed-orders/',
    filter_name: '?name__icontains=',
  },
  contents: {
    verb: '/contents/',
    filter_name: '?name__icontains=',
  },
};
