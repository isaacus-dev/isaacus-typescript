// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * Embed legal texts with an Isaacus legal AI embedder.
   *
   * @example
   * ```ts
   * const embeddingResponse = await client.embeddings.create({
   *   model: 'kanon-2-embedder',
   *   texts: [
   *     'Are restraints of trade enforceable under English law?',
   *     'What is a non-compete clause?',
   *   ],
   * });
   * ```
   */
  create(body: EmbeddingCreateParams, options?: RequestOptions): APIPromise<EmbeddingResponse> {
    return this._client.post('/embeddings', { body, ...options });
  }
}

export interface EmbeddingResponse {
  /**
   * The embeddings of the inputs.
   */
  embeddings: Array<EmbeddingResponse.Embedding>;

  /**
   * Statistics about the usage of resources in the process of embedding the inputs.
   */
  usage: EmbeddingResponse.Usage;
}

export namespace EmbeddingResponse {
  export interface Embedding {
    /**
     * The position of the content in the input array of contents, starting from `0`
     * (and, therefore, ending at the number of contents minus `1`).
     */
    index: number;

    /**
     * The embedding of the content represented as an array of floating point numbers.
     */
    embedding: Array<number>;
  }

  /**
   * Statistics about the usage of resources in the process of embedding the inputs.
   */
  export interface Usage {
    /**
     * The number of tokens inputted to the model.
     */
    input_tokens: number;
  }
}

export interface EmbeddingCreateParams {
  /**
   * The ID of the [model](https://docs.isaacus.com/models#embedding) to use for
   * embedding.
   */
  model: 'kanon-2-embedder';

  /**
   * The text or array of texts to embed.
   *
   * Each text must contain at least one non-whitespace character.
   *
   * No more than 128 texts can be embedded in a single request.
   */
  texts: Array<string> | string;

  /**
   * The task the embeddings will be used for.
   *
   * `retrieval/query` is meant for queries and statements, and `retrieval/document`
   * is meant for anything to be retrieved using query embeddings.
   *
   * If `null`, which is the default setting, embeddings will not be optimized for
   * any particular task.
   */
  task?: 'retrieval/query' | 'retrieval/document' | null;

  /**
   * The strategy to employ when content exceeds the model's maximum input length.
   *
   * `drop_end`, which is the default setting, drops tokens from the end of the
   * content exceeding the limit.
   *
   * If `null`, an error will be raised if any content exceeds the model's maximum
   * input length.
   */
  overflow_strategy?: 'drop_end' | null;

  /**
   * A whole number greater than or equal to 1.
   */
  dimensions?: number | null;
}

export declare namespace Embeddings {
  export { type EmbeddingResponse as EmbeddingResponse, type EmbeddingCreateParams as EmbeddingCreateParams };
}
