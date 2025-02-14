// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource universal', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.classifications.universal.create({
      model: 'kanon-uniclassifier',
      query: 'This is a confidentiality clause.',
      text: 'The Supplier agrees not to disclose to any person, other than the Customer, any Confidential Information relating to the Contract or the Goods and/or Services, without prior written approval from the Customer.',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.classifications.universal.create({
      model: 'kanon-uniclassifier',
      query: 'This is a confidentiality clause.',
      text: 'The Supplier agrees not to disclose to any person, other than the Customer, any Confidential Information relating to the Contract or the Goods and/or Services, without prior written approval from the Customer.',
      chunking_options: { overlap_ratio: 0.1, overlap_tokens: 0, size: 512 },
      is_iql: true,
      scoring_method: 'auto',
    });
  });
});
