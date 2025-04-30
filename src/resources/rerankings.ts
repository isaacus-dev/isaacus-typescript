// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Rerankings extends APIResource {
  /**
   * Rerank legal documents by their relevance to a query with an Isaacus legal AI
   * reranker.
   */
  create(body: RerankingCreateParams, options?: RequestOptions): APIPromise<Reranking> {
    return this._client.post('/rerankings', { body, ...options });
  }
}

/**
 * The reranking of texts, by relevance to a query, out of an input array of texts.
 */
export interface Reranking {
  /**
   * The rerankings of the texts, by relevance to the query, in order from highest to
   * lowest relevance score.
   */
  results: Array<Reranking.Result>;

  /**
   * Statistics about the usage of resources in the process of reranking the texts.
   */
  usage: Reranking.Usage;
}

export namespace Reranking {
  export interface Result {
    /**
     * The index of the text in the input array of texts, starting from `0` (and,
     * therefore, ending at the number of texts minus `1`).
     */
    index: number;

    /**
     * A score between `0` and `1`, inclusive, representing the relevance of the text
     * to the query.
     */
    score: number;
  }

  /**
   * Statistics about the usage of resources in the process of reranking the texts.
   */
  export interface Usage {
    /**
     * The number of tokens inputted to the model.
     */
    input_tokens: number;
  }
}

export interface RerankingCreateParams {
  /**
   * The ID of the [model](https://docs.isaacus.com/models#reranking) to use for
   * reranking.
   */
  model: 'kanon-universal-classifier' | 'kanon-universal-classifier-mini';

  /**
   * The query to evaluate the relevance of the texts to.
   *
   * The query must contain at least one non-whitespace character.
   *
   * Unlike the texts being reranked, the query cannot be so long that it exceeds the
   * maximum input length of the reranker.
   */
  query: string;

  /**
   * The texts to rerank.
   *
   * There must be at least one text.
   *
   * Each text must contain at least one non-whitespace character.
   */
  texts: Array<string>;

  /**
   * Options for how to split text into smaller chunks.
   */
  chunking_options?: RerankingCreateParams.ChunkingOptions | null;

  /**
   * Whether the query should be interpreted as an
   * [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query, which is not
   * the case by default.
   *
   * If you allow untrusted users to construct their own queries, think carefully
   * before enabling IQL since queries can be crafted to consume an excessively large
   * amount of tokens.
   */
  is_iql?: boolean;

  /**
   * The method to use for producing an overall relevance score for a text.
   *
   * `auto` is the default scoring method and is recommended for most use cases.
   * Currently, it is equivalent to `chunk_max`. In the future, it will automatically
   * select the best method based on the model and inputs.
   *
   * `chunk_max` uses the highest relevance score of all of a text's chunks.
   *
   * `chunk_avg` averages the relevance scores of all of a text's chunks.
   *
   * `chunk_min` uses the lowest relevance score of all of a text's chunks.
   */
  scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min';

  /**
   * A whole number greater than or equal to 1.
   */
  top_n?: number | null;
}

export namespace RerankingCreateParams {
  /**
   * Options for how to split text into smaller chunks.
   */
  export interface ChunkingOptions {
    /**
     * A number greater than or equal to 0 and less than 1.
     */
    overlap_ratio?: number | null;

    /**
     * A whole number greater than -1.
     */
    overlap_tokens?: number | null;

    /**
     * A whole number greater than or equal to 1.
     */
    size?: number | null;
  }
}

export declare namespace Rerankings {
  export { type Reranking as Reranking, type RerankingCreateParams as RerankingCreateParams };
}
