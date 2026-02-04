// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class v1 extends APIResource {}

/**
 * A cross-reference within the document pointing to one or more segments.
 */
export interface ILGSv1Crossreference {
  /**
   * The unique identifier of the earliest segment in the span of segments being
   * cross-referenced with ties broken in favor of the least-nested (i.e., largest)
   * segment. If the cross-reference points to a single segment, `start` and `end`
   * will be identical.
   */
  start: string;

  /**
   * The unique identifier of the latest segment in the span of segments being
   * cross-referenced with ties broken in favor of the least-nested (i.e., largest)
   * segment. If the cross-reference points to a single segment, `start` and `end`
   * will be identical.
   */
  end: string;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  span: ILGSv1Span;
}

/**
 * A date identified in a document belonging to one of the following types:
 * `creation`, `signature`, `effective`, `expiry`, `delivery`, `renewal`,
 * `payment`, `birth`, or `death`.
 *
 * Only Gregorian dates between the years 1000 and 9999 (inclusive) fitting into
 * one of the supported date types are extractable.
 */
export interface ILGSv1Date {
  /**
   * The date in ISO 8601 format (YYYY-MM-DD).
   */
  value: string;

  /**
   * The type of the date, being one of `creation`, `signature`, `effective`,
   * `expiry`, `delivery`, `renewal`, `payment`, `birth`, or `death`. If a date is
   * mentioned in a document that does not fit into a supported type, it will not be
   * extracted.
   *
   * `creation` denotes the date the document was created. There may only be one
   * `creation` date per document.
   *
   * `signature` denotes the date the document was signed.
   *
   * `effective` denotes the date when the document or a part thereof comes into
   * effect (e.g., commencement or enactment dates).
   *
   * `expiry` denotes the date when the document or a part thereof is no longer in
   * effect.
   *
   * `delivery` denotes the date when goods or services are to be delivered under the
   * document.
   *
   * `renewal` denotes the date when one or more of the document's terms are to be
   * renewed.
   *
   * `payment` denotes the date when payment is to be made under the document.
   *
   * `birth` denotes the birth date of a natural person or establishment (e.g.,
   * incorporation) date of a non-natural legal person identified in the document.
   * There can only be one `birth` date linked to a single person and all `birth`
   * dates must be linked to a person. A person's `birth` date will never be after
   * their `death` date.
   *
   * `death` denotes the death date of a natural person or dissolution date of a
   * non-natural legal person identified in the document. There can only be one
   * `death` date linked to a single person and all `death` dates must be linked to a
   * person. A person's `death` date will never be before their `birth` date.
   */
  type:
    | 'creation'
    | 'signature'
    | 'effective'
    | 'expiry'
    | 'delivery'
    | 'renewal'
    | 'payment'
    | 'birth'
    | 'death';

  /**
   * A unique identifier for a legal person in the format `per:{index}` where
   * `{index}` is a non-negative incrementing integer starting from zero.
   */
  person: string | null;

  /**
   * An array of one or more spans within the document's text where the date is
   * mentioned.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * The enriched document.
 */
export interface ILGSv1Document {
  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  title: ILGSv1Span | null;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  subtitle: ILGSv1Span | null;

  /**
   * The type of the document, being one of `statute`, `regulation`, `decision`,
   * `contract`, or `other`.
   *
   * `statute` denotes primary legislation such as acts, bills, codes, and
   * constitutions.
   *
   * `regulation` denotes secondary legislation such as rules, statutory instruments,
   * and ordinances.
   *
   * `decision` denotes judicial or quasi-judicial decisions such as court judgments,
   * judicial opinions, and tribunal rulings.
   *
   * `other` is used for all other types of legal documents that do not fit into any
   * of the predefined types.
   */
  type: 'statute' | 'regulation' | 'decision' | 'contract' | 'other';

