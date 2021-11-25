// DocSection: delivery_api_get_element
// Tip: Find more about JS/TS SDKs at https://docs.kontent.ai/javascript
import { createDeliveryClient } from '@kentico/kontent-delivery';

const deliveryClient = createDeliveryClient({
  projectId: '<YOUR_PROJECT_ID>'
});

const response = await deliveryClient.element('article', 'title')
    .toPromise();
// EndDocSection