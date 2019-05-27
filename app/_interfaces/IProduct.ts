export interface IProduct {
    productId: string,
    itemName: string,
    partNumber: number,
    category: string,
    description: string,
    supplierPrice: number,
    wholesalePrice: number,
    retailPrice:number,
    currentQty: number,
    stockQty: number,
    supplierId: string
    productImg: string
}