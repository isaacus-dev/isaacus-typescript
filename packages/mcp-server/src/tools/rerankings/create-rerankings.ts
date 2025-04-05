// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Isaacus from 'isaacus';

export const metadata: Metadata = {
  resource: 'rerankings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_rerankings',
  description: 'Rerank legal documents by their relevance to a query with an Isaacus legal AI reranker.',
  inputSchema: {
    type: 'object',
    properties: {
      model: {
        type: 'string',
        description: 'The ID of the [model](https://docs.isaacus.com/models#reranking) to use for reranking.',
        enum: ['kanon-universal-classifier', 'kanon-universal-classifier-mini'],
      },
      query: {
        type: 'string',
        description:
          'The query to evaluate the relevance of the texts to.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the texts being reranked, the query cannot be so long that it exceeds the maximum input length of the reranker.',
      },
      texts: {
        type: 'array',
        description:
          'The texts to rerank.\n\nThere must be at least one text.\n\nThe texts must contain at least one non-whitespace character.',
        items: {
          type: 'string',
          title: 'Non-blank string',
          description: 'A string with at least one non-whitespace character.',
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
      is_iql: {
        type: 'boolean',
        description:
          'Whether the query should be interpreted as an [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query, which is not the case by default.\n\nIf you allow untrusted users to construct their own queries, think carefully before enabling IQL since queries can be crafted to consume an excessively large amount of tokens.',
      },
      scoring_method: {
        type: 'string',
        description:
          "The method to use for producing an overall relevance score for a text.\n\n`auto` is the default scoring method and is recommended for most use cases. Currently, it is equivalent to `chunk_max`. In the future, it will automatically select the best method based on the model and inputs.\n\n`chunk_max` uses the highest relevance score of all of a text's chunks.\n\n`chunk_avg` averages the relevance scores of all of a text's chunks.\n\n`chunk_min` uses the lowest relevance score of all of a text's chunks.",
        enum: ['auto', 'chunk_max', 'chunk_avg', 'chunk_min'],
      },
      top_n: {
        type: 'integer',
        title: 'Positive integer',
        description: 'A whole number greater than or equal to 1.',
      },
    },
  },
};

export const handler = (client: Isaacus, args: any) => {
  const { ...body } = args;
  return client.rerankings.create(body);
};

export default { metadata, tool, handler };
