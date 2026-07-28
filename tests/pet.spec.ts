import { test, expect } from '@playwright/test';
import { PetEndpoint, PetStatus } from '../endpoints/pet';


const petEndpoint = new PetEndpoint();

test.describe('GET request tests ', () => {

  test('Can find pets by pending status', async ({ request }) => {

    const response = await request.get(petEndpoint.setFindByStatusURL(PetStatus.pending));

    const pets = await response.json();

    expect(pets).toBeTruthy();
  });

  test('Can find pet by id', async ({ request }) => {

    const targetURL: string = petEndpoint.setFindByIdURL('2');

    const response = await request.get(targetURL);

    const targetPet = await response.json();

    expect(targetPet).toBeDefined();
  });
});


test.describe.serial('POST and PUT request tests', () => {

  const dynamicPetId: number = Math.floor(10000000 + Math.random() * 90000000);
  const petName: string = 'myDog';
  const updatedPetName: string = 'updatedDog';

  test('Can add a new pet to the store', async ({ request }) => {
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

    const response = await request.post(petEndpoint.baseURL, {
      data: newPet
    });

    const addedPet = await response.json();

    // expect(addedPet.name).toBe(petName);
    expect(response.ok()).toBeTruthy();
  });

  test('Can update added pet', async ({ request }) => {

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

    const response = await request.put(petEndpoint.baseURL, {
      data: updatedPet
    })

    const pet = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(pet.name).toBe(updatedPetName);
  });

  test.afterAll('Delete added pet', async ({ request }) => {
    const deleteURL = petEndpoint.setFindByIdURL(dynamicPetId);

    const response = await request.delete(deleteURL);

    expect(response.ok()).toBeTruthy();
  });
});
