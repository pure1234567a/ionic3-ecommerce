export class HomeModel {
  images: Array<String>;
  popularproducts: Array<ProductItemModel>;
  popularshops: Array<ShopItemModel>;
  lastvisit: Array<lastvisitModel>;
  bestseller: Array<bestsellerModel>;
}

export class ProductItemModel {
  name: String;
  image: String;
  unitprice: Number;
}
export class ShopItemModel {
  name: String;
  image: String;
}
export class lastvisitModel {
  name: String;
  image: String;
  unitprice: Number;
}
export class bestsellerModel {
  name: String;
  image: String;
  unitprice: Number;
}