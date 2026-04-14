// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrichments', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.enrichments.create({
      model: 'kanon-2-enricher',
      texts: [
        '[42] The U.S. Attorney General, Mr. McGill, argued at ¶ 21 of the Filing that "§ 206 of Title 29 of the U.S. Code (the "Labor Title") does not apply to the plaintiff, Ms. Moody, given the definition of an "employee" at §203(e)(4) of the Labor Title does not include volunteers, and, regardless, she lives in Austria."',
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.enrichments.create({
      model: 'kanon-2-enricher',
      texts: [
        '[42] The U.S. Attorney General, Mr. McGill, argued at ¶ 21 of the Filing that "§ 206 of Title 29 of the U.S. Code (the "Labor Title") does not apply to the plaintiff, Ms. Moody, given the definition of an "employee" at §203(e)(4) of the Labor Title does not include volunteers, and, regardless, she lives in Austria."',
      ],
      overflow_strategy: 'auto',
    });
  });
});