  /**
   * A jurisdiction code representing a country (via an initial country code) and,
   * optionally, a subdivision within that country (via a subsequent subdivision code
   * prefixed by a hyphen).
   *
   * All 249 ISO 3166-1 alpha-2 country codes are representable in addition to
   * special `INT` and `EU` codes for international and European Union law,
   * respectively.
   *
   * All 5,046 ISO 3166-2 codes are also representable in addition to a special `FED`
   * code for federal law.
   */
  jurisdiction: string | null;

  /**
   * An array of segments within the document representing structurally distinct
   * portions of its content.
   */
  segments: Array<ILGSv1Segment>;

  /**
   * An array of cross-references within the document pointing to a single segment or
   * a span of segments.
   */
  crossreferences: Array<ILGSv1Crossreference>;

  /**
   * An array of locations identified in the document.
   */
  locations: Array<ILGSv1Location>;

  /**
   * An array of legal persons identified in the document.
   */
  persons: Array<ILGSv1Person>;

  /**
   * An array of email addresses identified in the document belonging to legal
   * persons.
   *
   * Email addresses mentioned in the document that are not attributable to legal
   * persons will not be extracted.
   */
  emails: Array<ILGSv1Email>;

  /**
   * An array of websites identified in the document belonging to legal persons.
   *
   * Websites mentioned in the document that are not attributable to legal persons
   * will not be extracted.
   */
  websites: Array<ILGSv1Website>;

  /**
   * An array of valid phone numbers identified in the document belonging to legal
   * persons.
   *
   * Phone numbers mentioned in the document that are not valid, possible, or
   * attributable to legal persons will not be extracted.
   */
  phone_numbers: Array<ILGSv1PhoneNumber>;

  /**
   * An array of identification numbers identified in the document belonging to legal
   * persons.
   *
   * Identification numbers mentioned in the document that are not attributable to
   * legal persons will not be extracted.
   */
  id_numbers: Array<ILGSv1IDNumber>;

  /**
   * An array of terms assigned definite meanings within the document.
   */
  terms: Array<ILGSv1Term>;

  /**
   * An array of documents identified within the document.
   */
  external_documents: Array<ILGSv1ExternalDocument>;

  /**
   * An array of quotations within the document.
   */
  quotes: Array<ILGSv1Quote>;

  /**
   * An array of dates identified in the document belonging to one of the following
   * types: `creation`, `signature`, `effective`, `expiry`, `delivery`, `renewal`,
   * `payment`, `birth`, or `death`.
   *
   * Only Gregorian dates between the years 1000 and 9999 (inclusive) fitting into
   * one of the supported date types are extractable.
   */
  dates: Array<ILGSv1Date>;

  /**
   * An array of spans within the document's text constituting headings.
   */
  headings: Array<ILGSv1Span>;

  /**
   * An array of spans within the document's text constituting non-operative,
   * non-substantive 'junk' content such as headers, footers, page numbers, and OCR
   * artifacts.
   */
  junk: Array<ILGSv1Span>;

  version: 'ilgs@1';
}

/**
 * An email address identified in a document belonging to a legal person.
 *
 * If an email address was mentioned in the document but is not attributable to a
 * legal person, it will not be extracted.
 */
export interface ILGSv1Email {
  /**
   * The normalized email address.
   */
  address: string;

  /**
   * The unique identifier of the person that this email address belongs to.
   */
  person: string;

  /**
   * An array of one or more spans within the document's text where the email address
   * is mentioned.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * A document identified within another document.
 */
export interface ILGSv1ExternalDocument {
  /**
   * The unique identifier of the external document in the format `exd:{index}` where
   * `{index}` is a non-negative incrementing integer starting from zero.
   */
  id: string;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  name: ILGSv1Span;

