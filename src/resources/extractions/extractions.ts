// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QAAPI from './qa/qa';
import { AnswerExtractionResponse, QA, QACreateParams } from './qa/qa';

export class Extractions extends APIResource {
  qa: QAAPI.QA = new QAAPI.QA(this._client);
}

Extractions.QA = QA;

export declare namespace Extractions {
  export {
    QA as QA,
    type AnswerExtractionResponse as AnswerExtractionResponse,
    type QACreateParams as QACreateParams,
  };
}
