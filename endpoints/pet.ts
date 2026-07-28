export class PetEndpoint {

    readonly baseURL: string = 'https://petstore.swagger.io/v2/pet/';
    setFindByIdURL(id: any): string {
        return this.baseURL + String(id);
    }

    setFindByStatusURL(status: PetStatus): string {
        return this.baseURL + `findByStatus?status=${status}`;
    }
}

export enum PetStatus {
    'available',
    'pending',
    'sold'
}