  /**
   * The type of the external document, being one of `statute`, `regulation`,
   * `decision`, `contract`, or `other`.
   *
   * `statute` denotes primary legislation such as acts, bills, codes, and
   * constitutions.
   *
   * `regulation` denotes secondary legislation such as rules, statutory instruments,
   * and ordinances.
   *
   * `decision` denotes judicial or quasi-judicial decisions such as court judgments,
   * judicial opinions, and tribunal rulings.
   *
   * `other` is used for all other types of legal documents that do not fit into any
   * of the predefined types.
   */
  type: 'statute' | 'regulation' | 'decision' | 'contract' | 'other';

  /**
   * A jurisdiction code representing a country (via an initial country code) and,
   * optionally, a subdivision within that country (via a subsequent subdivision code
   * prefixed by a hyphen).
   *
   * All 249 ISO 3166-1 alpha-2 country codes are representable in addition to
   * special `INT` and `EU` codes for international and European Union law,
   * respectively.
   *
   * All 5,046 ISO 3166-2 codes are also representable in addition to a special `FED`
   * code for federal law.
   */
  jurisdiction: string | null;

  /**
   * The sentiment of the document towards the external document, being one of
   * `positive`, `mixed`, `negative`, or `neutral`.
   *
   * `positive` indicates that the document expresses a favorable view of the
   * external document whether by endorsing or approving it.
   *
   * `mixed` indicates that the document expresses both favorable and unfavorable
   * views of the external document, for example, by affirming parts of it and
   * disapproving others.
   *
   * `negative` indicates that the document expresses an unfavorable view of the
   * external document whether by criticizing, repealing, overruling, or explicitly
   * contradicting it.
   *
   * `neutral` indicates that the document references the external document without
   * expressing any particular sentiment towards it.
   */
  reception: 'positive' | 'mixed' | 'negative' | 'neutral';

  /**
   * An array of one or more spans within the document's text where the external
   * document is mentioned by name, for example, 'the US Constitution' in 'the Second
   * Amendment to the US Constitution protects freedom of speech'.
   */
  mentions: Array<ILGSv1Span>;

  /**
   * An array of spans within the document's text where specific parts of the
   * external document are referenced, for example, 'Section 2' in 'as defined in
   * Section 2 of the US Constitution'.
   */
  pinpoints: Array<ILGSv1Span>;
}

/**
 * An identification number mentioned in a document belonging to a legal person.
 *
 * If an identification number was mentioned in the document but is not
 * attributable to a legal person, it will not be extracted.
 */
export interface ILGSv1IDNumber {
  /**
   * The identification number.
   */
  number: string;

  /**
   * The unique identifier of the person that this identification number belongs to.
   */
  person: string;

  /**
   * An array of one or more spans within the document's text where the
   * identification number is mentioned.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * A location identified within a document.
 */
export interface ILGSv1Location {
  /**
   * The unique identifier of the location in the format `loc:{index}` where
   * `{index}` is a non-negative incrementing integer starting from zero.
   */
  id: string;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  name: ILGSv1Span;

  /**
   * The type of the location, being one of `country`, `state`, `city`, `address`, or
   * `other`.
   */
  type: 'country' | 'state' | 'city' | 'address' | 'other';

  /**
   * A unique identifier for a location in the format `loc:{index}` where `{index}`
   * is a non-negative incrementing integer starting from zero.
   */
  parent: string | null;

  /**
   * An array of one or more spans within the document's text where the location is
   * mentioned.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * A legal person identified in a document.
 */
export interface ILGSv1Person {
  /**
   * The unique identifier of the person in the format `per:{index}` where `{index}`
   * is a non-negative incrementing integer starting from zero.
   */
  id: string;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  name: ILGSv1Span;

  /**
   * The legal entity type of the person, being one of `natural`, `corporate`, or
   * `politic`.
   *
   * `natural` denotes a human being in their capacity as a natural legal person,
   * including when representing unincorporated entities such as partnerships and
   * trusts.
   *
   * `corporate` denotes a body corporate such as a company, incorporated
   * partnership, or statutory corporation.
   *
   * `politic` denotes a body politic such as a court, state, government, or
   * intergovernmental organization.
   */
  type: 'natural' | 'corporate' | 'politic';

