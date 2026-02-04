// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as v1API from './v1';
import {
  ILGSv1Crossreference,
  ILGSv1Date,
  ILGSv1Document,
  ILGSv1Email,
  ILGSv1ExternalDocument,
  ILGSv1IDNumber,
  ILGSv1Location,
  ILGSv1Person,
  ILGSv1PhoneNumber,
  ILGSv1Quote,
  ILGSv1Segment,
  ILGSv1Span,
  ILGSv1Term,
  ILGSv1Website,
  v1,
} from './v1';

export class ILGS extends APIResource {
  v1: v1API.v1 = new v1API.v1(this._client);
}

ILGS.v1 = v1;

export declare namespace ILGS {
  export {
    v1 as v1,
    type ILGSv1Crossreference as ILGSv1Crossreference,
    type ILGSv1Date as ILGSv1Date,
    type ILGSv1Document as ILGSv1Document,
    type ILGSv1Email as ILGSv1Email,
    type ILGSv1ExternalDocument as ILGSv1ExternalDocument,
    type ILGSv1IDNumber as ILGSv1IDNumber,
    type ILGSv1Location as ILGSv1Location,
    type ILGSv1Person as ILGSv1Person,
    type ILGSv1PhoneNumber as ILGSv1PhoneNumber,
    type ILGSv1Quote as ILGSv1Quote,
    type ILGSv1Segment as ILGSv1Segment,
    type ILGSv1Span as ILGSv1Span,
    type ILGSv1Term as ILGSv1Term,
    type ILGSv1Website as ILGSv1Website,
  };
}
