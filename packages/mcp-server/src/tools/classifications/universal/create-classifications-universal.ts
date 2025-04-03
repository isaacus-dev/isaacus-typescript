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
    'Classify the relevance of a legal document to a query with an Isaacus universal legal AI classifier.',
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
          'The [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query or, if IQL is disabled, the statement, to evaluate the text against.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the text being classified, the query cannot be so long that it exceeds the maximum input length of the universal classifier.',
      },
      text: {
        type: 'string',
        description: 'The text to classify.\n\nThe text must contain at least one non-whitespace character.',
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
          "The method to use for producing an overall confidence score.\n\n`auto` is the default scoring method and is recommended for most use cases. Currently, it is equivalent to `chunk_max`. In the future, it will automatically select the best method based on the model and input.\n\n`chunk_max` uses the highest confidence score of all of the text's chunks.\n\n`chunk_avg` averages the confidence scores of all of the text's chunks.\n\n`chunk_min` uses the lowest confidence score of all of the text's chunks.",
        enum: ['auto', 'chunk_max', 'chunk_avg', 'chunk_min'],
      },
    },
  },
};

export const handler = (client: Isaacus, args: any) => {
  const { ...body } = args;
  return client.classifications.universal.create(body);
};

export default { metadata, tool, handler };
