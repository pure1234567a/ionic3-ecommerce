export class SearchModel {
    title: string;
    product: Array<SearchItemsModel>;
}
export class SearchItemsModel {
    name: string;
    detail: string;
    price: string;
    img: string;
}