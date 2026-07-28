export class PetEndpoint {

    readonly baseURL: string = 'https://petstore.swagger.io/v2/pet/';

    setFindByIdURL(petId: any): string {
        return this.baseURL + String(petId);
    }

    setFindByStatusURL(status: PetStatus): string {
        return this.baseURL + `findByStatus?status=${status}`;
    }

    setUploadImageURL(petId: any): string {
        return this.baseURL + String(petId) + '/uploadImage';
    }
}

export enum PetStatus {
    available = 'available',
    pending = 'pending',
    sold = 'sold'
}