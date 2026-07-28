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

test.describe('POST request tests', () => {

  const petId: number = 1111;
  const petName: string = 'targetDog';

  test('Can add a new pet to the store', async ({ request }) => {
    const newPet =
    {
      "id": petId,
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
    })

    const addedPet = await response.json();

    expect(addedPet.name).toBe(petName);
    expect(response.ok()).toBeTruthy();
  });

  test.afterAll('Delete added pet', async ({ request }) => {
    const url = petEndpoint.setFindByIdURL(String(petId));

    const response = request.delete(url);

    expect((await response).ok()).toBeTruthy();
  });
});