  /**
   * The role of the person in relation to the subject of the document.
   *
   * The following roles are currently supported: | | | | ------------------------ |
   * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   * | | `plaintiff` | A party initiating the case that is the subject of the
   * document. | | `petitioner` | A party initiating the petition that is the subject
   * of the document. | | `applicant` | A party initiating the application that is
   * the subject of the document. | | `appellant` | A party appealing the decision
   * that is the subject of the document. | | `appellee` | A party responding to the
   * appeal that is the subject of the document if they are explicitly referred to as
   * an 'appellee'. | | `claimant` | A party making a claim in the case that is the
   * subject of the document. | | `complainant` | A party making a complaint in the
   * case that is the subject of the document. | | `defendant` | A party defending
   * against the case that is the subject of the document. | | `respondent` | A party
   * responding to the petition, appeal, or application that is the subject of the
   * document. | | `prior_authority` | An authority (e.g., judge, tribunal, court)
   * that made a prior decision in the case that is the subject of the document. Both
   * individual judges and courts should be annotated with this role where
   * applicable. This is not to be used for authorities cited as precedent, only for
   * those that made prior decisions in the same case. | | `prosecutor` | A lawyer
   * prosecuting the case that is the subject of the document. | | `defense_counsel`
   * | A lawyer defending the case that is the subject of the document. | | `amicus`
   * | A party filing an amicus curiae brief in the case that is the subject of the
   * document. | | `intervener` | A party attempting to or that has intervened in the
   * case that is the subject of the document. | | `borrower` | A party borrowing
   * money or other assets under the agreement that is the subject of the document,
   * including 'mortgagors' and 'debtors'. | | `lender` | A party lending money or
   * other assets under the agreement that is the subject of the document, including
   * 'mortgagees' and 'creditors'. | | `guarantor` | A party guaranteeing obligations
   * under the agreement that is the subject of the document, including 'sureties'. |
   * | `lessee` | A party leasing goods or services under the agreement that is the
   * subject of the document, including 'tenants'. | | `lessor` | A party leasing
   * goods or services under the agreement that is the subject of the document,
   * including 'landlords'. | | `employer` | A party employing personnel under the
   * agreement that is the subject of the document. | | `employee` | A party employed
   * under the agreement that is the subject of the document. | | `licensor` | A
   * party licensing intellectual property or other rights under the agreement that
   * are the subject of the document. | | `licensee` | A party licensed to use
   * intellectual property or other rights under the agreement that are the subject
   * of the document. | | `franchisor` | A party granting a franchise under the
   * agreement that is the subject of the document. | | `franchisee` | A party
   * granted a franchise under the agreement that is the subject of the document. | |
   * `buyer` | A party purchasing goods or services under the agreement that is the
   * subject of the document, including 'purchasers', 'customers', and 'clients'. | |
   * `seller` | A party selling or providing goods or services under the agreement
   * that is the subject of the document, including 'Vendors', 'Suppliers', and
   * 'Service Providers' (where such parties are actually providing goods or services
   * under the agreement). | | `contractor` | A party contracted to perform work or
   * services under the agreement that is the subject of the document, including
   * 'consultants'. | | `shareholder` | A party holding shares or equity under the
   * agreement that is the subject of the document. | | `joint_venturer` | A party
   * participating in a joint venture under the agreement that is the subject of the
   * document. | | `investor` | A party investing money or assets under the agreement
   * that is the subject of the document. | | `insurer` | A party providing insurance
   * under the agreement that is the subject of the document. | | `insured` | A party
   * insured under the agreement that is the subject of the document. | | `settlor` |
   * A party establishing the trust that is the subject of the document. | |
   * `trustee` | A party managing the trust that is the subject of the document. | |
   * `beneficiary` | A party benefiting from the trust that is the subject of the
   * document. | | `enacting_authority` | An authority (e.g., legislature, regulator,
   * Minister/Secretary, President/Prime Minister, tribunal, court, judge) giving
   * legal effect to or authorizing the document. All relevant individuals and bodies
   * should be annotated with this role where applicable. | | `empowered_authority` |
   * An authority (e.g., government agency, regulator, Minister/Secretary,
   * President/Prime Minister, tribunal, court) empowered by the document to carry
   * out functions or duties. | | `debater` | A person participating in the debate
   * that is the subject of the document. | | `governing_jurisdiction` | The
   * jurisdiction whose laws govern the document. | | `director` | A director or
   * other officer of a corporate legal person mentioned in the document. | | `clerk`
   * | A clerk, notary, or other official certifying, witnessing, filing, recording,
   * registering, or otherwise administering the document. | | `witness` | A witness
   * witnessing the signing of the document, or whose testimony is part of the case
   * that is the subject of the document. | | `other` | A party to the case,
   * agreement, legislation, or regulation that is the subject of the document that
   * does not fit into any of the other roles. | | `non_party` | A legal person
   * mentioned in the document that is not a party to the case, agreement,
   * legislation, or regulation that is the subject of the document. |
   */
  role:
    | 'plaintiff'
    | 'petitioner'
    | 'applicant'
    | 'appellant'
    | 'appellee'
    | 'claimant'
    | 'complainant'
    | 'defendant'
    | 'respondent'
    | 'prior_authority'
    | 'prosecutor'
    | 'defense_counsel'
    | 'amicus'
    | 'intervener'
    | 'borrower'
    | 'lender'
    | 'guarantor'
    | 'lessee'
    | 'lessor'
    | 'employer'
    | 'employee'
    | 'licensor'
    | 'licensee'
    | 'franchisor'
    | 'franchisee'
    | 'buyer'
    | 'seller'
    | 'contractor'
    | 'shareholder'
    | 'joint_venturer'
    | 'investor'
    | 'insurer'
    | 'insured'
    | 'enacting_authority'
    | 'empowered_authority'
    | 'settlor'
    | 'trustee'
    | 'beneficiary'
    | 'debater'
    | 'director'
    | 'governing_jurisdiction'
    | 'clerk'
    | 'witness'
    | 'other'
    | 'non_party';

