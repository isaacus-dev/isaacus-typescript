// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/embeddings',
    httpMethod: 'post',
    summary: 'Embedding',
    description: 'Vectorize content with an Isaacus embedding model.',
    stainlessPath: '(resource) embeddings > (method) create',
    qualified: 'client.embeddings.create',
    params: [
      "model: 'kanon-2-embedder';",
      'texts: string[] | string;',
      "task?: 'retrieval/query' | 'retrieval/document';",
      "overflow_strategy?: 'drop_end';",
      'dimensions?: number;',
    ],
    response: '{ embeddings: { index: number; embedding: number[]; }[]; usage: { input_tokens: number; }; }',
    markdown:
      "## create\n\n`client.embeddings.create(model: 'kanon-2-embedder', texts: string[] | string, task?: 'retrieval/query' | 'retrieval/document', overflow_strategy?: 'drop_end', dimensions?: number): { embeddings: object[]; usage: object; }`\n\n**post** `/embeddings`\n\nVectorize content with an Isaacus embedding model.\n\n### Parameters\n\n- `model: 'kanon-2-embedder'`\n  The ID of the [model](https://docs.isaacus.com/models#embedding) to use for embedding.\n\n- `texts: string[] | string`\n  The text or array of texts to embed.\n\nEach text must contain at least one non-whitespace character.\n\nNo more than 128 texts can be embedded in a single request.\n\n- `task?: 'retrieval/query' | 'retrieval/document'`\n  The task the embeddings will be used for.\n\n`retrieval/query` is meant for queries and statements, and `retrieval/document` is meant for anything to be retrieved using query embeddings.\n\nIf `null`, which is the default setting, embeddings will not be optimized for any particular task.\n\n- `overflow_strategy?: 'drop_end'`\n  The strategy to employ when content exceeds the model's maximum input length.\n\n`drop_end`, which is the default setting, drops tokens from the end of the content exceeding the limit.\n\nIf `null`, an error will be raised if any content exceeds the model's maximum input length.\n\n- `dimensions?: number`\n  A whole number greater than or equal to 1.\n\n### Returns\n\n- `{ embeddings: { index: number; embedding: number[]; }[]; usage: { input_tokens: number; }; }`\n\n  - `embeddings: { index: number; embedding: number[]; }[]`\n  - `usage: { input_tokens: number; }`\n\n### Example\n\n```typescript\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus();\n\nconst embeddingResponse = await client.embeddings.create({ model: 'kanon-2-embedder', texts: ['Are restraints of trade enforceable under English law?', 'What is a non-compete clause?'] });\n\nconsole.log(embeddingResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.isaacus.com/v1/embeddings \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ISAACUS_API_KEY" \\\n    -d \'{\n          "model": "kanon-2-embedder",\n          "texts": [\n            "Are restraints of trade enforceable under English law?",\n            "What is a non-compete clause?"\n          ]\n        }\'',
      },
      python: {
        method: 'embeddings.create',
        example:
          'import os\nfrom isaacus import Isaacus\n\nclient = Isaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\nembedding_response = client.embeddings.create(\n    model="kanon-2-embedder",\n    texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n)\nprint(embedding_response.embeddings)',
      },
      typescript: {
        method: 'client.embeddings.create',
        example:
          "import Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst embeddingResponse = await client.embeddings.create({\n  model: 'kanon-2-embedder',\n  texts: [\n    'Are restraints of trade enforceable under English law?',\n    'What is a non-compete clause?',\n  ],\n});\n\nconsole.log(embeddingResponse.embeddings);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/classifications/universal',
    httpMethod: 'post',
    summary: 'Universal classification',
    description: 'Classify documents with an Isaacus universal classification model.',
    stainlessPath: '(resource) classifications.universal > (method) create',
    qualified: 'client.classifications.universal.create',
    params: [
      "model: 'kanon-universal-classifier';",
      'query: string;',
      'texts: string[];',
      'is_iql?: boolean;',
      "scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min';",
      'chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; };',
    ],
    response:
      '{ classifications: { index: number; score: number; chunks: { index: number; start: number; end: number; score: number; text: string; }[]; }[]; usage: { input_tokens: number; }; }',
    markdown:
      "## create\n\n`client.classifications.universal.create(model: 'kanon-universal-classifier', query: string, texts: string[], is_iql?: boolean, scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min', chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; }): { classifications: object[]; usage: object; }`\n\n**post** `/classifications/universal`\n\nClassify documents with an Isaacus universal classification model.\n\n### Parameters\n\n- `model: 'kanon-universal-classifier'`\n  The ID of the [model](https://docs.isaacus.com/models#universal-classification) to use for universal classification.\n\n- `query: string`\n  The [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query or, if IQL is disabled, the statement, to evaluate the texts against.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the texts being classified, the query cannot be so long that it exceeds the maximum input length of the universal classifier.\n\n- `texts: string[]`\n  The texts to classify.\n\nEach text must contain at least one non-whitespace character.\n\n- `is_iql?: boolean`\n  Whether the query should be interpreted as an [IQL](https://docs.isaacus.com/iql) query or else as a statement.\n\n- `scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min'`\n  The method to use for producing an overall confidence score.\n\n`auto` is the default scoring method and is recommended for most use cases. Currently, it is equivalent to `chunk_max`. In the future, it will automatically select the best method based on the model and inputs.\n\n`chunk_max` uses the highest confidence score of all of the texts' chunks.\n\n`chunk_avg` averages the confidence scores of all of the texts' chunks.\n\n`chunk_min` uses the lowest confidence score of all of the texts' chunks.\n\n- `chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; }`\n  Options for how to split text into smaller chunks.\n  - `size?: number`\n    A whole number greater than or equal to 1.\n  - `overlap_ratio?: number`\n    A number greater than or equal to 0 and less than 1.\n  - `overlap_tokens?: number`\n    A whole number greater than or equal to 0.\n\n### Returns\n\n- `{ classifications: { index: number; score: number; chunks: { index: number; start: number; end: number; score: number; text: string; }[]; }[]; usage: { input_tokens: number; }; }`\n\n  - `classifications: { index: number; score: number; chunks: { index: number; start: number; end: number; score: number; text: string; }[]; }[]`\n  - `usage: { input_tokens: number; }`\n\n### Example\n\n```typescript\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus();\n\nconst universalClassificationResponse = await client.classifications.universal.create({\n  model: 'kanon-universal-classifier',\n  query: 'This is a confidentiality clause.',\n  texts: ['I agree not to tell anyone about the document.'],\n});\n\nconsole.log(universalClassificationResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.isaacus.com/v1/classifications/universal \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ISAACUS_API_KEY" \\\n    -d \'{\n          "model": "kanon-universal-classifier",\n          "query": "This is a confidentiality clause.",\n          "texts": [\n            "I agree not to tell anyone about the document."\n          ]\n        }\'',
      },
      python: {
        method: 'classifications.universal.create',
        example:
          'import os\nfrom isaacus import Isaacus\n\nclient = Isaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\nuniversal_classification_response = client.classifications.universal.create(\n    model="kanon-universal-classifier",\n    query="This is a confidentiality clause.",\n    texts=["I agree not to tell anyone about the document."],\n)\nprint(universal_classification_response.classifications)',
      },
      typescript: {
        method: 'client.classifications.universal.create',
        example:
          "import Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst universalClassificationResponse = await client.classifications.universal.create({\n  model: 'kanon-universal-classifier',\n  query: 'This is a confidentiality clause.',\n  texts: ['I agree not to tell anyone about the document.'],\n});\n\nconsole.log(universalClassificationResponse.classifications);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/rerankings',
    httpMethod: 'post',
    summary: 'Reranking',
    description: 'Score and rank documents by their relevance to queries with an Isaacus reranker.',
    stainlessPath: '(resource) rerankings > (method) create',
    qualified: 'client.rerankings.create',
    params: [
      "model: 'kanon-2-reranker' | 'kanon-universal-classifier';",
      'query: string;',
      'texts: string[];',
      'top_n?: number;',
      'is_iql?: boolean;',
      "scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min';",
      'chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; };',
    ],
    response: '{ results: { index: number; score: number; }[]; usage: { input_tokens: number; }; }',
    markdown:
      "## create\n\n`client.rerankings.create(model: 'kanon-2-reranker' | 'kanon-universal-classifier', query: string, texts: string[], top_n?: number, is_iql?: boolean, scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min', chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; }): { results: object[]; usage: object; }`\n\n**post** `/rerankings`\n\nScore and rank documents by their relevance to queries with an Isaacus reranker.\n\n### Parameters\n\n- `model: 'kanon-2-reranker' | 'kanon-universal-classifier'`\n  The ID of the model to use for reranking, being either a [reranking model](https://docs.isaacus.com/models/introduction#reranking) or [universal classification model](https://docs.isaacus.com/models/introduction#universal-classification).\n\n- `query: string`\n  The query to evaluate the relevance of the texts to.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the texts being reranked, the query cannot be so long that it exceeds the maximum input length of the reranker.\n\n- `texts: string[]`\n  The texts to rerank.\n\nThere must be at least one text.\n\nEach text must contain at least one non-whitespace character.\n\n- `top_n?: number`\n  A whole number greater than or equal to 1.\n\n- `is_iql?: boolean`\n  Whether the query should be interpreted as an [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query, which is not the case by default.\n\nIf you allow untrusted users to construct their own queries, think carefully before enabling IQL since queries can be crafted to consume an excessively large amount of tokens.\n\n- `scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min'`\n  The method to use for producing an overall relevance score for a text that exceeds the model's local context window and has, therefore, been split into multiple chunks.\n\n`auto` is the default scoring method and is recommended for most use cases. Currently, it is equivalent to `chunk_max`. In the future, it will automatically select the best method based on the model and inputs.\n\n`chunk_max` uses the highest relevance score of all of a text's chunks.\n\n`chunk_avg` averages the relevance scores of all of a text's chunks.\n\n`chunk_min` uses the lowest relevance score of all of a text's chunks.\n\n- `chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; }`\n  Options for how to split text into smaller chunks.\n  - `size?: number`\n    A whole number greater than or equal to 1.\n  - `overlap_ratio?: number`\n    A number greater than or equal to 0 and less than 1.\n  - `overlap_tokens?: number`\n    A whole number greater than or equal to 0.\n\n### Returns\n\n- `{ results: { index: number; score: number; }[]; usage: { input_tokens: number; }; }`\n\n  - `results: { index: number; score: number; }[]`\n  - `usage: { input_tokens: number; }`\n\n### Example\n\n```typescript\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus();\n\nconst rerankingResponse = await client.rerankings.create({\n  model: 'kanon-2-reranker',\n  query: 'What are the essential elements required to establish a negligence claim?',\n  texts: ['To form a contract, there must be an offer, acceptance, consideration, and mutual intent to be bound.', 'Criminal cases involve a completely different standard, requiring proof beyond a reasonable doubt.', 'In a negligence claim, the plaintiff must prove duty, breach, causation, and damages.', 'Negligence in tort law requires establishing a duty of care that the defendant owed to the plaintiff.', 'The concept of negligence is central to tort law, with courts assessing whether a breach of duty caused harm.'],\n});\n\nconsole.log(rerankingResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.isaacus.com/v1/rerankings \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ISAACUS_API_KEY" \\\n    -d \'{\n          "model": "kanon-2-reranker",\n          "query": "What are the essential elements required to establish a negligence claim?",\n          "texts": [\n            "To form a contract, there must be an offer, acceptance, consideration, and mutual intent to be bound.",\n            "Criminal cases involve a completely different standard, requiring proof beyond a reasonable doubt.",\n            "In a negligence claim, the plaintiff must prove duty, breach, causation, and damages.",\n            "Negligence in tort law requires establishing a duty of care that the defendant owed to the plaintiff.",\n            "The concept of negligence is central to tort law, with courts assessing whether a breach of duty caused harm."\n          ]\n        }\'',
      },
      python: {
        method: 'rerankings.create',
        example:
          'import os\nfrom isaacus import Isaacus\n\nclient = Isaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\nreranking_response = client.rerankings.create(\n    model="kanon-2-reranker",\n    query="What are the essential elements required to establish a negligence claim?",\n    texts=["To form a contract, there must be an offer, acceptance, consideration, and mutual intent to be bound.", "Criminal cases involve a completely different standard, requiring proof beyond a reasonable doubt.", "In a negligence claim, the plaintiff must prove duty, breach, causation, and damages.", "Negligence in tort law requires establishing a duty of care that the defendant owed to the plaintiff.", "The concept of negligence is central to tort law, with courts assessing whether a breach of duty caused harm."],\n)\nprint(reranking_response.results)',
      },
      typescript: {
        method: 'client.rerankings.create',
        example:
          "import Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst rerankingResponse = await client.rerankings.create({\n  model: 'kanon-2-reranker',\n  query: 'What are the essential elements required to establish a negligence claim?',\n  texts: [\n    'To form a contract, there must be an offer, acceptance, consideration, and mutual intent to be bound.',\n    'Criminal cases involve a completely different standard, requiring proof beyond a reasonable doubt.',\n    'In a negligence claim, the plaintiff must prove duty, breach, causation, and damages.',\n    'Negligence in tort law requires establishing a duty of care that the defendant owed to the plaintiff.',\n    'The concept of negligence is central to tort law, with courts assessing whether a breach of duty caused harm.',\n  ],\n});\n\nconsole.log(rerankingResponse.results);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/extractions/qa',
    httpMethod: 'post',
    summary: 'Extractive question answering',
    description: 'Extract information from documents with an Isaacus extractive question answering model.',
    stainlessPath: '(resource) extractions.qa > (method) create',
    qualified: 'client.extractions.qa.create',
    params: [
      "model: 'kanon-answer-extractor';",
      'query: string;',
      'texts: string[];',
      'ignore_inextractability?: boolean;',
      'top_k?: number;',
      'chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; };',
    ],
    response:
      '{ extractions: { index: number; answers: { text: string; start: number; end: number; score: number; }[]; inextractability_score: number; }[]; usage: { input_tokens: number; }; }',
    markdown:
      "## create\n\n`client.extractions.qa.create(model: 'kanon-answer-extractor', query: string, texts: string[], ignore_inextractability?: boolean, top_k?: number, chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; }): { extractions: object[]; usage: object; }`\n\n**post** `/extractions/qa`\n\nExtract information from documents with an Isaacus extractive question answering model.\n\n### Parameters\n\n- `model: 'kanon-answer-extractor'`\n  The ID of the [model](https://docs.isaacus.com/models#extractive-question-answering) to use for extractive question answering.\n\n- `query: string`\n  The query to extract the answer to.\n\nThe query must contain at least one non-whitespace character.\n\nUnlike the texts from which the answer will be extracted, the query cannot be so long that it exceeds the maximum input length of the model.\n\n- `texts: string[]`\n  The texts to search for the answer in and extract the answer from.\n\nThere must be at least one text.\n\nEach text must contain at least one non-whitespace character.\n\n- `ignore_inextractability?: boolean`\n  Whether to, if the model's score of the likelihood that an answer can not be extracted from a text is greater than the highest score of all possible answers, still return the highest scoring answers for that text.\n\nIf you have already determined that the texts answer the query, for example, by using one of our classification or reranker models, then you should set this to `true`.\n\n- `top_k?: number`\n  The number of highest scoring answers to return.\n\nIf `null`, which is the default, all answers will be returned.\n\n- `chunking_options?: { size?: number; overlap_ratio?: number; overlap_tokens?: number; }`\n  Options for how to split text into smaller chunks.\n  - `size?: number`\n    A whole number greater than or equal to 1.\n  - `overlap_ratio?: number`\n    A number greater than or equal to 0 and less than 1.\n  - `overlap_tokens?: number`\n    A whole number greater than or equal to 0.\n\n### Returns\n\n- `{ extractions: { index: number; answers: { text: string; start: number; end: number; score: number; }[]; inextractability_score: number; }[]; usage: { input_tokens: number; }; }`\n\n  - `extractions: { index: number; answers: { text: string; start: number; end: number; score: number; }[]; inextractability_score: number; }[]`\n  - `usage: { input_tokens: number; }`\n\n### Example\n\n```typescript\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus();\n\nconst answerExtractionResponse = await client.extractions.qa.create({\n  model: 'kanon-answer-extractor',\n  query: 'What is the punishment for murder in Victoria?',\n  texts: ['The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case.'],\n});\n\nconsole.log(answerExtractionResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.isaacus.com/v1/extractions/qa \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ISAACUS_API_KEY" \\\n    -d \'{\n          "model": "kanon-answer-extractor",\n          "query": "What is the punishment for murder in Victoria?",\n          "texts": [\n            "The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case."\n          ]\n        }\'',
      },
      python: {
        method: 'extractions.qa.create',
        example:
          'import os\nfrom isaacus import Isaacus\n\nclient = Isaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\nanswer_extraction_response = client.extractions.qa.create(\n    model="kanon-answer-extractor",\n    query="What is the punishment for murder in Victoria?",\n    texts=["The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case."],\n)\nprint(answer_extraction_response.extractions)',
      },
      typescript: {
        method: 'client.extractions.qa.create',
        example:
          "import Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst answerExtractionResponse = await client.extractions.qa.create({\n  model: 'kanon-answer-extractor',\n  query: 'What is the punishment for murder in Victoria?',\n  texts: [\n    'The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case.',\n  ],\n});\n\nconsole.log(answerExtractionResponse.extractions);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/enrichments',
    httpMethod: 'post',
    summary: 'Enrichment',
    description: 'Enrich documents with an Isaacus enrichment model.',
    stainlessPath: '(resource) enrichments > (method) create',
    qualified: 'client.enrichments.create',
    params: [
      "model: 'kanon-2-enricher';",
      'texts: string[] | string;',
      "overflow_strategy?: 'auto' | 'drop_end' | 'chunk';",
    ],
    response: '{ results: { index: number; document: object; }[]; usage: { input_tokens: number; }; }',
    markdown:
      "## create\n\n`client.enrichments.create(model: 'kanon-2-enricher', texts: string[] | string, overflow_strategy?: 'auto' | 'drop_end' | 'chunk'): { results: object[]; usage: object; }`\n\n**post** `/enrichments`\n\nEnrich documents with an Isaacus enrichment model.\n\n### Parameters\n\n- `model: 'kanon-2-enricher'`\n  The ID of the [model](https://docs.isaacus.com/models#enrichment) to use for enrichment.\n\n- `texts: string[] | string`\n  A text or array of texts to be enriched, each containing at least one non-whitespace character.\n\nNo more than 8 texts can be enriched in a single request.\n\n- `overflow_strategy?: 'auto' | 'drop_end' | 'chunk'`\n  The strategy for handling content exceeding the model's maximum input length.\n\n`auto`, which is the recommended setting, currently behaves the same as `chunk`, which intelligently breaks the input up into smaller chunks and then stitches the results back together into a single prediction. In the future `auto` may implement even more sophisticated strategies for handling long contexts such as leveraging chunk overlap and/or a specialized stitching model.\n\n`chunk` breaks the input up into smaller chunks that fit within the model's context window and then intelligently merges the results into a single prediction at the cost of a minor accuracy drop.\n\n`drop_end` drops tokens from the end of input exceeding the model's maximum input length.\n\n`null`, which is the default setting, raises an error if the input exceeds the model's maximum input length.\n\n### Returns\n\n- `{ results: { index: number; document: object; }[]; usage: { input_tokens: number; }; }`\n\n  - `results: { index: number; document: { text: string; title: object; subtitle: object; type: 'statute' | 'regulation' | 'decision' | 'contract' | 'other'; jurisdiction: string; segments: object[]; crossreferences: object[]; locations: object[]; persons: object[]; emails: object[]; websites: object[]; phone_numbers: object[]; id_numbers: object[]; terms: object[]; external_documents: object[]; quotes: object[]; dates: object[]; headings: object[]; junk: object[]; version: 'ilgs@1'; }; }[]`\n  - `usage: { input_tokens: number; }`\n\n### Example\n\n```typescript\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus();\n\nconst enrichmentResponse = await client.enrichments.create({ model: 'kanon-2-enricher', texts: ['1.5 You (the \"User\") agree to be bound by these Terms.'] });\n\nconsole.log(enrichmentResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.isaacus.com/v1/enrichments \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ISAACUS_API_KEY" \\\n    -d \'{\n          "model": "kanon-2-enricher",\n          "texts": [\n            "1.5 You (the \\\\"User\\\\") agree to be bound by these Terms."\n          ]\n        }\'',
      },
      python: {
        method: 'enrichments.create',
        example:
          'import os\nfrom isaacus import Isaacus\n\nclient = Isaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\nenrichment_response = client.enrichments.create(\n    model="kanon-2-enricher",\n    texts=["1.5 You (the \\"User\\") agree to be bound by these Terms."],\n)\nprint(enrichment_response.results)',
      },
      typescript: {
        method: 'client.enrichments.create',
        example:
          "import Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst enrichmentResponse = await client.enrichments.create({\n  model: 'kanon-2-enricher',\n  texts: ['1.5 You (the \"User\") agree to be bound by these Terms.'],\n});\n\nconsole.log(enrichmentResponse.results);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Isaacus Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/isaacus.svg?label=pypi%20(stable))](https://pypi.org/project/isaacus/)\n\nThe Isaacus Python library provides convenient access to the Isaacus REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Isaacus MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=isaacus-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImlzYWFjdXMtbWNwIl0sImVudiI6eyJJU0FBQ1VTX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22isaacus-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22isaacus-mcp%22%5D%2C%22env%22%3A%7B%22ISAACUS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.isaacus.com](https://docs.isaacus.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install isaacus\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom isaacus import Isaacus\n\nclient = Isaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\n\nembedding_response = client.embeddings.create(\n    model="kanon-2-embedder",\n    texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n    task="retrieval/query",\n)\nprint(embedding_response.embeddings)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `ISAACUS_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncIsaacus` instead of `Isaacus` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom isaacus import AsyncIsaacus\n\nclient = AsyncIsaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  embedding_response = await client.embeddings.create(\n      model="kanon-2-embedder",\n      texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n      task="retrieval/query",\n  )\n  print(embedding_response.embeddings)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install isaacus[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom isaacus import DefaultAioHttpClient\nfrom isaacus import AsyncIsaacus\n\nasync def main() -> None:\n  async with AsyncIsaacus(\n    api_key=os.environ.get("ISAACUS_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    embedding_response = await client.embeddings.create(\n        model="kanon-2-embedder",\n        texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n        task="retrieval/query",\n    )\n    print(embedding_response.embeddings)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom isaacus import Isaacus\n\nclient = Isaacus()\n\nuniversal_classification_response = client.classifications.universal.create(\n    model="kanon-universal-classifier",\n    query="This is a confidentiality clause.",\n    texts=["I agree not to tell anyone about the document."],\n    chunking_options={\n        "overlap_ratio": 0.1,\n        "overlap_tokens": None,\n        "size": 512,\n    },\n)\nprint(universal_classification_response.classifications)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `isaacus.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `isaacus.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `isaacus.APIError`.\n\n```python\nimport isaacus\nfrom isaacus import Isaacus\n\nclient = Isaacus()\n\ntry:\n    client.embeddings.create(\n        model="kanon-2-embedder",\n        texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n        task="retrieval/query",\n    )\nexcept isaacus.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept isaacus.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept isaacus.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom isaacus import Isaacus\n\n# Configure the default for all requests:\nclient = Isaacus(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).embeddings.create(\n    model="kanon-2-embedder",\n    texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n    task="retrieval/query",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom isaacus import Isaacus\n\n# Configure the default for all requests:\nclient = Isaacus(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Isaacus(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).embeddings.create(\n    model="kanon-2-embedder",\n    texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n    task="retrieval/query",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `ISAACUS_LOG` to `info`.\n\n```shell\n$ export ISAACUS_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom isaacus import Isaacus\n\nclient = Isaacus()\nresponse = client.embeddings.with_raw_response.create(\n    model="kanon-2-embedder",\n    texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n    task="retrieval/query",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nembedding = response.parse()  # get the object that `embeddings.create()` would have returned\nprint(embedding.embeddings)\n```\n\nThese methods return an [`APIResponse`](https://github.com/isaacus-dev/isaacus-python/tree/main/src/isaacus/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/isaacus-dev/isaacus-python/tree/main/src/isaacus/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.embeddings.with_streaming_response.create(\n    model="kanon-2-embedder",\n    texts=["Are restraints of trade enforceable under English law?", "What is a non-compete clause?"],\n    task="retrieval/query",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom isaacus import Isaacus, DefaultHttpxClient\n\nclient = Isaacus(\n    # Or use the `ISAACUS_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom isaacus import Isaacus\n\nwith Isaacus() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/isaacus-dev/isaacus-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport isaacus\nprint(isaacus.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Isaacus TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/isaacus.svg?label=npm%20(stable))](https://npmjs.org/package/isaacus) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/isaacus)\n\nThis library provides convenient access to the Isaacus REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.isaacus.com](https://docs.isaacus.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Isaacus MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=isaacus-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImlzYWFjdXMtbWNwIl0sImVudiI6eyJJU0FBQ1VTX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22isaacus-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22isaacus-mcp%22%5D%2C%22env%22%3A%7B%22ISAACUS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install isaacus\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst embeddingResponse = await client.embeddings.create({\n  model: 'kanon-2-embedder',\n  texts: [\n    'Are restraints of trade enforceable under English law?',\n    'What is a non-compete clause?',\n  ],\n  task: 'retrieval/query',\n});\n\nconsole.log(embeddingResponse.embeddings);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  apiKey: process.env['ISAACUS_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Isaacus.EmbeddingCreateParams = {\n  model: 'kanon-2-embedder',\n  texts: [\n    'Are restraints of trade enforceable under English law?',\n    'What is a non-compete clause?',\n  ],\n  task: 'retrieval/query',\n};\nconst embeddingResponse: Isaacus.EmbeddingResponse = await client.embeddings.create(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst embeddingResponse = await client.embeddings\n  .create({\n    model: 'kanon-2-embedder',\n    texts: [\n      'Are restraints of trade enforceable under English law?',\n      'What is a non-compete clause?',\n    ],\n    task: 'retrieval/query',\n  })\n  .catch(async (err) => {\n    if (err instanceof Isaacus.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Isaacus({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.embeddings.create({\n  model: 'kanon-2-embedder',\n  texts: ['Are restraints of trade enforceable under English law?', 'What is a non-compete clause?'],\n  task: 'retrieval/query',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Isaacus({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.embeddings.create({\n  model: 'kanon-2-embedder',\n  texts: ['Are restraints of trade enforceable under English law?', 'What is a non-compete clause?'],\n  task: 'retrieval/query',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Isaacus();\n\nconst response = await client.embeddings\n  .create({\n    model: 'kanon-2-embedder',\n    texts: [\n      'Are restraints of trade enforceable under English law?',\n      'What is a non-compete clause?',\n    ],\n    task: 'retrieval/query',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: embeddingResponse, response: raw } = await client.embeddings\n  .create({\n    model: 'kanon-2-embedder',\n    texts: [\n      'Are restraints of trade enforceable under English law?',\n      'What is a non-compete clause?',\n    ],\n    task: 'retrieval/query',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(embeddingResponse.embeddings);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `ISAACUS_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Isaacus from 'isaacus';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Isaacus({\n  logger: logger.child({ name: 'Isaacus' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.embeddings.create({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Isaacus from 'isaacus';\nimport fetch from 'my-fetch';\n\nconst client = new Isaacus({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Isaacus from 'isaacus';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Isaacus({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Isaacus from 'isaacus';\n\nconst client = new Isaacus({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Isaacus from 'npm:isaacus';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Isaacus({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/isaacus-dev/isaacus-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
