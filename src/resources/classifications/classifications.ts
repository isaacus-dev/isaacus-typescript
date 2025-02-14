// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UniversalAPI from './universal';
import { Universal, UniversalClassification, UniversalCreateParams } from './universal';

export class Classifications extends APIResource {
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
}

Classifications.Universal = Universal;

export declare namespace Classifications {
  export {
    Universal as Universal,
    type UniversalClassification as UniversalClassification,
    type UniversalCreateParams as UniversalCreateParams,
  };
}
