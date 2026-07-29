import { test, expect } from '@playwright/test';
import { StoreEndpoint, OrderModel, OrderStatus } from '../endpoints/store';

const storeEndpoint = new StoreEndpoint();

test.describe.configure({ mode: 'serial' });

test('Can create a new order, fetch it by its ID and delete it', async ({ request }) => {

    const orderId = Math.floor(10000000 + Math.random() * 90000000);

    // BEGIN create order
    const newOrder: OrderModel = {
        id: orderId,
        petId: 1,
        quantity: 1,
        shipDate: new Date().toISOString(),
        status: OrderStatus.placed,
        complete: false,
    }

    const postResponse = await request.post(storeEndpoint.orderURL, {
        data: newOrder
    });

    expect(postResponse.ok()).toBeTruthy();
    // END create order

    // BEGIN get order by id
    const getResponse = await request.get(storeEndpoint.setFindOrderByIdURL(orderId));
    const getJson = await getResponse.json();

    expect(getResponse.ok()).toBeTruthy();
    expect(getJson).toBeTruthy();
    expect(getJson.id).toBe(Number(orderId));
    // END get order by id


    // BEGIN delete existing order
    const deleteExistingOrderResponse = await request.delete(storeEndpoint.setFindOrderByIdURL(orderId));

    expect(deleteExistingOrderResponse.ok()).toBeTruthy();
    expect(deleteExistingOrderResponse.status()).toBe(200);
    // END delete existing order


    // BEGIN delete non-existing order
    const deleteNonExistingOrderResponse = await request.delete(storeEndpoint.setFindOrderByIdURL(orderId));

    expect(deleteNonExistingOrderResponse.ok()).not.toBeTruthy();
    expect(deleteNonExistingOrderResponse.status()).toBe(404);
    // END delete non-existing order
});