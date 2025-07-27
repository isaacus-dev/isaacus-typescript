// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'isaacus-mcp/filtering';
import { Metadata, asTextContentResult } from 'isaacus-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Isaacus from 'isaacus';

export const metadata: Metadata = {
  resource: 'classifications.universal',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/classifications/universal',
  operationId: 'CreateUniversalClassifications',
};

export const tool: Tool = {
  name: 'create_classifications_universal',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nClassify the relevance of legal documents to a query with an Isaacus universal legal AI classifier.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/universal_classification',\n  $defs: {\n    universal_classification: {\n      type: 'object',\n      title: 'Universal classification response',\n      description: 'Classifications of the relevance of legal documents to a query produced by an Isaacus universal legal AI classifier.',\n      properties: {\n        classifications: {\n          type: 'array',\n          description: 'The classifications of the texts, by relevance to the query, in order from highest to lowest relevance score.',\n          items: {\n            type: 'object',\n            title: 'Universal classification',\n            properties: {\n              chunks: {\n                type: 'array',\n                description: 'The text as broken into chunks by [semchunk](https://github.com/isaacus-dev/semchunk), each chunk with its own confidence score, ordered from highest to lowest score.\\n\\nIf no chunking occurred, this will be `null`.',\n                items: {\n                  type: 'object',\n                  title: 'Universal classification chunk',\n                  properties: {\n                    end: {\n                      type: 'integer',\n                      description: 'The index of the character immediately after the last character of the chunk in the original text, beginning from `0` (such that, in Python, the chunk is equivalent to `text[start:end]`).'\n                    },\n                    index: {\n                      type: 'integer',\n                      description: 'The original position of the chunk in the outputted list of chunks before sorting, starting from `0` (and, therefore, ending at the number of chunks minus `1`).'\n                    },\n                    score: {\n                      type: 'number',\n                      description: 'The model\\'s score of the likelihood that the query expressed about the chunk is supported by the chunk.\\n\\nA score greater than `0.5` indicates that the chunk supports the query, while a score less than `0.5` indicates that the chunk does not support the query.'\n                    },\n                    start: {\n                      type: 'integer',\n                      description: 'The index of the character in the original text where the chunk starts, beginning from `0`.'\n                    },\n                    text: {\n                      type: 'string',\n                      description: 'The text of the chunk.'\n                    }\n                  },\n                  required: [                    'end',\n                    'index',\n                    'score',\n                    'start',\n                    'text'\n                  ]\n                }\n              },\n              index: {\n                type: 'integer',\n                description: 'The index of the text in the input array of texts, starting from `0` (and, therefore, ending at the number of texts minus `1`).'\n              },\n              score: {\n                type: 'number',\n                description: 'A score of the likelihood that the query expressed about the text is supported by the text.\\n\\nA score greater than `0.5` indicates that the text supports the query, while a score less than `0.5` indicates that the text does not support the query.'\n              }\n            },\n            required: [              'chunks',\n              'index',\n              'score'\n            ]\n          }\n        },\n        usage: {\n          type: 'object',\n          title: 'Universal classification usage',\n          description: 'Statistics about the usage of resources in the process of classifying the text.',\n          properties: {\n            input_tokens: {\n              type: 'integer',\n              description: 'The number of tokens inputted to the model.'\n            }\n          },\n          required: [            'input_tokens'\n          ]\n        }\n      },\n      required: [        'classifications',\n        'usage'\n      ]\n    }\n  }\n}\n```",
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
          'The texts to classify.\n\nEach text must contain at least one non-whitespace character.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['model', 'query', 'texts'],
  },
  annotations: {},
};

export const handler = async (client: Isaacus, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.classifications.universal.create(body)));
};

export default { metadata, tool, handler };
