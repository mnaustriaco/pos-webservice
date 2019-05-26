import { IInvoice } from './IInvoice';
export interface ITransaction {
    receiptId: string,
    custName: string,
    invoice: IInvoice[],
    totalPrice: number,
    cashier: string,
    purchaseDate: Date
}