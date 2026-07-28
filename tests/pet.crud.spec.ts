import { test, expect } from '@playwright/test';
import { PetEndpoint } from '../endpoints/pet';

const petEndpoint = new PetEndpoint();
const dynamicPetId: number = Math.floor(10000000 + Math.random() * 90000000);

test('Can add a new pet using POST and update its name using PUT', async ({ request }) => {

    const petName: string = 'oldDog';
    const updatedPetName: string = 'updatedDog';

    // BEGIN add new pet 
    const newPet =
    {
        "id": dynamicPetId,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": petName,
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }

    const newPetAddedResponse = await request.post(petEndpoint.baseURL, {
        data: newPet
    });

    expect(newPetAddedResponse.ok()).toBeTruthy();
    // END add new pet

    // BEGIN update new pet
    const updatedPet =
    {
        "id": dynamicPetId,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": updatedPetName,
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }

    const updatePetResponse = await request.put(petEndpoint.baseURL, {
        data: updatedPet
    })

    const updatePetResponseJSON = await updatePetResponse.json();

    expect(updatePetResponse.ok()).toBeTruthy();
    expect(updatePetResponseJSON.name).toBe(updatedPetName);
    // END update new pet
});

test.afterAll('Delete added pet', async ({ request }) => {
    const deleteURL = petEndpoint.setFindByIdURL(dynamicPetId);
    const response = await request.delete(deleteURL);
    expect(response.ok()).toBeTruthy();
});