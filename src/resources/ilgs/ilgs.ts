// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as v1API from './v1';
import { ILGSv1Document, ILGSv1Span, v1 } from './v1';

export class ILGS extends APIResource {
  v1: v1API.v1 = new v1API.v1(this._client);
}

ILGS.v1 = v1;

export declare namespace ILGS {
  export { v1 as v1, type ILGSv1Document as ILGSv1Document, type ILGSv1Span as ILGSv1Span };
}
