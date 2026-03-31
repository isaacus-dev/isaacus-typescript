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
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

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
