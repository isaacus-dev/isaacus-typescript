// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Isaacus from 'isaacus';

export const metadata: Metadata = {
  resource: 'extractions.qa',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_extractions_qa',
  description: 'Extract answers to questions from legal documents with an Isaacus legal AI answer extractor.',
  inputSchema: {
    type: 'object',
    properties: {
      model: {
        type: 'string',
        description:
          'The ID of the [model](https://docs.isaacus.com/models#extractive-qa) to use for extractive question answering.',
        enum: ['kanon-answer-extractor', 'kanon-answer-extractor-mini'],
      },
      query: {
        type: 'string',
        description:
          'The query to extract the answer to.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the texts from which the answer will be extracted, the query cannot be so long that it exceeds the maximum input length of the model.',
      },
      texts: {
        type: 'array',
        description:
          'The texts to search for the answer in and extract the answer from.\n\nThere must be at least one text.\n\nEach text must contain at least one non-whitespace character.',
        items: {
          type: 'string',
          title: 'Non-blank string',
        },
      },
      chunking_options: {
        type: 'object',
        title: 'Chunking options',
        description: 'Options for how to split text into smaller chunks.',
        properties: {
          overlap_ratio: {
            type: 'number',
            title: 'Unit interval (closed, open)',
            description: 'A number greater than or equal to 0 and less than 1.',
          },
          overlap_tokens: {
            type: 'integer',
            title: 'Non-negative integer',
            description: 'A whole number greater than -1.',
          },
          size: {
            type: 'integer',
            title: 'Positive integer',
            description: 'A whole number greater than or equal to 1.',
          },
        },
        required: [],
      },
      ignore_inextractability: {
        type: 'boolean',
        description:
          "Whether to, if the model's score of the likelihood that an answer can not be extracted from a text is greater than the highest score of all possible answers, still return the highest scoring answers for that text.\n\nIf you have already determined that the texts answer the query, for example, by using one of our classification or reranker models, then you should set this to `true`.",
      },
      top_k: {
        type: 'integer',
        description:
          'The number of highest scoring answers to return.\n\nIf `null`, which is the default, all answers will be returned.',
      },
    },
  },
};

export const handler = (client: Isaacus, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.extractions.qa.create(body);
};

export default { metadata, tool, handler };
