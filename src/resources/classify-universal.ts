// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class ClassifyUniversal extends APIResource {
  /**
   * Classify
   */
  create(
    body: ClassifyUniversalCreateParams,
    options?: RequestOptions,
  ): APIPromise<ClassifyUniversalCreateResponse> {
    return this._client.post('/classify/universal', { body, ...options });
  }
}

export interface ClassifyUniversalCreateResponse {
  chunks: Array<ClassifyUniversalCreateResponse.Chunk>;
}

export namespace ClassifyUniversalCreateResponse {
  export interface Chunk {
    confidence: number;

    end: number;

    start: number;

    text: string;
  }
}

export interface ClassifyUniversalCreateParams {
  model: string;

  query: string;

  text: string;

  chunk?: boolean;

  chunk_overlap?: number | null;

  chunk_size?: number;

  is_iql?: boolean;
}

export declare namespace ClassifyUniversal {
  export {
    type ClassifyUniversalCreateResponse as ClassifyUniversalCreateResponse,
    type ClassifyUniversalCreateParams as ClassifyUniversalCreateParams,
  };
}
