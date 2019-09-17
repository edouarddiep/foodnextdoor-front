import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getNames(): Array<string>{
    const { getNames, overwrite } = require('country-list');
    overwrite([{
      code: 'AL',
      name: 'Albanie'
    }]);
    overwrite([{
      code: 'DZ',
      name: 'Algérie'
    }]);
    overwrite([{
      code: 'AD',
      name: 'Andorre'
    }]);
    overwrite([{
      code: 'AI',
      name: 'Anguilles'
    }]);
    overwrite([{
      code: 'AQ',
      name: 'Antarctique'
    }]);
    overwrite([{
      code: 'AR',
      name: 'Argentine'
    }]);
    overwrite([{
      code: 'AM',
      name: 'Arménie'
    }]);
    overwrite([{
      code: 'AU',
      name: 'Australie'
    }]);
    overwrite([{
      code: 'AT',
      name: 'Autriche'
    }]);
    overwrite([{
      code: 'AZ',
      name: 'Azerbaidjan'
    }]);
    overwrite([{
      code: 'BY',
      name: 'Biélorussie'
    }]);
    overwrite([{
      code: 'BE',
      name: 'Belgique'
    }]);
    overwrite([{
      code: 'BZ',
      name: 'Bélize'
    }]);
    overwrite([{
      code: 'BO',
      name: 'Bolivie'
    }]);
    overwrite([{
      code: 'BA',
      name: 'Bosnie-Herzégovine'
    }]);
    overwrite([{
      code: 'BR',
      name: 'Brésil'
    }]);
    overwrite([{
      code: 'BG',
      name: 'Bulgarie'
    }]);
    overwrite([{
      code: 'KH',
      name: 'Cambodge'
    }]);
    overwrite([{
      code: 'CM',
      name: 'Cameroun'
    }]);
    overwrite([{
      code: 'CV',
      name: 'Cap Vert'
    }]);
    overwrite([{
      code: 'KY',
      name: 'Îles Caïmans'
    }]);
    overwrite([{
      code: 'CF',
      name: 'République d\'Afrique Centrale'
    }]);
    overwrite([{
      code: 'CL',
      name: 'Chili'
    }]);
    overwrite([{
      code: 'CN',
      name: 'Chine'
    }]);
    overwrite([{
      code: 'CO',
      name: 'Colombie'
    }]);
    overwrite([{
      code: 'CD',
      name: 'République Démocratique du Congo'
    }]);
    overwrite([{
      code: 'HR',
      name: 'Croatie'
    }]);
    overwrite([{
      code: 'CY',
      name: 'Chypre'
    }]);
    overwrite([{
      code: 'CZ',
      name: 'République Tchèque'
    }]);
    overwrite([{
      code: 'CI',
      name: 'Côte d\'Ivoire'
    }]);
    overwrite([{
      code: 'DK',
      name: 'Danemark'
    }]);
    overwrite([{
      code: 'DO',
      name: 'République Dominicaine'
    }]);
    overwrite([{
      code: 'EC',
      name: 'Équateur'
    }]);
    overwrite([{
      code: 'EG',
      name: 'Égypte'
    }]);
    overwrite([{
      code: 'GQ',
      name: 'Guinée équatoriale'
    }]);
    overwrite([{
      code: 'ER',
      name: 'Érythrée'
    }]);
    overwrite([{
      code: 'EE',
      name: 'Estonie'
    }]);
    overwrite([{
      code: 'ET',
      name: 'Ethiopie'
    }]);
    overwrite([{
      code: 'FO',
      name: 'Îles Féroé'
    }]);
    overwrite([{
      code: 'FI',
      name: 'Finlande'
    }]);
    overwrite([{
      code: 'GF',
      name: 'Guinée française'
    }]);
    overwrite([{
      code: 'PF',
      name: 'Polynésie française'
    }]);
    overwrite([{
      code: 'GM',
      name: 'Gambie'
    }]);
    overwrite([{
      code: 'GE',
      name: 'Géorgie'
    }]);
    overwrite([{
      code: 'DE',
      name: 'Allemagne'
    }]);
    overwrite([{
      code: 'GR',
      name: 'Grèce'
    }]);
    overwrite([{
      code: 'GN',
      name: 'Guinée'
    }]);
    overwrite([{
      code: 'GY',
      name: 'Guyanne'
    }]);
    overwrite([{
      code: 'HU',
      name: 'Hongrie'
    }]);
    overwrite([{
      code: 'IS',
      name: 'Islande'
    }]);
    overwrite([{
      code: 'IN',
      name: 'Inde'
    }]);
    overwrite([{
      code: 'ID',
      name: 'Indonésie'
    }]);
    overwrite([{
      code: 'IR',
      name: 'Iran'
    }]);
    overwrite([{
      code: 'IE',
      name: 'Irlande'
    }]);
    overwrite([{
      code: 'IT',
      name: 'Italie'
    }]);
    overwrite([{
      code: 'JM',
      name: 'Jamaïque'
    }]);
    overwrite([{
      code: 'JP',
      name: 'Japon'
    }]);
    overwrite([{
      code: 'KP',
      name: 'Corée'
    }]);
    overwrite([{
      code: 'KG',
      name: 'Kirghizistan'
    }]);
    overwrite([{
      code: 'LV',
      name: 'Lettonie'
    }]);
    overwrite([{
      code: 'LY',
      name: 'Lybie'
    }]);
    overwrite([{
      code: 'LT',
      name: 'Lituanie'
    }]);
    overwrite([{
      code: 'MY',
      name: 'Malaisie'
    }]);
    overwrite([{
      code: 'MT',
      name: 'Malte'
    }]);
    overwrite([{
      code: 'MH',
      name: 'Îles Marshall'
    }]);
    overwrite([{
      code: 'MR',
      name: 'Mauritanie'
    }]);
    overwrite([{
      code: 'MX',
      name: 'Mexique'
    }]);
    overwrite([{
      code: 'MN',
      name: 'Mongolie'
    }]);
    overwrite([{
      code: 'MA',
      name: 'Maroc'
    }]);
    overwrite([{
      code: 'NA',
      name: 'Namibie'
    }]);
    overwrite([{
      code: 'NP',
      name: 'Népal'
    }]);
    overwrite([{
      code: 'NL',
      name: 'Pays-Bas'
    }]);
    overwrite([{
      code: 'NC',
      name: 'Nouvelle-Calédonie'
    }]);
    overwrite([{
      code: 'NZ',
      name: 'Nouvelle-Zélande'
    }]);
    overwrite([{
      code: 'NO',
      name: 'Norvège'
    }]);
    overwrite([{
      code: 'PS',
      name: 'Palestine'
    }]);
    overwrite([{
      code: 'PE',
      name: 'Pérou'
    }]);
    overwrite([{
      code: 'PL',
      name: 'Pologne'
    }]);
    overwrite([{
      code: 'RO',
      name: 'Roumanie'
    }]);
    overwrite([{
      code: 'RU',
      name: 'Russie'
    }]);
    overwrite([{
      code: 'RE',
      name: 'Réunion'
    }]);
    overwrite([{
      code: 'BL',
      name: 'Saint-Barthélemy'
    }]);
    overwrite([{
      code: 'SH',
      name: 'Saint-Hélène'
    }]);
    overwrite([{
      code: 'LC',
      name: 'Saint-Lucie'
    }]);
    overwrite([{
      code: 'SA',
      name: 'Arabie Saoudite'
    }]);
    overwrite([{
      code: 'SN',
      name: 'Sénégal'
    }]);
    overwrite([{
      code: 'RS',
      name: 'Serbie'
    }]);
    overwrite([{
      code: 'SG',
      name: 'Singapour'
    }]);
    overwrite([{
      code: 'SK',
      name: 'Slovaquie'
    }]);
    overwrite([{
      code: 'SI',
      name: 'Slovénie'
    }]);
    overwrite([{
      code: 'SB',
      name: 'Îles Salomon'
    }]);
    overwrite([{
      code: 'SO',
      name: 'Somalie'
    }]);
    overwrite([{
      code: 'ZA',
      name: 'Afrique du Sud'
    }]);
    overwrite([{
      code: 'GS',
      name: 'Géorgie du Sud'
    }]);
    overwrite([{
      code: 'SS',
      name: 'Sudan du Sud'
    }]);
    overwrite([{
      code: 'ES',
      name: 'Espagne'
    }]);
    overwrite([{
      code: 'SZ',
      name: 'Eswatini'
    }]);
    overwrite([{
      code: 'SE',
      name: 'Suède'
    }]);
    overwrite([{
      code: 'CH',
      name: 'Suisse'
    }]);
    overwrite([{
      code: 'SY',
      name: 'Syrie'
    }]);
    overwrite([{
      code: 'TJ',
      name: 'Tadjikistan'
    }]);
    overwrite([{
      code: 'TZ',
      name: 'Tanzanie'
    }]);
    overwrite([{
      code: 'TH',
      name: 'Thaïlande'
    }]);
    overwrite([{
      code: 'TN',
      name: 'Tunisie'
    }]);
    overwrite([{
      code: 'TR',
      name: 'Turquie'
    }]);
    overwrite([{
      code: 'TM',
      name: 'Turkménistan'
    }]);
    overwrite([{
      code: 'AE',
      name: 'Émirats Arabes Unis'
    }]);
    overwrite([{
      code: 'GB',
      name: 'Royaume-Uni'
    }]);
    overwrite([{
      code: 'US',
      name: 'États-Unis'
    }]);
    overwrite([{
      code: 'UZ',
      name: 'Ouzbékistan'
    }]);
    overwrite([{
      code: 'VE',
      name: 'Vénézuela'
    }]);
    overwrite([{
      code: 'VN',
      name: 'Viêt Nam'
    }]);
    overwrite([{
      code: 'ZM',
      name: 'Zambie'
    }]);
    overwrite([{
      code: 'AS',
      name: 'Samoa américaines'
    }]);
    overwrite([{
      code: 'IO',
      name: 'Territoire britannique de l\'océan Indien'
    }]);
    overwrite([{
      code: 'BN',
      name: 'Brunei'
    }]);
    overwrite([{
      code: 'CX',
      name: 'Îles Christmas (Australie)'
    }]);
    overwrite([{
      code: 'CC',
      name: 'Îles Cocos'
    }]);
    overwrite([{
      code: 'CK',
      name: 'Îles Cook'
    }]);
    overwrite([{
      code: 'FK',
      name: 'Îles Malouines'
    }]);
    overwrite([{
      code: 'HM',
      name: 'Îles Heard-et-MacDonald'
    }]);
    overwrite([{
      code: 'VA',
      name: 'Le Vatican'
    }]);
    overwrite([{
      code: 'LA',
      name: 'Laos'
    }]);
    overwrite([{
      code: 'LS',
      name: 'Lesotho'
    }]);
    overwrite([{
      code: 'MK',
      name: 'Macédoine'
    }]);
    overwrite([{
      code: 'FM',
      name: 'Micronésie'
    }]);
    overwrite([{
      code: 'MP',
      name: 'Îles Mariannes du Nord'
    }]);
    overwrite([{
      code: 'BQ',
      name: 'Bonaire'
    }]);
    overwrite([{
      code: 'DM',
      name: 'Dominique'
    }]);
    overwrite([{
      code: 'GG',
      name: 'Guernesey'
    }]);
    overwrite([{
      code: 'TF',
      name: 'Terres australes et antarctiques françaises'
    }]);
    overwrite([{
      code: 'BV',
      name: 'Île Bouvet'
    }]);
    overwrite([{
      code: 'AX',
      name: 'Île Åland'
    }]);
    overwrite([{
      code: 'AG',
      name: 'Antigua-et-Barbuda'
    }]);
    overwrite([{
      code: 'MD',
      name: 'Moldavie'
    }]);
    overwrite([{
      code: 'MU',
      name: 'Maurice'
    }]);
    overwrite([{
      code: 'NF',
      name: 'Île Norfolk'
    }]);
    overwrite([{
      code: 'PG',
      name: 'Papouasie-Nouvelle-Guinée'
    }]);
    overwrite([{
      code: 'UM',
      name: 'Îles mineures éloignées des États-Unis'
    }]);
    overwrite([{
      code: 'VC',
      name: 'Saint-Vincent et les Grenadines'
    }]);
    overwrite([{
      code: 'KN',
      name: 'Saint-Christophe-et-Niévès'
    }]);
    overwrite([{
      code: 'SX',
      name: 'Saint-Martin'
    }]);
    overwrite([{
      code: 'PM',
      name: 'Saint-Pierre-et-Miquelon'
    }]);
    overwrite([{
      code: 'WF',
      name: 'Wallis et Futuna'
    }]);
    overwrite([{
      code: 'EH',
      name: 'Sahara occidental'
    }]);
    overwrite([{
      code: 'TW',
      name: 'Taïwan'
    }]);
    overwrite([{
      code: 'TC',
      name: 'Îles Turks et Caïques'
    }]);
    return getNames();
  }

  getName(code : string) : string {
    const { getName, overwrite } = require('country-list');
    overwrite([{
      code: 'AL',
      name: 'Albanie'
    }]);
    overwrite([{
      code: 'DZ',
      name: 'Algérie'
    }]);
    overwrite([{
      code: 'AD',
      name: 'Andorre'
    }]);
    overwrite([{
      code: 'AI',
      name: 'Anguilles'
    }]);
    overwrite([{
      code: 'AQ',
      name: 'Antarctique'
    }]);
    overwrite([{
      code: 'AR',
      name: 'Argentine'
    }]);
    overwrite([{
      code: 'AM',
      name: 'Arménie'
    }]);
    overwrite([{
      code: 'AU',
      name: 'Australie'
    }]);
    overwrite([{
      code: 'AT',
      name: 'Autriche'
    }]);
    overwrite([{
      code: 'AZ',
      name: 'Azerbaidjan'
    }]);
    overwrite([{
      code: 'BY',
      name: 'Biélorussie'
    }]);
    overwrite([{
      code: 'BE',
      name: 'Belgique'
    }]);
    overwrite([{
      code: 'BZ',
      name: 'Bélize'
    }]);
    overwrite([{
      code: 'BO',
      name: 'Bolivie'
    }]);
    overwrite([{
      code: 'BA',
      name: 'Bosnie-Herzégovine'
    }]);
    overwrite([{
      code: 'BR',
      name: 'Brésil'
    }]);
    overwrite([{
      code: 'BG',
      name: 'Bulgarie'
    }]);
    overwrite([{
      code: 'KH',
      name: 'Cambodge'
    }]);
    overwrite([{
      code: 'CM',
      name: 'Cameroun'
    }]);
    overwrite([{
      code: 'CV',
      name: 'Cap Vert'
    }]);
    overwrite([{
      code: 'KY',
      name: 'Îles Caïmans'
    }]);
    overwrite([{
      code: 'CF',
      name: 'République d\'Afrique Centrale'
    }]);
    overwrite([{
      code: 'CL',
      name: 'Chili'
    }]);
    overwrite([{
      code: 'CN',
      name: 'Chine'
    }]);
    overwrite([{
      code: 'CO',
      name: 'Colombie'
    }]);
    overwrite([{
      code: 'CD',
      name: 'République Démocratique du Congo'
    }]);
    overwrite([{
      code: 'HR',
      name: 'Croatie'
    }]);
    overwrite([{
      code: 'CY',
      name: 'Chypre'
    }]);
    overwrite([{
      code: 'CZ',
      name: 'République Tchèque'
    }]);
    overwrite([{
      code: 'CI',
      name: 'Côte d\'Ivoire'
    }]);
    overwrite([{
      code: 'DK',
      name: 'Danemark'
    }]);
    overwrite([{
      code: 'DO',
      name: 'République Dominicaine'
    }]);
    overwrite([{
      code: 'EC',
      name: 'Équateur'
    }]);
    overwrite([{
      code: 'EG',
      name: 'Égypte'
    }]);
    overwrite([{
      code: 'GQ',
      name: 'Guinée équatoriale'
    }]);
    overwrite([{
      code: 'ER',
      name: 'Érythrée'
    }]);
    overwrite([{
      code: 'EE',
      name: 'Estonie'
    }]);
    overwrite([{
      code: 'ET',
      name: 'Ethiopie'
    }]);
    overwrite([{
      code: 'FO',
      name: 'Îles Féroé'
    }]);
    overwrite([{
      code: 'FI',
      name: 'Finlande'
    }]);
    overwrite([{
      code: 'GF',
      name: 'Guinée française'
    }]);
    overwrite([{
      code: 'PF',
      name: 'Polynésie française'
    }]);
    overwrite([{
      code: 'GM',
      name: 'Gambie'
    }]);
    overwrite([{
      code: 'GE',
      name: 'Géorgie'
    }]);
    overwrite([{
      code: 'DE',
      name: 'Allemagne'
    }]);
    overwrite([{
      code: 'GR',
      name: 'Grèce'
    }]);
    overwrite([{
      code: 'GN',
      name: 'Guinée'
    }]);
    overwrite([{
      code: 'GY',
      name: 'Guyanne'
    }]);
    overwrite([{
      code: 'HU',
      name: 'Hongrie'
    }]);
    overwrite([{
      code: 'IS',
      name: 'Islande'
    }]);
    overwrite([{
      code: 'IN',
      name: 'Inde'
    }]);
    overwrite([{
      code: 'ID',
      name: 'Indonésie'
    }]);
    overwrite([{
      code: 'IR',
      name: 'Iran'
    }]);
    overwrite([{
      code: 'IE',
      name: 'Irlande'
    }]);
    overwrite([{
      code: 'IT',
      name: 'Italie'
    }]);
    overwrite([{
      code: 'JM',
      name: 'Jamaïque'
    }]);
    overwrite([{
      code: 'JP',
      name: 'Japon'
    }]);
    overwrite([{
      code: 'KP',
      name: 'Corée'
    }]);
    overwrite([{
      code: 'KG',
      name: 'Kirghizistan'
    }]);
    overwrite([{
      code: 'LV',
      name: 'Lettonie'
    }]);
    overwrite([{
      code: 'LY',
      name: 'Lybie'
    }]);
    overwrite([{
      code: 'LT',
      name: 'Lituanie'
    }]);
    overwrite([{
      code: 'MY',
      name: 'Malaisie'
    }]);
    overwrite([{
      code: 'MT',
      name: 'Malte'
    }]);
    overwrite([{
      code: 'MH',
      name: 'Îles Marshall'
    }]);
    overwrite([{
      code: 'MR',
      name: 'Mauritanie'
    }]);
    overwrite([{
      code: 'MX',
      name: 'Mexique'
    }]);
    overwrite([{
      code: 'MN',
      name: 'Mongolie'
    }]);
    overwrite([{
      code: 'MA',
      name: 'Maroc'
    }]);
    overwrite([{
      code: 'NA',
      name: 'Namibie'
    }]);
    overwrite([{
      code: 'NP',
      name: 'Népal'
    }]);
    overwrite([{
      code: 'NL',
      name: 'Pays-Bas'
    }]);
    overwrite([{
      code: 'NC',
      name: 'Nouvelle-Calédonie'
    }]);
    overwrite([{
      code: 'NZ',
      name: 'Nouvelle-Zélande'
    }]);
    overwrite([{
      code: 'NO',
      name: 'Norvège'
    }]);
    overwrite([{
      code: 'PS',
      name: 'Palestine'
    }]);
    overwrite([{
      code: 'PE',
      name: 'Pérou'
    }]);
    overwrite([{
      code: 'PL',
      name: 'Pologne'
    }]);
    overwrite([{
      code: 'RO',
      name: 'Roumanie'
    }]);
    overwrite([{
      code: 'RU',
      name: 'Russie'
    }]);
    overwrite([{
      code: 'RE',
      name: 'Réunion'
    }]);
    overwrite([{
      code: 'BL',
      name: 'Saint-Barthélemy'
    }]);
    overwrite([{
      code: 'SH',
      name: 'Saint-Hélène'
    }]);
    overwrite([{
      code: 'LC',
      name: 'Saint-Lucie'
    }]);
    overwrite([{
      code: 'SA',
      name: 'Arabie Saoudite'
    }]);
    overwrite([{
      code: 'SN',
      name: 'Sénégal'
    }]);
    overwrite([{
      code: 'RS',
      name: 'Serbie'
    }]);
    overwrite([{
      code: 'SG',
      name: 'Singapour'
    }]);
    overwrite([{
      code: 'SK',
      name: 'Slovaquie'
    }]);
    overwrite([{
      code: 'SI',
      name: 'Slovénie'
    }]);
    overwrite([{
      code: 'SB',
      name: 'Îles Salomon'
    }]);
    overwrite([{
      code: 'SO',
      name: 'Somalie'
    }]);
    overwrite([{
      code: 'ZA',
      name: 'Afrique du Sud'
    }]);
    overwrite([{
      code: 'GS',
      name: 'Géorgie du Sud'
    }]);
    overwrite([{
      code: 'SS',
      name: 'Sudan du Sud'
    }]);
    overwrite([{
      code: 'ES',
      name: 'Espagne'
    }]);
    overwrite([{
      code: 'SZ',
      name: 'Eswatini'
    }]);
    overwrite([{
      code: 'SE',
      name: 'Suède'
    }]);
    overwrite([{
      code: 'CH',
      name: 'Suisse'
    }]);
    overwrite([{
      code: 'SY',
      name: 'Syrie'
    }]);
    overwrite([{
      code: 'TJ',
      name: 'Tadjikistan'
    }]);
    overwrite([{
      code: 'TZ',
      name: 'Tanzanie'
    }]);
    overwrite([{
      code: 'TH',
      name: 'Thaïlande'
    }]);
    overwrite([{
      code: 'TN',
      name: 'Tunisie'
    }]);
    overwrite([{
      code: 'TR',
      name: 'Turquie'
    }]);
    overwrite([{
      code: 'TM',
      name: 'Turkménistan'
    }]);
    overwrite([{
      code: 'AE',
      name: 'Émirats Arabes Unis'
    }]);
    overwrite([{
      code: 'GB',
      name: 'Royaume-Uni'
    }]);
    overwrite([{
      code: 'US',
      name: 'États-Unis'
    }]);
    overwrite([{
      code: 'UZ',
      name: 'Ouzbékistan'
    }]);
    overwrite([{
      code: 'VE',
      name: 'Vénézuela'
    }]);
    overwrite([{
      code: 'VN',
      name: 'Viêt Nam'
    }]);
    overwrite([{
      code: 'ZM',
      name: 'Zambie'
    }]);
    overwrite([{
      code: 'YE',
      name: 'Yémen'
    }]);
    overwrite([{
      code: 'AS',
      name: 'Samoa américaines'
    }]);
    overwrite([{
      code: 'IO',
      name: 'Territoire britannique de l\'océan Indien'
    }]);
    overwrite([{
      code: 'BN',
      name: 'Brunei'
    }]);
    overwrite([{
      code: 'CX',
      name: 'Îles Christmas (Australie)'
    }]);
    overwrite([{
      code: 'CC',
      name: 'Îles Cocos'
    }]);
    overwrite([{
      code: 'CK',
      name: 'Îles Cook'
    }]);
    overwrite([{
      code: 'FK',
      name: 'Îles Malouines'
    }]);
    overwrite([{
      code: 'HM',
      name: 'Îles Heard-et-MacDonald'
    }]);
    overwrite([{
      code: 'VA',
      name: 'Le Vatican'
    }]);
    overwrite([{
      code: 'LA',
      name: 'Laos'
    }]);
    overwrite([{
      code: 'LS',
      name: 'Lesotho'
    }]);
    overwrite([{
      code: 'MK',
      name: 'Macédoine'
    }]);
    overwrite([{
      code: 'FM',
      name: 'Micronésie'
    }]);
    overwrite([{
      code: 'MP',
      name: 'Îles Mariannes du Nord'
    }]);
    overwrite([{
      code: 'BQ',
      name: 'Bonaire'
    }]);
    overwrite([{
      code: 'DM',
      name: 'Dominique'
    }]);
    overwrite([{
      code: 'GG',
      name: 'Guernesey'
    }]);
    overwrite([{
      code: 'TF',
      name: 'Terres australes et antarctiques françaises'
    }]);
    overwrite([{
      code: 'BV',
      name: 'Île Bouvet'
    }]);
    overwrite([{
      code: 'AX',
      name: 'Île Åland'
    }]);
    overwrite([{
      code: 'AG',
      name: 'Antigua-et-Barbuda'
    }]);
    overwrite([{
      code: 'MD',
      name: 'Moldavie'
    }]);
    overwrite([{
      code: 'MU',
      name: 'Maurice'
    }]);
    overwrite([{
      code: 'NF',
      name: 'Île Norfolk'
    }]);
    overwrite([{
      code: 'PG',
      name: 'Papouasie-Nouvelle-Guinée'
    }]);
    overwrite([{
      code: 'UM',
      name: 'Îles mineures éloignées des États-Unis'
    }]);
    overwrite([{
      code: 'VC',
      name: 'Saint-Vincent et les Grenadines'
    }]);
    overwrite([{
      code: 'KN',
      name: 'Saint-Christophe-et-Niévès'
    }]);
    overwrite([{
      code: 'SX',
      name: 'Saint-Martin'
    }]);
    overwrite([{
      code: 'PM',
      name: 'Saint-Pierre-et-Miquelon'
    }]);
    overwrite([{
      code: 'WF',
      name: 'Wallis et Futuna'
    }]);
    overwrite([{
      code: 'EH',
      name: 'Sahara occidental'
    }]);
    overwrite([{
      code: 'TW',
      name: 'Taïwan'
    }]);
    overwrite([{
      code: 'TC',
      name: 'Îles Turks et Caïques'
    }]);
    return getName(code);
  }

  getCode(name : string) : string {
    const { getCode, overwrite } = require('country-list');
    overwrite([{
      code: 'AL',
      name: 'Albanie'
    }]);
    overwrite([{
      code: 'DZ',
      name: 'Algérie'
    }]);
    overwrite([{
      code: 'AD',
      name: 'Andorre'
    }]);
    overwrite([{
      code: 'AI',
      name: 'Anguilles'
    }]);
    overwrite([{
      code: 'AQ',
      name: 'Antarctique'
    }]);
    overwrite([{
      code: 'AR',
      name: 'Argentine'
    }]);
    overwrite([{
      code: 'AM',
      name: 'Arménie'
    }]);
    overwrite([{
      code: 'AU',
      name: 'Australie'
    }]);
    overwrite([{
      code: 'AT',
      name: 'Autriche'
    }]);
    overwrite([{
      code: 'AZ',
      name: 'Azerbaidjan'
    }]);
    overwrite([{
      code: 'BY',
      name: 'Biélorussie'
    }]);
    overwrite([{
      code: 'BE',
      name: 'Belgique'
    }]);
    overwrite([{
      code: 'BZ',
      name: 'Bélize'
    }]);
    overwrite([{
      code: 'BO',
      name: 'Bolivie'
    }]);
    overwrite([{
      code: 'BA',
      name: 'Bosnie-Herzégovine'
    }]);
    overwrite([{
      code: 'BR',
      name: 'Brésil'
    }]);
    overwrite([{
      code: 'BG',
      name: 'Bulgarie'
    }]);
    overwrite([{
      code: 'KH',
      name: 'Cambodge'
    }]);
    overwrite([{
      code: 'CM',
      name: 'Cameroun'
    }]);
    overwrite([{
      code: 'CV',
      name: 'Cap Vert'
    }]);
    overwrite([{
      code: 'KY',
      name: 'Îles Caïmans'
    }]);
    overwrite([{
      code: 'CF',
      name: 'République d\'Afrique Centrale'
    }]);
    overwrite([{
      code: 'CL',
      name: 'Chili'
    }]);
    overwrite([{
      code: 'CN',
      name: 'Chine'
    }]);
    overwrite([{
      code: 'CO',
      name: 'Colombie'
    }]);
    overwrite([{
      code: 'CD',
      name: 'République Démocratique du Congo'
    }]);
    overwrite([{
      code: 'HR',
      name: 'Croatie'
    }]);
    overwrite([{
      code: 'CY',
      name: 'Chypre'
    }]);
    overwrite([{
      code: 'CZ',
      name: 'République Tchèque'
    }]);
    overwrite([{
      code: 'CI',
      name: 'Côte d\'Ivoire'
    }]);
    overwrite([{
      code: 'DK',
      name: 'Danemark'
    }]);
    overwrite([{
      code: 'DO',
      name: 'République Dominicaine'
    }]);
    overwrite([{
      code: 'EC',
      name: 'Équateur'
    }]);
    overwrite([{
      code: 'EG',
      name: 'Égypte'
    }]);
    overwrite([{
      code: 'GQ',
      name: 'Guinée équatoriale'
    }]);
    overwrite([{
      code: 'ER',
      name: 'Érythrée'
    }]);
    overwrite([{
      code: 'EE',
      name: 'Estonie'
    }]);
    overwrite([{
      code: 'ET',
      name: 'Ethiopie'
    }]);
    overwrite([{
      code: 'FO',
      name: 'Îles Féroé'
    }]);
    overwrite([{
      code: 'FI',
      name: 'Finlande'
    }]);
    overwrite([{
      code: 'GF',
      name: 'Guinée française'
    }]);
    overwrite([{
      code: 'PF',
      name: 'Polynésie française'
    }]);
    overwrite([{
      code: 'GM',
      name: 'Gambie'
    }]);
    overwrite([{
      code: 'GE',
      name: 'Géorgie'
    }]);
    overwrite([{
      code: 'DE',
      name: 'Allemagne'
    }]);
    overwrite([{
      code: 'GR',
      name: 'Grèce'
    }]);
    overwrite([{
      code: 'GN',
      name: 'Guinée'
    }]);
    overwrite([{
      code: 'GY',
      name: 'Guyanne'
    }]);
    overwrite([{
      code: 'HU',
      name: 'Hongrie'
    }]);
    overwrite([{
      code: 'IS',
      name: 'Islande'
    }]);
    overwrite([{
      code: 'IN',
      name: 'Inde'
    }]);
    overwrite([{
      code: 'ID',
      name: 'Indonésie'
    }]);
    overwrite([{
      code: 'IR',
      name: 'Iran'
    }]);
    overwrite([{
      code: 'IE',
      name: 'Irlande'
    }]);
    overwrite([{
      code: 'IT',
      name: 'Italie'
    }]);
    overwrite([{
      code: 'JM',
      name: 'Jamaïque'
    }]);
    overwrite([{
      code: 'JP',
      name: 'Japon'
    }]);
    overwrite([{
      code: 'KP',
      name: 'Corée'
    }]);
    overwrite([{
      code: 'KG',
      name: 'Kirghizistan'
    }]);
    overwrite([{
      code: 'LV',
      name: 'Lettonie'
    }]);
    overwrite([{
      code: 'LY',
      name: 'Lybie'
    }]);
    overwrite([{
      code: 'LT',
      name: 'Lituanie'
    }]);
    overwrite([{
      code: 'MY',
      name: 'Malaisie'
    }]);
    overwrite([{
      code: 'MT',
      name: 'Malte'
    }]);
    overwrite([{
      code: 'MH',
      name: 'Îles Marshall'
    }]);
    overwrite([{
      code: 'MR',
      name: 'Mauritanie'
    }]);
    overwrite([{
      code: 'MX',
      name: 'Mexique'
    }]);
    overwrite([{
      code: 'MN',
      name: 'Mongolie'
    }]);
    overwrite([{
      code: 'MA',
      name: 'Maroc'
    }]);
    overwrite([{
      code: 'NA',
      name: 'Namibie'
    }]);
    overwrite([{
      code: 'NP',
      name: 'Népal'
    }]);
    overwrite([{
      code: 'NL',
      name: 'Pays-Bas'
    }]);
    overwrite([{
      code: 'NC',
      name: 'Nouvelle-Calédonie'
    }]);
    overwrite([{
      code: 'NZ',
      name: 'Nouvelle-Zélande'
    }]);
    overwrite([{
      code: 'NO',
      name: 'Norvège'
    }]);
    overwrite([{
      code: 'PS',
      name: 'Palestine'
    }]);
    overwrite([{
      code: 'PE',
      name: 'Pérou'
    }]);
    overwrite([{
      code: 'PL',
      name: 'Pologne'
    }]);
    overwrite([{
      code: 'RO',
      name: 'Roumanie'
    }]);
    overwrite([{
      code: 'RU',
      name: 'Russie'
    }]);
    overwrite([{
      code: 'RE',
      name: 'Réunion'
    }]);
    overwrite([{
      code: 'BL',
      name: 'Saint-Barthélemy'
    }]);
    overwrite([{
      code: 'SH',
      name: 'Saint-Hélène'
    }]);
    overwrite([{
      code: 'LC',
      name: 'Saint-Lucie'
    }]);
    overwrite([{
      code: 'SA',
      name: 'Arabie Saoudite'
    }]);
    overwrite([{
      code: 'SN',
      name: 'Sénégal'
    }]);
    overwrite([{
      code: 'RS',
      name: 'Serbie'
    }]);
    overwrite([{
      code: 'SG',
      name: 'Singapour'
    }]);
    overwrite([{
      code: 'SK',
      name: 'Slovaquie'
    }]);
    overwrite([{
      code: 'SI',
      name: 'Slovénie'
    }]);
    overwrite([{
      code: 'SB',
      name: 'Îles Salomon'
    }]);
    overwrite([{
      code: 'SO',
      name: 'Somalie'
    }]);
    overwrite([{
      code: 'ZA',
      name: 'Afrique du Sud'
    }]);
    overwrite([{
      code: 'GS',
      name: 'Géorgie du Sud'
    }]);
    overwrite([{
      code: 'SS',
      name: 'Sudan du Sud'
    }]);
    overwrite([{
      code: 'ES',
      name: 'Espagne'
    }]);
    overwrite([{
      code: 'SZ',
      name: 'Eswatini'
    }]);
    overwrite([{
      code: 'SE',
      name: 'Suède'
    }]);
    overwrite([{
      code: 'CH',
      name: 'Suisse'
    }]);
    overwrite([{
      code: 'SY',
      name: 'Syrie'
    }]);
    overwrite([{
      code: 'TJ',
      name: 'Tadjikistan'
    }]);
    overwrite([{
      code: 'TZ',
      name: 'Tanzanie'
    }]);
    overwrite([{
      code: 'TH',
      name: 'Thaïlande'
    }]);
    overwrite([{
      code: 'TN',
      name: 'Tunisie'
    }]);
    overwrite([{
      code: 'TR',
      name: 'Turquie'
    }]);
    overwrite([{
      code: 'TM',
      name: 'Turkménistan'
    }]);
    overwrite([{
      code: 'AE',
      name: 'Émirats Arabes Unis'
    }]);
    overwrite([{
      code: 'GB',
      name: 'Royaume-Uni'
    }]);
    overwrite([{
      code: 'US',
      name: 'États-Unis'
    }]);
    overwrite([{
      code: 'UZ',
      name: 'Ouzbékistan'
    }]);
    overwrite([{
      code: 'VE',
      name: 'Vénézuela'
    }]);
    overwrite([{
      code: 'VN',
      name: 'Viêt Nam'
    }]);
    overwrite([{
      code: 'ZM',
      name: 'Zambie'
    }]);
    overwrite([{
      code: 'YE',
      name: 'Yémen'
    }]);
    overwrite([{
      code: 'AS',
      name: 'Samoa américaines'
    }]);
    overwrite([{
      code: 'IO',
      name: 'Territoire britannique de l\'océan Indien'
    }]);
    overwrite([{
      code: 'BN',
      name: 'Brunei'
    }]);
    overwrite([{
      code: 'CX',
      name: 'Îles Christmas (Australie)'
    }]);
    overwrite([{
      code: 'CC',
      name: 'Îles Cocos'
    }]);
    overwrite([{
      code: 'CK',
      name: 'Îles Cook'
    }]);
    overwrite([{
      code: 'FK',
      name: 'Îles Malouines'
    }]);
    overwrite([{
      code: 'HM',
      name: 'Îles Heard-et-MacDonald'
    }]);
    overwrite([{
      code: 'VA',
      name: 'Le Vatican'
    }]);
    overwrite([{
      code: 'LA',
      name: 'Laos'
    }]);
    overwrite([{
      code: 'LS',
      name: 'Lesotho'
    }]);
    overwrite([{
      code: 'MK',
      name: 'Macédoine'
    }]);
    overwrite([{
      code: 'FM',
      name: 'Micronésie'
    }]);
    overwrite([{
      code: 'MP',
      name: 'Îles Mariannes du Nord'
    }]);
    overwrite([{
      code: 'BQ',
      name: 'Bonaire'
    }]);
    overwrite([{
      code: 'DM',
      name: 'Dominique'
    }]);
    overwrite([{
      code: 'GG',
      name: 'Guernesey'
    }]);
    overwrite([{
      code: 'TF',
      name: 'Terres australes et antarctiques françaises'
    }]);
    overwrite([{
      code: 'BV',
      name: 'Île Bouvet'
    }]);
    overwrite([{
      code: 'AX',
      name: 'Île Åland'
    }]);
    overwrite([{
      code: 'AG',
      name: 'Antigua-et-Barbuda'
    }]);
    overwrite([{
      code: 'MD',
      name: 'Moldavie'
    }]);
    overwrite([{
      code: 'MU',
      name: 'Maurice'
    }]);
    overwrite([{
      code: 'NF',
      name: 'Île Norfolk'
    }]);
    overwrite([{
      code: 'PG',
      name: 'Papouasie-Nouvelle-Guinée'
    }]);
    overwrite([{
      code: 'UM',
      name: 'Îles mineures éloignées des États-Unis'
    }]);
    overwrite([{
      code: 'VC',
      name: 'Saint-Vincent et les Grenadines'
    }]);
    overwrite([{
      code: 'KN',
      name: 'Saint-Christophe-et-Niévès'
    }]);
    overwrite([{
      code: 'SX',
      name: 'Saint-Martin'
    }]);
    overwrite([{
      code: 'PM',
      name: 'Saint-Pierre-et-Miquelon'
    }]);
    overwrite([{
      code: 'WF',
      name: 'Wallis et Futuna'
    }]);
    overwrite([{
      code: 'EH',
      name: 'Sahara occidental'
    }]);
    overwrite([{
      code: 'TW',
      name: 'Taïwan'
    }]);
    overwrite([{
      code: 'TC',
      name: 'Îles Turks et Caïques'
    }]);
    return getCode(name);
  }
}
