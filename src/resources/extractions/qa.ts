// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class QA extends APIResource {
  /**
   * Extract answers to questions from legal documents with an Isaacus legal AI
   * answer extractor.
   *
   * @example
   * ```ts
   * const answerExtractionResponse =
   *   await client.extractions.qa.create({
   *     model: 'kanon-answer-extractor',
   *     query: 'What is the punishment for murder in Victoria?',
   *     texts: [
   *       'The standard sentence for murder in the State of Victoria is 30 years if the person murdered was a police officer and 25 years in any other case.',
   *     ],
   *   });
   * ```
   */
  create(body: QACreateParams, options?: RequestOptions): APIPromise<AnswerExtractionResponse> {
    return this._client.post('/extractions/qa', { body, ...options });
  }
}

export interface AnswerExtractionResponse {
  /**
   * The results of extracting answers from the texts, ordered from highest to lowest
   * answer confidence score (or else lowest to highest inextractability score if
   * there are no answers for a text).
   */
  extractions: Array<AnswerExtractionResponse.Extraction>;

  /**
   * Statistics about the usage of resources in the process of extracting answers
   * from the texts.
   */
  usage: AnswerExtractionResponse.Usage;
}

export namespace AnswerExtractionResponse {
  /**
   * The result of extracting answers from a text.
   */
  export interface Extraction {
    /**
     * Answers extracted from the text, ordered from highest to lowest score.
     */
    answers: Array<Extraction.Answer>;

    /**
     * The index of the text in the input array of texts that this result represents,
     * starting from `0` (and, therefore, ending at the number of texts minus `1`).
     */
    index: number;

    /**
     * A score between `0` and `1`, inclusive, representing the likelihood that an
     * answer can not be extracted from the text.
     *
     * Where this score is greater than the highest score of all possible answers, the
     * text should be regarded as not having an extractable answer to the query. If
     * that is the case and `ignore_inextractability` is `false`, no answers will be
     * returned.
     */
    inextractability_score: number;
  }

  export namespace Extraction {
    /**
     * An answer extracted from a text.
     */
    export interface Answer {
      /**
       * The index of the character immediately after the last character of the answer in
       * the text, starting from `0` (such that, in Python, the answer is equivalent to
       * `text[start:end]`).
       */
      end: number;

      /**
       * A score between `0` and `1`, inclusive, representing the strength of the answer.
       */
      score: number;

      /**
       * The index of the first character of the answer in the text, starting from `0`
       * (and, therefore, ending at the number of characters in the text minus `1`).
       */
      start: number;

      /**
       * The text of the answer.
       */
      text: string;
    }
  }

  /**
   * Statistics about the usage of resources in the process of extracting answers
   * from the texts.
   */
  export interface Usage {
    /**
     * The number of tokens inputted to the model.
     */
    input_tokens: number;
  }
}

export interface QACreateParams {
  /**
   * The ID of the
   * [model](https://docs.isaacus.com/models#extractive-question-answering) to use
   * for extractive question answering.
   */
  model: 'kanon-answer-extractor' | 'kanon-answer-extractor-mini';

  /**
   * The query to extract the answer to.
   *
   * The query must contain at least one non-whitespace character.
   *
   * Unlike the texts from which the answer will be extracted, the query cannot be so
   * long that it exceeds the maximum input length of the model.
   */
  query: string;

  /**
   * The texts to search for the answer in and extract the answer from.
   *
   * There must be at least one text.
   *
   * Each text must contain at least one non-whitespace character.
   */
  texts: Array<string>;

  /**
   * Options for how to split text into smaller chunks.
   */
  chunking_options?: QACreateParams.ChunkingOptions | null;

  /**
   * Whether to, if the model's score of the likelihood that an answer can not be
   * extracted from a text is greater than the highest score of all possible answers,
   * still return the highest scoring answers for that text.
   *
   * If you have already determined that the texts answer the query, for example, by
   * using one of our classification or reranker models, then you should set this to
   * `true`.
   */
  ignore_inextractability?: boolean;

  /**
   * The number of highest scoring answers to return.
   *
   * If `null`, which is the default, all answers will be returned.
   */
  top_k?: number;
}

export namespace QACreateParams {
  /**
   * Options for how to split text into smaller chunks.
   */
  export interface ChunkingOptions {
    /**
     * A number greater than or equal to 0 and less than 1.
     */
    overlap_ratio?: number | null;

    /**
     * A whole number greater than or equal to 0.
     */
    overlap_tokens?: number | null;

    /**
     * A whole number greater than or equal to 1.
     */
    size?: number | null;
  }
}

export declare namespace QA {
  export { type AnswerExtractionResponse as AnswerExtractionResponse, type QACreateParams as QACreateParams };
}
