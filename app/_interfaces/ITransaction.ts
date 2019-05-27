import { IInvoice } from './IInvoice';
export interface ITransaction {
    receiptId: string,
    custName: string,
    invoices: IInvoice[],
    totalPrice: number,
    cashier: string,
    purchaseDate: Date
}