  /**
   * A unique identifier for a legal person in the format `per:{index}` where
   * `{index}` is a non-negative incrementing integer starting from zero.
   */
  parent: string | null;

  /**
   * A unique identifier for a location in the format `loc:{index}` where `{index}`
   * is a non-negative incrementing integer starting from zero.
   */
  residence: string | null;

  /**
   * An array of one or more spans within the document's text where the person is
   * mentioned.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * A valid phone number identified in a document belonging to a legal person.
 *
 * If a phone number was mentioned in the document but is not valid, possible, or
 * attributable to a legal person, it will not be extracted.
 */
export interface ILGSv1PhoneNumber {
  /**
   * The normalized phone number in E.123 international notation conforming with
   * local conventions on the use of spaces and hyphens as separators.
   */
  number: string;

  /**
   * The unique identifier of the person that this phone number belongs to.
   */
  person: string;

  /**
   * An array of one or more spans within the document's text where the phone number
   * is mentioned.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * A quotation within a document.
 */
export interface ILGSv1Quote {
  /**
   * A unique identifier for a segment in the format `seg:{index}` where `{index}` is
   * a non-negative incrementing integer starting from zero.
   */
  source_segment: string | null;

  /**
   * A unique identifier for an external document in the format `exd:{index}` where
   * `{index}` is a non-negative incrementing integer starting from zero.
   */
  source_document: string | null;

  /**
   * A unique identifier for a legal person in the format `per:{index}` where
   * `{index}` is a non-negative incrementing integer starting from zero.
   */
  source_person: string | null;

