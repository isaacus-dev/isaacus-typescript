// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Universal extends APIResource {
  /**
   * Classify the relevance of legal documents to a query with an Isaacus universal
   * legal AI classifier.
   */
  create(body: UniversalCreateParams, options?: RequestOptions): APIPromise<UniversalClassification> {
    return this._client.post('/classifications/universal', { body, ...options });
  }
}

/**
 * Classifications of the relevance of legal documents to a query produced by an
 * Isaacus universal legal AI classifier.
 */
export interface UniversalClassification {
  /**
   * The classifications of the texts, by relevance to the query, in order from
   * highest to lowest relevance score.
   */
  classifications: Array<UniversalClassification.Classification>;

  /**
   * Statistics about the usage of resources in the process of classifying the text.
   */
  usage: UniversalClassification.Usage;
}

export namespace UniversalClassification {
  export interface Classification {
    /**
     * The text as broken into chunks by
     * [semchunk](https://github.com/isaacus-dev/semchunk), each chunk with its own
     * confidence score, ordered from highest to lowest score.
     *
     * If no chunking occurred, this will be `null`.
     */
    chunks: Array<Classification.Chunk> | null;

    /**
     * The index of the text in the input array of texts, starting from `0` (and,
     * therefore, ending at the number of texts minus `1`).
     */
    index: number;

    /**
     * A score of the likelihood that the query expressed about the text is supported
     * by the text.
     *
     * A score greater than `0.5` indicates that the text supports the query, while a
     * score less than `0.5` indicates that the text does not support the query.
     */
    score: number;
  }

  export namespace Classification {
    export interface Chunk {
      /**
       * The index of the character immediately after the last character of the chunk in
       * the original text, beginning from `0` (such that, in Python, the chunk is
       * equivalent to `text[start:end]`).
       */
      end: number;

      /**
       * The original position of the chunk in the outputted list of chunks before
       * sorting, starting from `0` (and, therefore, ending at the number of chunks minus
       * `1`).
       */
      index: number;

      /**
       * The model's score of the likelihood that the query expressed about the chunk is
       * supported by the chunk.
       *
       * A score greater than `0.5` indicates that the chunk supports the query, while a
       * score less than `0.5` indicates that the chunk does not support the query.
       */
      score: number;

      /**
       * The index of the character in the original text where the chunk starts,
       * beginning from `0`.
       */
      start: number;

      /**
       * The text of the chunk.
       */
      text: string;
    }
  }

  /**
   * Statistics about the usage of resources in the process of classifying the text.
   */
  export interface Usage {
    /**
     * The number of tokens inputted to the model.
     */
    input_tokens: number;
  }
}

export interface UniversalCreateParams {
  /**
   * The ID of the [model](https://docs.isaacus.com/models#universal-classification)
   * to use for universal classification.
   */
  model: 'kanon-universal-classifier' | 'kanon-universal-classifier-mini';

  /**
   * The [Isaacus Query Language (IQL)](https://docs.isaacus.com/iql) query or, if
   * IQL is disabled, the statement, to evaluate the texts against.
   *
   * The query must contain at least one non-whitespace character.
   *
   * Unlike the texts being classified, the query cannot be so long that it exceeds
   * the maximum input length of the universal classifier.
   */
  query: string;

  /**
   * The texts to classify.
   *
   * The texts must contain at least one non-whitespace character.
   */
  texts: Array<string>;

  /**
   * Options for how to split text into smaller chunks.
   */
  chunking_options?: UniversalCreateParams.ChunkingOptions | null;

  /**
   * Whether the query should be interpreted as an
   * [IQL](https://docs.isaacus.com/iql) query or else as a statement.
   */
  is_iql?: boolean;

  /**
   * The method to use for producing an overall confidence score.
   *
   * `auto` is the default scoring method and is recommended for most use cases.
   * Currently, it is equivalent to `chunk_max`. In the future, it will automatically
   * select the best method based on the model and inputs.
   *
   * `chunk_max` uses the highest confidence score of all of the texts' chunks.
   *
   * `chunk_avg` averages the confidence scores of all of the texts' chunks.
   *
   * `chunk_min` uses the lowest confidence score of all of the texts' chunks.
   */
  scoring_method?: 'auto' | 'chunk_max' | 'chunk_avg' | 'chunk_min';
}

export namespace UniversalCreateParams {
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

export declare namespace Universal {
  export {
    type UniversalClassification as UniversalClassification,
    type UniversalCreateParams as UniversalCreateParams,
  };
}
