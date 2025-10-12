// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'isaacus-mcp/filtering';
import { Metadata, asTextContentResult } from 'isaacus-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Isaacus from 'isaacus';

export const metadata: Metadata = {
  resource: 'embeddings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/embeddings',
  operationId: 'CreateEmbeddings',
};

export const tool: Tool = {
  name: 'create_embeddings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEmbed legal texts with an Isaacus legal AI embedder.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embedding_create_response',\n  $defs: {\n    embedding_create_response: {\n      type: 'object',\n      title: 'Embeddings response',\n      description: 'Embeddings of legal texts produced by an Isaacus legal AI embedder.',\n      properties: {\n        embeddings: {\n          type: 'array',\n          description: 'The embeddings of the inputs.',\n          items: {\n            type: 'object',\n            title: 'Embedding',\n            properties: {\n              embedding: {\n                type: 'array',\n                description: 'The embedding of the content represented as an array of floating point numbers.',\n                items: {\n                  type: 'number'\n                }\n              },\n              index: {\n                type: 'integer',\n                description: 'The position of the content in the input array of contents, starting from `0` (and, therefore, ending at the number of contents minus `1`).'\n              }\n            },\n            required: [              'embedding',\n              'index'\n            ]\n          }\n        },\n        usage: {\n          type: 'object',\n          title: 'Embeddings usage',\n          description: 'Statistics about the usage of resources in the process of embedding the inputs.',\n          properties: {\n            input_tokens: {\n              type: 'integer',\n              description: 'The number of tokens inputted to the model.'\n            }\n          },\n          required: [            'input_tokens'\n          ]\n        }\n      },\n      required: [        'embeddings',\n        'usage'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      model: {
        type: 'string',
        description:
          'The ID of the [model](https://docs.isaacus.com/models#embeddings) to use for embedding.',
        enum: ['kanon-2-embedder'],
      },
      texts: {
        anyOf: [
          {
            type: 'array',
            items: {
              type: 'string',
              title: 'Non-blank string',
            },
          },
          {
            type: 'string',
            title: 'Non-blank string',
          },
        ],
        description:
          'The text or array of texts to embed.\n\nEach text must contain at least one non-whitespace character.\n\nNo more than 1,000 texts can be embedded in a single request.',
      },
      dimensions: {
        type: 'integer',
        title: 'Positive integer',
        description: 'A whole number greater than or equal to 1.',
      },
      overflow_strategy: {
        type: 'string',
        description:
          "The strategy to employ when content exceeds the model's maximum input length.\n\n`drop_end`, which is the default setting, drops tokens from the end of the content exceeding the limit.\n\nIf `null`, an error will be raised if any content exceeds the model's maximum input length.",
        enum: ['drop_end'],
      },
      task: {
        type: 'string',
        description:
          'The task the embeddings will be used for.\n\n`retrieval/query` is meant for queries and statements, and `retrieval/document` is meant for anything to be retrieved using query embeddings.\n\nIf `null`, which is the default setting, embeddings will not be optimized for any particular task.',
        enum: ['retrieval/query', 'retrieval/document'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['model', 'texts'],
  },
  annotations: {},
};

export const handler = async (client: Isaacus, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.embeddings.create(body)));
};

export default { metadata, tool, handler };