  /**
   * Whether the quote is being used to amend or modify content, typically in other
   * documents.
   */
  amending: boolean;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  span: ILGSv1Span;
}

/**
 * A segment within the document representing a structurally distinct portion of
 * the document's content.
 */
export interface ILGSv1Segment {
  /**
   * The unique identifier of the segment in the format `seg:{index}` where `{index}`
   * is a non-negative incrementing integer starting from zero.
   */
  id: string;

  /**
   * The structural 'kind' of the segment, being one of `container`, `unit`, `item`,
   * or `figure`.
   *
   * A `container` is a structural or semantic grouping of content such as a chapter.
   * It can contain segments of any kind or none at all.
   *
   * A `unit` is a single syntactically independent unit of text such as a paragraph.
   * It can only contain `item`s and `figure`s.
   *
   * An `item` is a syntactically subordinate unit of text such as an item in a
   * run-in list. It can only contain other `item`s. Note that an `item` is
   * conceptually distinct from a list item—it is perfectly possible to encounter
   * list items that are syntactically independent of their surrounding items just as
   * it is possible to encounter dependent clauses that do not appear as part of a
   * list.
   *
   * A `figure` is a visually structured or tabular unit of content such as a
   * diagram, equation, or table. It cannot contain segments.
   */
  kind: 'container' | 'unit' | 'item' | 'figure';

  /**
   * The addressable 'type' of the segment within the document's referential scheme
   * and hierarchy, whether defined explicitly (e.g., by headings, such as
   * 'Section 2. Definitions'), implicitly (e.g., by way of reference, such as 'as
   * defined in Section 2'), or by convention (e.g., [42] in a judgment often denotes
   * a `paragraph`, independent provisions in statute are often `section`s, etc.). If
   * the type is not known or not applicable, it will be set to `null`.
   *
   * Note that, although many segment types may coincide with syntactic constructs,
   * they should be thought of purely as distinct formal citable units. Most
   * paragraphs (in the syntactic sense) will not have the `paragraph` type, for
   * example. That type is reserved for segments that would formally be cited as a
   * 'Paragraph' within the document's referential scheme.
   *
   * The following types are currently supported: `title`, `book`, `part`, `chapter`,
   * `subchapter`, `division`, `subdivision`, `subpart`, `subtitle`,
   * `table_of_contents`, `article`, `section`, `regulation`, `rule`, `clause`,
   * `paragraph`, `subarticle`, `subsection`, `subregulation`, `subrule`,
   * `subclause`, `subparagraph`, `item`, `subitem`, `point`, `indent`, `schedule`,
   * `annex`, `appendix`, `exhibit`, `recital`, `signature`, `note`, `figure`,
   * `table`, and `formula`.
   *
   * The `title`, `book`, `part`, `chapter`, `subchapter`, `division`, `subdivision`,
   * `subpart`, `subtitle`, and `table_of_contents` types are exclusive to the
   * `container` kind.
   *
   * The `figure` kind only supports the `figure`, `table`, and `formula` types, all
   * of which are exclusive to it.
   */
  type:
    | 'title'
    | 'book'
    | 'part'
    | 'chapter'
    | 'subchapter'
    | 'division'
    | 'subdivision'
    | 'subpart'
    | 'subtitle'
    | 'table_of_contents'
    | 'article'
    | 'section'
    | 'regulation'
    | 'rule'
    | 'clause'
    | 'paragraph'
    | 'subarticle'
    | 'subsection'
    | 'subregulation'
    | 'subrule'
    | 'subclause'
    | 'subparagraph'
    | 'item'
    | 'subitem'
    | 'point'
    | 'indent'
    | 'schedule'
    | 'annex'
    | 'appendix'
    | 'exhibit'
    | 'recital'
    | 'signature'
    | 'note'
    | 'figure'
    | 'table'
    | 'formula'
    | null;

