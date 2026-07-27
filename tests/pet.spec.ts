import { test, expect } from '@playwright/test';
import { PetEndpoint } from '../endpoints/pet';


  const petEndpoint = new PetEndpoint();

test.describe('GET request test suite', () => {



  test('Can find pets by pending status', async ({ request }) => {

    const response = await request.get(petEndpoint.findByPendingStatusURL);

    const pets = await response.json();

    expect(pets).toBeTruthy();
  });

  test.only('Can find pet by id', async ({ request }) => {

    const targetURL: string = petEndpoint.setFindByIdURL('2');
    console.log(`TARGET URL: ${targetURL}`);

    const response = await request.get(targetURL);

    const targetPet = await response.json();

    expect(targetPet).toBeDefined();
  });
});

test.describe('POST test suite', () => {

  test('Can add a new pet to the store', async({request}) => {
    const response = request.post(petEndpoint.)

  });

  {
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
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
});
