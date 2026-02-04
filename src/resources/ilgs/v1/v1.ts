// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as v1API from './v1_';
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
  Website,
  v1 as v1APIv1,
} from './v1_';

export class v1 extends APIResource {
  v1: v1API.v1 = new v1API.v1(this._client);
}

v1.v1 = v1APIv1;

export declare namespace v1 {
  export {
    v1APIv1 as v1,
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