  /**
   * The functional 'category' of the segment within the document, being one of
   * `front_matter`, `scope`, `main`, `annotation`, `back_matter`, or `other`.
   *
   * `front_matter` denotes non-operative contextualizing content occurring at the
   * start of a document such as a preamble or recitals.
   *
   * `scope` denotes operative content defining the application or interpretation of
   * a document such as definition sections and governing law clauses.
   *
   * `main` denotes operative, non-scopal content.
   *
   * `annotation` denotes non-operative annotative content providing explanatory or
   * referential information such as commentary, footnotes, and endnotes.
   *
   * `back_matter` denotes non-operative contextualizing content occurring at the end
   * of a document such as authority statements.
   *
   * `other` denotes content that does not fit into any of the other categories.
   */
  category: 'front_matter' | 'scope' | 'main' | 'annotation' | 'back_matter' | 'other';

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  type_name: ILGSv1Span | null;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  code: ILGSv1Span | null;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  title: ILGSv1Span | null;

  /**
   * A unique identifier for a segment in the format `seg:{index}` where `{index}` is
   * a non-negative incrementing integer starting from zero.
   */
  parent: string | null;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  span: ILGSv1Span;
}

/**
 * A zero-based, half-open span into the Unicode code point space of input text.
 *
 * All spans are globally laminar and well-nested similar to XML—it is impossible
 * for any two spans to partially overlap; they can only be disjoint, adjacent, or
 * wholly nested. Spans of the exact same type (e.g., segments) will never be
 * duplicated.
 *
 * A span cannot be empty and will never start or end at whitespace.
 *
 * Note that, when using programming languages other than Python (which uses
 * zero-based, half-open, Unicode code point-spaced string indexing), indices may
 * need to be translated accordingly (for example, JavaScript slices into UTF-16
 * code units instead of Unicode code points).
 */
export interface ILGSv1Span {
  /**
   * The zero-based start index of the half-open span of Unicode code points in the
   * input text.
   */
  start: number;

  /**
   * The zero-based end index of the half-open span (i.e., the end is exclusive) of
   * Unicode code points in the input text.
   */
  end: number;
}

/**
 * A term assigned a definite meaning within a document.
 */
export interface ILGSv1Term {
  /**
   * The unique identifier of the term in the format `term:{index}` where `{index}`
   * is a non-negative incrementing integer starting from zero.
   */
  id: string;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  name: ILGSv1Span;

  /**
   * A zero-based, half-open span into the Unicode code point space of input text.
   *
   * All spans are globally laminar and well-nested similar to XML—it is impossible
   * for any two spans to partially overlap; they can only be disjoint, adjacent, or
   * wholly nested. Spans of the exact same type (e.g., segments) will never be
   * duplicated.
   *
   * A span cannot be empty and will never start or end at whitespace.
   *
   * Note that, when using programming languages other than Python (which uses
   * zero-based, half-open, Unicode code point-spaced string indexing), indices may
   * need to be translated accordingly (for example, JavaScript slices into UTF-16
   * code units instead of Unicode code points).
   */
  meaning: ILGSv1Span;

  /**
   * An array of spans within the document's text where the term is mentioned outside
   * of its definition.
   *
   * It is possible for the term to have no mentions if, outside of its definition,
   * it is never referred to in the document.
   */
  mentions: Array<ILGSv1Span>;
}

/**
 * A website identified in a document belonging to a legal person.
 *
 * If a website was mentioned in the document but is not attributable to a legal
 * person, it will not be extracted.
 */
export interface ILGSv1Website {
  /**
   * The normalized URL of the website in the form `https://{host}/`.
   */
  url: string;

  /**
   * The unique identifier of the person that this website belongs to.
   */
  person: string;

  /**
   * An array of one or more spans within the document's text where the website is
   * mentioned (including paths and slugs which are not part of the website's
   * normalized URL).
   */
  mentions: Array<ILGSv1Span>;
}

export declare namespace v1 {
  export {
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
