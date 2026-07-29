export class StoreEndpoint {

    readonly baseURL: string = 'https://petstore.swagger.io/v2/store/';
    readonly getByStatusURL: string = this.baseURL + 'inventory/';
    readonly orderURL: string = this.baseURL + 'order/';

    setFindOrderByIdURL(orderId: any): string {
        return this.orderURL + String(orderId);
    }
}

export enum OrderStatus {
    placed = 'placed',
    approved = 'approved',
    delivered = 'delivered',
}

export interface OrderModel{
    id: number;
    petId: number;
    quantity: number;
    shipDate: string ; // ISO 8601 formatted string
    status:OrderStatus;
    complete: boolean;
}