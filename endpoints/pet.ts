export class PetEndpoint {

    readonly baseURL:string = 'https://petstore.swagger.io/v2/pet/';
    readonly findByAvailableStatusURL: string = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';
    readonly findByPendingStatusURL: string = 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending';
    readonly findBySoldStatusURL: string = 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold';
    readonly findByIdURL: string = 'https://petstore.swagger.io/v2/pet/';

    setFindByIdURL(id: string): string {
        return this.findByIdURL + id;
    }
}