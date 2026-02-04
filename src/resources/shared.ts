// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Options for how to split text into smaller chunks.
 */
export interface ChunkingOptions {
  /**
   * A whole number greater than or equal to 1.
   */
  size?: number | null;

  /**
   * A number greater than or equal to 0 and less than 1.
   */
  overlap_ratio?: number | null;

  /**
   * A whole number greater than or equal to 0.
   */
  overlap_tokens?: number | null;
}
