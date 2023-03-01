export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  ratings: number;
  link:string;
  imgl:string;
  categoryId:number;
  likecnt:number
}
export const products = [
  {
    id: 1,
    name: 'Mont Blanc Montblanc Explorer',
    price: 31734,
    description: 'парфюмерная вода',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/mont-blanc-montblanc-explorer-parfjumernaja-voda-edp-100-ml-17302013/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h60/67663649570846/mont-blanc-montblanc-explorer-parfyumernaya-voda-edp-100-ml-17302013-2.jpg',
    categoryId:1,
    likecnt:0
  },
  {
    id: 2,
    name: 'Avon INCANDESSENCE',
    price:4479,
    description: 'объем: 50 мл,для женщин',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-incandessence-parfjumernaja-voda-edp-50-ml-102058597/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/he3/44518783287326/avon-incandessence-parfyumernaya-voda-edp-50-ml-102058597-1.jpg',
    categoryId:1,
    likecnt:0
  },
  {
    id: 3,
    name: 'LANVIN Eclat dArpege',
    price: 21286,
    description: 'тип: парфюмерная вода EDP',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/lanvin-eclat-d-arpege-parfjumernaja-voda-edp-100-ml-17300765/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he9/h7b/50482206769182/lanvin-eclat-darpege-edp-100-ml-17300765-1-Container.jpg',
    categoryId:1,
    likecnt:0
  },
  {
    id: 4,
    name: 'Avon Wild Country',
    price: 3800,
    description: 'Est.1967 туалетная вода EDT 75 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-wild-country-est-1967-tualetnaja-voda-edt-75-ml-103651319/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h41/hc1/48658413518878/wild-country-tualetnaa-voda-d-nego-75-ml-103651319-1.jpg',
    categoryId:1,
    likecnt:0
  },
  {
    id: 5,
    name: 'Versace Man Eau',
    price: 2935,
    description: 'туалетная вода EDT 5 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/versace-man-eau-fraiche-tualetnaja-voda-edt-5-ml-101745798/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hae/h87/31657331195934/versace-man-eau-fraiche-edt-100-ml-17300752-1-Container.jpg',
    categoryId:1,
    likecnt:0
  },
  {
    id: 6,
    name: 'Tiziana Terenzi Kirke',
    price: 59990,
    description: 'парфюмерная вода EDP 100 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/tiziana-terenzi-kirke-parfjumernaja-voda-edp-100-ml-17301541/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3c/h77/31817538240542/tiziana-terenzi-kirke-edp-100-ml-17301541-1.jpg',
    categoryId:2,
    likecnt:0
  },
  {
    id: 7,
    name: 'Antonio Banderas Blue Seduction ',
    price: 10810,
    description: ' туалетная вода EDT 100 мл',
    ratings: 5,
    link: 'https://kaspi.kz/shop/p/antonio-banderas-blue-seduction-tualetnaja-voda-edt-100-ml-17300817/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he1/he3/63374187724830/antonio-banderas-blue-seduction-edt-100-ml-17300817-1-Container.jpg',
    categoryId:2,
    likecnt:0
  },
  {
    id: 8,
    name: 'Avon PUR BLANCA',
    price:3243,
    description: 'для нее парфюмерная вода EDP 50 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-pur-blanca-dlja-nee-parfjumernaja-voda-edp-50-ml-102058630/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd4/hd3/44518804291614/avon-pur-blanca-dla-nee-50-ml-102058630-1-Container.jpg',
    categoryId:2,
    likecnt:0
  },
  {
    id: 9,
    name: 'Al-Rayan 212 Men',
    price: 2000,
    description: 'парфюмерное масло 10 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/al-rayan-212-men-parfjumernoe-maslo-10-ml-106683752/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hac/ha3/62885183782942/arabskie-maslanye-duhi-212-men-106683752-1.jpg',
    categoryId:2,
    likecnt:0
  },
  {
    id: 10,
    name: 'Avon Full Speed',
    price: 3908,
    description: 'парфюмерная вода EDP 75 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-full-speed-parfjumernaja-voda-edp-75-ml-101784140/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h93/h43/34036696940574/avon-full-speed-75-ml-101784140-1-Container.jpg',
    categoryId:2,
    likecnt:0
  },
  {
    id: 11,
    name: 'MOSCHINO Funny туалетная вода EDT 100 мл',
    price: 22995,
    description: 'тип: парфюмерная вода',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/moschino-funny-tualetnaja-voda-edt-100-ml-17300760/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h2d/h48/31584660488222/moschino-funny-edt-100-ml-17300760-1.jpg',
    categoryId:3,
    likecnt:0
  },
  {
    id: 12,
    name: 'Avon Luck for Her парфюмерная вода EDP 50 мл',
    price: 6170,
    description: 'объем: 50 мл,для женщин',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-luck-for-her-parfjumernaja-voda-edp-50-ml-101377040/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/hd1/34307011575838/avon-luck-for-her-parfyumernaya-voda-edp-50-ml-101377040-1.jpg',
    categoryId:3,
    likecnt:0
  },
  {
    id: 13,
    name: 'Avon PERCEIVE Dew парфюмерная вода EDP 50 мл',
    price: 4349,
    description: 'тип: парфюмерная вода EDP',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-perceive-dew-parfjumernaja-voda-edp-50-ml-102058685/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h6c/h3c/44518973702174/avon-perceive-dew-parfyumernaya-voda-edp-50-ml-102058685-1.jpg',
    categoryId:3,
    likecnt:0
  },
  {
    id: 14,
    name: 'Avon Today парфюмерная вода EDP 100 мл',
    price: 7979,
    description: 'Est.1967 туалетная вода EDT 75 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-today-parfjumernaja-voda-edp-100-ml-102164090/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/img/m/p/h1d/hac/65815130538014.jpg?format=preview-medium',
    categoryId:3,
    likecnt:0
  },
  {
    id: 15,
    name: 'LANVIN Eclat dArpege парфюмерная вода EDP 100 мл',
    price: 21000,
    description: 'туалетная вода EDT 5 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/lanvin-eclat-d-arpege-parfjumernaja-voda-edp-100-ml-17300765/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he9/h7b/50482206769182/lanvin-eclat-darpege-edp-100-ml-17300765-1-Container.jpg',
    categoryId:3,
    likecnt:0
  },
  {
    id: 16,
    name: 'Al-Rayan Versace Man парфюмерное масло 10 мл',
    price: 2000,
    description: 'парфюмерная вода EDP 100 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/al-rayan-versace-man-parfjumernoe-maslo-10-ml-106729910/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h61/hfb/62972769173534/arabskie-maslanye-duhi-versace-man-106729910-1.jpg',
    categoryId:4,
    likecnt:0
  },
  {
    id: 17,
    name: 'Antonio Banderas Black Seduction туалетная вода EDT 100 мл',
    price: 11885,
    description: ' туалетная вода EDT 100 мл',
    ratings: 5,
    link: 'https://kaspi.kz/shop/p/antonio-banderas-black-seduction-tualetnaja-voda-edt-100-ml-17301681/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h14/49814020784158/antonio-banderas-black-seduction-edt-100-ml-17301681-1-Container.jpg',
    categoryId:4,
    likecnt:0
  },
  {
    id: 18,
    name: 'DOLCE&GABBANA 3 LImperatrice туалетная вода EDT 100 мл',
    price:31995,
    description: 'для нее парфюмерная вода EDP 50 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/dolce-gabbana-3-l-imperatrice-tualetnaja-voda-edt-100-ml-102466699/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyw_3LK3lypJoun4x40It2Snlmv88nIAtkEpAIvhh-Gq7HGv1IhzG3RoCQpYQAvD_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h08/h46/68076494880798/dolce-gabbana-l-imperatrice-tualetnaya-voda-edt-100-ml-102466699-1.jpg',
    categoryId:4,
    likecnt:0
  },
  {
    id: 19,
    name: 'Armaf Club de Nuit Intense туалетная вода EDT 100 мл',
    price: 20612,
    description: 'парфюмерное масло 10 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/al-rayan-212-men-parfjumernoe-maslo-10-ml-106683752/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/ha0/33960203780126/armaf-club-de-nuit-intense-edp-100-ml-101095816-1-Container.jpg',
    categoryId:4,
    likecnt:0
  },
  {
    id: 20,
    name: 'Al-Rayan Black Afgano Oud парфюмерное масло 10 мл',
    price: 2000,
    description: 'парфюмерная вода EDP 75 мл',
    ratings: 5,
    link:'https://kaspi.kz/shop/p/avon-full-speed-parfjumernaja-voda-edp-75-ml-101784140/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMI2cK-36an_QIVZUCRBR3Aeg5TEAAYASAAEgKt9_D_BwE#!/item',
    imgl:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/ha9/63014242517022/arabskie-maslanye-duhi-black-afgano-oud-106754597-1.jpg',
    categoryId:4,
    likecnt:0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/