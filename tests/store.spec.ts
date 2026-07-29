import { test, expect } from '@playwright/test';
import { StoreEndpoint, OrderStatus, OrderModel } from '../endpoints/store';

const storeEndpoint = new StoreEndpoint();

test('Can get all inventories by status', async ({ request }) => {
    const response = await request.get(storeEndpoint.getByStatusURL);

    const json = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(json).toBeTruthy();
});

test('Can place a new order', async ({ request }) => {

    const newOrder: OrderModel = {
        id: 1,
        petId: 1,
        quantity: 1,
        shipDate: new Date().toISOString(),
        status: OrderStatus.placed,
        complete: true,
    }

    const response = await request.post(storeEndpoint.orderURL, {
        data: newOrder
    });

    const json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(json).toBeDefined();
    expect(json).toBeTruthy();
});


test('Can get order by id', async ({ request }) => {
    const orderId = 1; // value >= 1 and <= 10
    const response = await request.get(storeEndpoint.setFindOrderByIdURL(orderId));
    const json = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(json).toBeTruthy();
    expect(json.id).toBe(Number(orderId));
});

