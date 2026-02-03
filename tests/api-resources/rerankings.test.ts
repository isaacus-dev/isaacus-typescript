// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';

const client = new Isaacus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rerankings', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.rerankings.create({
      model: 'kanon-universal-classifier',
      query: 'What are the essential elements required to establish a negligence claim?',
      texts: [
        'To form a contract, there must be an offer, acceptance, consideration, and mutual intent to be bound.',
        'Criminal cases involve a completely different standard, requiring proof beyond a reasonable doubt.',
        'In a negligence claim, the plaintiff must prove duty, breach, causation, and damages.',
        'Negligence in tort law requires establishing a duty of care that the defendant owed to the plaintiff.',
        'The concept of negligence is central to tort law, with courts assessing whether a breach of duty caused harm.',
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
    const response = await client.rerankings.create({
      model: 'kanon-universal-classifier',
      query: 'What are the essential elements required to establish a negligence claim?',
      texts: [
        'To form a contract, there must be an offer, acceptance, consideration, and mutual intent to be bound.',
        'Criminal cases involve a completely different standard, requiring proof beyond a reasonable doubt.',
        'In a negligence claim, the plaintiff must prove duty, breach, causation, and damages.',
        'Negligence in tort law requires establishing a duty of care that the defendant owed to the plaintiff.',
        'The concept of negligence is central to tort law, with courts assessing whether a breach of duty caused harm.',
      ],
      top_n: 1,
      is_iql: false,
      scoring_method: 'auto',
      chunking_options: {
        size: 512,
        overlap_ratio: 0.1,
        overlap_tokens: 10,
      },
    });
  });
});
