// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Universal extends APIResource {
  /**
   * Classify the relevance of a legal document to a query using an Isaacus universal
   * legal AI classifier.
   */
  create(body: UniversalCreateParams, options?: RequestOptions): APIPromise<UniversalClassification> {
    return this._client.post('/classifications/universal', { body, ...options });
  }
}

/**
 * A classification of the relevance of a legal document to a query produced by an
 * Isaacus universal legal AI classifier.
 */
export interface UniversalClassification {
  /**
   * The text broken into chunks, each with their own confidence score.
   *
   * If no chunking occurred, this will be `null`.
   */
  chunks: Array<UniversalClassification.Chunk> | null;

  /**
   * A score of the likelihood that the query expressed about the text is supported
   * by the text.
   *
   * A score greater than `0.5` indicates that the text supports the query, while a
   * score less than `0.5` indicates that the text does not support the query.
   */
  score: number;

  /**
   * Statistics about the usage of resources in the process of classifying the text.
   */
  usage: UniversalClassification.Usage;
}

export namespace UniversalClassification {
  /**
   * A chunk of a text that has been classified by an Isaacus universal legal AI
   * classifier.
   */
  export interface Chunk {
    /**
     * The end index of the chunk in the original text.
     */
    end: number;

    /**
     * The model's score of the likelihood that the query expressed about the chunk is
     * supported by the chunk.
     *
     * A score greater than `0.5` indicates that the chunk supports the query, while a
     * score less than `0.5` indicates that the chunk does not support the query.
     */
    score: number;

    /**
     * The start index of the chunk in the original text.
     */
    start: number;

    /**
     * The text of the chunk.
     */
    text: string;
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
   * The ID of the model to use for universal classification.
   */
  model: 'kanon-universal-classifier' | 'kanon-universal-classifier-mini';

  /**
   * The Isaacus Query Language (IQL) query or, if IQL is disabled, the statement, to
   * evaluate the text against.
   *
   * The query must contain at least one non-whitespace character.
   */
  query: string;

  /**
   * The text to classify.
   *
   * The text must contain at least one non-whitespace character.
   */
  text: string;

  /**
   * Options for how to split text into smaller chunks.
   */
  chunking_options?: UniversalCreateParams.ChunkingOptions | null;

  /**
   * Whether the query should be interpreted as an Isaacus Query Language (IQL) query
   * or else as a statement.
   */
  is_iql?: boolean;

  /**
   * The method to use for producing an overall confidence score.
   *
   * `auto` is the default scoring method and is recommended for most use cases.
   * Currently, it is equivalent to `chunk_max`. In the future, it will automatically
   * select the best method based on the model and input.
   *
   * `chunk_max` uses the highest confidence score of all of the text's chunks.
   *
   * `chunk_avg` averages the confidence scores of all of the text's chunks.
   *
   * `chunk_min` uses the lowest confidence score of all of the text's chunks.
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
