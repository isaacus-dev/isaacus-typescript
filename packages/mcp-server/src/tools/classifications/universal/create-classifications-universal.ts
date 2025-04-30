// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Isaacus from 'isaacus';

export const metadata: Metadata = {
  resource: 'classifications.universal',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_classifications_universal',
  description:
    'Classify the relevance of legal documents to a query with an Isaacus universal legal AI classifier.',
  inputSchema: {
    type: 'object',
    properties: {
      model: {
        type: 'string',
        description:
          'The ID of the [model](https://docs.isaacus.com/models#universal-classification) to use for universal classification.',
        enum: ['kanon-universal-classifier', 'kanon-universal-classifier-mini'],
      },
      query: {
        type: 'string',
        description:
          'The [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query or, if IQL is disabled, the statement, to evaluate the texts against.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the texts being classified, the query cannot be so long that it exceeds the maximum input length of the universal classifier.',
      },
      texts: {
        type: 'array',
        description:
          'The texts to classify.\n\nThe texts must contain at least one non-whitespace character.',
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
      is_iql: {
        type: 'boolean',
        description:
          'Whether the query should be interpreted as an [IQL](https://docs.isaacus.com/iql) query or else as a statement.',
      },
      scoring_method: {
        type: 'string',
        description:
          "The method to use for producing an overall confidence score.\n\n`auto` is the default scoring method and is recommended for most use cases. Currently, it is equivalent to `chunk_max`. In the future, it will automatically select the best method based on the model and inputs.\n\n`chunk_max` uses the highest confidence score of all of the texts' chunks.\n\n`chunk_avg` averages the confidence scores of all of the texts' chunks.\n\n`chunk_min` uses the lowest confidence score of all of the texts' chunks.",
        enum: ['auto', 'chunk_max', 'chunk_avg', 'chunk_min'],
      },
    },
  },
};

export const handler = (client: Isaacus, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.classifications.universal.create(body);
};

export default { metadata, tool, handler };
