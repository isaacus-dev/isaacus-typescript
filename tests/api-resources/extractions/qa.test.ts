// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource qa', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.extractions.qa.create({
      model: 'kanon-answer-extractor',
      query: 'What is the punishment for murder in Victoria?',
      texts: [
        'The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case.',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.extractions.qa.create({
      model: 'kanon-answer-extractor',
      query: 'What is the punishment for murder in Victoria?',
      texts: [
        'The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case.',
      ],
      ignore_inextractability: false,
      top_k: 1,
      chunking_options: {
        size: 512,
        overlap_ratio: 0.1,
        overlap_tokens: 10,
      },
    });
  });
});
