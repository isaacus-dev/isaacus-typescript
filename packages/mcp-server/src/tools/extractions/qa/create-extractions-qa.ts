// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'isaacus-mcp/filtering';
import { Metadata, asTextContentResult } from 'isaacus-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Isaacus from 'isaacus';

export const metadata: Metadata = {
  resource: 'extractions.qa',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/extractions/qa',
  operationId: 'CreateAnswerExtractions',
};

export const tool: Tool = {
  name: 'create_extractions_qa',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExtract answers to questions from legal documents with an Isaacus legal AI answer extractor.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/answer_extraction_response',\n  $defs: {\n    answer_extraction_response: {\n      type: 'object',\n      title: 'Answer extraction response',\n      description: 'The results of extracting answers from texts.',\n      properties: {\n        extractions: {\n          type: 'array',\n          description: 'The results of extracting answers from the texts, ordered from highest to lowest answer confidence score (or else lowest to highest inextractability score if there are no answers for a text).',\n          items: {\n            type: 'object',\n            title: 'Answer extraction',\n            description: 'The result of extracting answers from a text.',\n            properties: {\n              answers: {\n                type: 'array',\n                description: 'Answers extracted from the text, ordered from highest to lowest score.',\n                items: {\n                  type: 'object',\n                  title: 'Answer',\n                  description: 'An answer extracted from a text.',\n                  properties: {\n                    end: {\n                      type: 'integer',\n                      description: 'The index of the character immediately after the last character of the answer in the text, starting from `0` (such that, in Python, the answer is equivalent to `text[start:end]`).'\n                    },\n                    score: {\n                      type: 'number',\n                      description: 'A score between `0` and `1`, inclusive, representing the strength of the answer.'\n                    },\n                    start: {\n                      type: 'integer',\n                      description: 'The index of the first character of the answer in the text, starting from `0` (and, therefore, ending at the number of characters in the text minus `1`).'\n                    },\n                    text: {\n                      type: 'string',\n                      description: 'The text of the answer.'\n                    }\n                  },\n                  required: [                    'end',\n                    'score',\n                    'start',\n                    'text'\n                  ]\n                }\n              },\n              index: {\n                type: 'integer',\n                description: 'The index of the text in the input array of texts that this result represents, starting from `0` (and, therefore, ending at the number of texts minus `1`).'\n              },\n              inextractability_score: {\n                type: 'number',\n                description: 'A score between `0` and `1`, inclusive, representing the likelihood that an answer can not be extracted from the text.\\n\\nWhere this score is greater than the highest score of all possible answers, the text should be regarded as not having an extractable answer to the query. If that is the case and `ignore_inextractability` is `false`, no answers will be returned.'\n              }\n            },\n            required: [              'answers',\n              'index',\n              'inextractability_score'\n            ]\n          }\n        },\n        usage: {\n          type: 'object',\n          title: 'Answer extraction usage',\n          description: 'Statistics about the usage of resources in the process of extracting answers from the texts.',\n          properties: {\n            input_tokens: {\n              type: 'integer',\n              description: 'The number of tokens inputted to the model.'\n            }\n          },\n          required: [            'input_tokens'\n          ]\n        }\n      },\n      required: [        'extractions',\n        'usage'\n      ]\n    }\n  }\n}\n```",
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.extractions.qa.create(body)));
};

export default { metadata, tool, handler };
