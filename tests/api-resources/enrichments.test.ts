// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrichments', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.enrichments.create({
      model: 'kanon-2-enricher',
      texts: ['1.5 You (the "User") agree to be bound by these Terms.'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.enrichments.create({
      model: 'kanon-2-enricher',
      texts: ['1.5 You (the "User") agree to be bound by these Terms.'],
      overflow_strategy: null,
    });
  });
});
