export const environment = {
  production: true
};

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
    filter_npa: '?code_postal__icontains=',
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
};
