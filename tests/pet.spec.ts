import { test, expect } from '@playwright/test';
import { PetEndpoint, PetStatus } from '../endpoints/pet';
import path from 'node:path';
import fs from 'node:fs';

const petEndpoint = new PetEndpoint();

test.describe('GET request tests ', () => {

  test('Can find pets by status', async ({ request }) => {
    const status = PetStatus.available;
    const findByStatusURL = petEndpoint.setFindByStatusURL(status);

    const response = await request.get(findByStatusURL);
    const pets = await response.json();
    const firstFivePets = pets.slice(0, 5);

    expect(pets).toBeTruthy();
    expect(firstFivePets.length).toBeGreaterThan(0);

    for (const pet of firstFivePets){
      expect(pet.status).toBe(status);
    }
  });

  test('Can find pet by id', async ({ request }) => {
    const petId = '2';
    const findByIdURL: string = petEndpoint.setFindByIdURL(petId);

    const response = await request.get(findByIdURL);
    const targetPet = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(targetPet).toBeDefined();
    expect(targetPet.id === petId);
  });
});

test('Can upload image for a pet', async ({ request }) => {

  const imageFilePath = path.resolve(__dirname, '../data/pet-image.jpeg');
  const petId = '2';
  const uploadImageURL: string = petEndpoint.setUploadImageURL(petId);
  
  const uploadImageResponse = await request.post(uploadImageURL, {
    multipart: {
      additionalMetadata: 'heli',
      file: fs.createReadStream(imageFilePath),
    }
  });

  expect(uploadImageResponse.ok()).toBeTruthy();
});