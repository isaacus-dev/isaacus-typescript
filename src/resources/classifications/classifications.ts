// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UniversalAPI from './universal/universal';
import { Universal, UniversalClassificationResponse, UniversalCreateParams } from './universal/universal';

export class Classifications extends APIResource {
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
}

Classifications.Universal = Universal;

export declare namespace Classifications {
  export {
    Universal as Universal,
    type UniversalClassificationResponse as UniversalClassificationResponse,
    type UniversalCreateParams as UniversalCreateParams,
  };
}
