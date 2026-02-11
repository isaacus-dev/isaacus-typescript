// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as v1API from './ilgs/v1';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Enrichments extends APIResource {
  /**
   * Enrich documents with an Isaacus enricher model.
   *
   * @example
   * ```ts
   * const enrichmentResponse = await client.enrichments.create({
   *   model: 'kanon-2-enricher',
   *   texts: [
   *     '1.5 You (the "User") agree to be bound by these Terms.',
   *   ],
   * });
   * ```
   */
  create(body: EnrichmentCreateParams, options?: RequestOptions): APIPromise<EnrichmentResponse> {
    return this._client.post('/enrichments', { body, ...options });
  }
}

export interface EnrichmentResponse {
  /**
   * The enriched documents alongside, and in order of, their indices in the input
   * array of texts.
   */
  results: Array<EnrichmentResponse.Result>;

  /**
   * Statistics about the usage of resources in the process of enriching the input.
   */
  usage: EnrichmentResponse.Usage;
}

export namespace EnrichmentResponse {
  /**
   * An enriched document alongside its index in the input array of texts.
   */
  export interface Result {
    /**
     * The index of this document in the input array of texts, starting at `0` (and,
     * therefore, ending at the number of inputs minus `1`).
     */
    index: number;

    /**
     * The document enriched into version 1.0.0 of the Isaacus Legal Graph Schema
     * (ILGS).
     *
     * All spans in an enriched document graph are indexed into the Unicode code point
     * space of a source document.
     *
     * The start and end indices of spans are zero-based (i.e., the first Unicode code
     * point in the document is at index 0) and half-open (i.e., the end index is
     * exclusive).
     *
     * All spans are globally laminar and well-nested similar to XML—it is impossible
     * for any two spans to partially overlap; they can only be disjoint, adjacent, or
     * wholly nested.
     *
     * Spans of the exact same type (e.g., segments) will never be duplicated.
     *
     * Spans cannot be empty and will never start or end at whitespace.
     *
     * When using programming languages other than Python (which uses zero-based,
     * half-open, Unicode code point-spaced string indexing), indices may need to be
     * translated accordingly (for example, JavaScript slices into UTF-16 code units
     * instead of Unicode code points).
     */
    document: v1API.Document;
  }

  /**
   * Statistics about the usage of resources in the process of enriching the input.
   */
  export interface Usage {
    /**
     * The total number of tokens inputted to the model.
     */
    input_tokens: number;
  }
}

export interface EnrichmentCreateParams {
  /**
   * The ID of the [model](https://docs.isaacus.com/models#enrichment) to use for
   * enrichment.
   */
  model: 'kanon-2-enricher';

  /**
   * A text or array of texts to be enriched, each containing at least one
   * non-whitespace character.
   *
   * No more than 8 texts can be enriched in a single request.
   */
  texts: Array<string> | string;

  /**
   * The strategy for handling content exceeding the model's maximum input length.
   *
   * `auto` currently behaves the same as `drop_end`, dropping excess tokens from the
   * end of input. In the future, `auto` may implement more sophisticated strategies
   * such as chunking and context-aware stitching.
   *
   * `drop_end` drops tokens from the end of input exceeding the model's maximum
   * input length.
   *
   * `null`, which is the default setting, raises an error if the input exceeds the
   * model's maximum input length.
   */
  overflow_strategy?: 'auto' | 'drop_end' | null;
}

export declare namespace Enrichments {
  export {
    type EnrichmentResponse as EnrichmentResponse,
    type EnrichmentCreateParams as EnrichmentCreateParams,
  };
}
