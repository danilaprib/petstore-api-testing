import {test,expect} from '@playwright/test';
import { PetEndpoint } from '../endpoints/pet';

test('Can add PUT a new pet and GET it', async({page}) => {
    const endpoint = new PetEndpoint();
});