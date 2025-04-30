// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QaAPI from './qa';
import { AnswerExtraction, Qa, QaCreateParams } from './qa';

export class Extractions extends APIResource {
  qa: QaAPI.Qa = new QaAPI.Qa(this._client);
}

Extractions.Qa = Qa;

export declare namespace Extractions {
  export { Qa as Qa, type AnswerExtraction as AnswerExtraction, type QaCreateParams as QaCreateParams };
}
