// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  Crossreference,
  Date,
  Document,
  Email,
  ExternalDocument,
  IDNumber,
  Location,
  Person,
  PhoneNumber,
  Quote,
  Segment,
  Span,
  Term,
  V1,
  Website,
} from './v1';

export class ILGS extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

ILGS.V1 = V1;

export declare namespace ILGS {
  export {
    V1 as V1,
    type Crossreference as Crossreference,
    type Date as Date,
    type Document as Document,
    type Email as Email,
    type ExternalDocument as ExternalDocument,
    type IDNumber as IDNumber,
    type Location as Location,
    type Person as Person,
    type PhoneNumber as PhoneNumber,
    type Quote as Quote,
    type Segment as Segment,
    type Span as Span,
    type Term as Term,
    type Website as Website,
  };
}
