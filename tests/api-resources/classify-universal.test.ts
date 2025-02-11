// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource classifyUniversal', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.classifyUniversal.create({ model: 'model', query: 'query', text: 'text' });
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
    const response = await client.classifyUniversal.create({
      model: 'model',
      query: 'query',
      text: 'text',
      chunk: true,
      chunk_overlap: 0,
      chunk_size: 0,
      is_iql: true,
    });
  });
});
