// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient, ElementModels } from '@kontent-ai/management-sdk';

const client = new ManagementClient({
  environmentId: '<YOUR_ENVIRONMENT_ID>',
  apiKey: '<YOUR_MANAGEMENT_API_KEY>'
});

const response = await client.addContentType()
  .withData(
    {
      codename: "cafe",
      name: "Cafe",
      external_id: "cafe",
      elements: [
        {
          name: "Price per unit",
          type: "number",
          codename: "price_per_unit"
        },
        {
          guidelines: "<h2>Keep Guidelines where the creative process happens.</h2>\n<p>These are sample guidelines that you can place for the whole content item. It’s a place where you can include your content brief, voice and tone recommendations or the URL to a wireframe, so the author will have all the relevant instructions at hand before writing a single line.</p>\n<p>Besides overview guidelines, you can include instructions for each particular content element, as you will see below.</p>",
          type: ElementModels.ElementType.guidelines,
          codename: "n2f836bce_e062_b2cd_5265_f5c3be3aa6f5"
        },
        {
          name: "Street",
          type: ElementModels.ElementType.text,
          codename: "street"
        },
        {
          name: "City",
          type: ElementModels.ElementType.text,
          codename: "city"
        },
        {
          name: "Country",
          type: ElementModels.ElementType.text,
          codename: "country"
        },
        {
          name: "State",
          type: ElementModels.ElementType.text,
          codename: "state"
        },
        {
          name: "ZIP Code",
          type: ElementModels.ElementType.text,
          codename: "zip_code"
        },
        {
          name: "Phone",
          type: ElementModels.ElementType.text,
          codename: "phone"
        },
        {
          name: "Email",
          type: ElementModels.ElementType.text,
          codename: "email"
        },
        {
          name: "Photo",
          type: ElementModels.ElementType.asset,
          codename: "photo"
        }
      ]
    }
  )
  .toPromise();
