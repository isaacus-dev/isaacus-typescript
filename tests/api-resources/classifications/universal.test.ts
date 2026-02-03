// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource universal', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.classifications.universal.create({
      model: 'kanon-universal-classifier',
      query: 'This is a confidentiality clause.',
      texts: ['I agree not to tell anyone about the document.'],
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
    const response = await client.classifications.universal.create({
      model: 'kanon-universal-classifier',
      query: 'This is a confidentiality clause.',
      texts: ['I agree not to tell anyone about the document.'],
      chunking_options: {
        overlap_ratio: 0.1,
        overlap_tokens: 10,
        size: 512,
      },
      is_iql: true,
      scoring_method: 'auto',
    });
  });
});
