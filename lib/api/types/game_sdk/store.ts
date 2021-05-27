// deno-lint-ignore-file camelcase

// https://discord.dev/game-sdk/store

import type { Snowflake } from "../reference.ts";

/** https://discord.dev/game-sdk/store#httpspecific-data-models-limited-payment-data-object */
export interface LimitedPaymentData {
  /** unique ID of the payment */
  id: string;
  /** the currency the payment was made in */
  currency: string;
  /** the amount paid */
  amount: number;
  /** the amount of tax */
  tax: number;
  /** whether the amount is tax-inclusive */
  tax_inclusive: boolean;
}

export interface Entitlement {
  user_id: Snowflake;
  sku_id: Snowflake;
  application_id: Snowflake;
  id: Snowflake;
  type: number;
  payment?: LimitedPaymentData;
}

export interface SKU {
  id: Snowflake;
  type: number;
  dependent_sku_id: unknown; // null
  application_id: Snowflake;
  manifest_labels: `${bigint}`[];
  name: string;
  access_type: number;
  features: number[];
  system_requirements: Record<string, unknown>;
  content_ratings: Record<string, unknown>;
  release_date: string;
  legal_notice: Record<string, unknown>;
  price_tier: number;
  price: Record<string, unknown>;
  premium: boolean;
  locales: string[];
  bundled_skus: unknown; // null
}

/** https://discord.dev/game-sdk/store#get-entitlements */
export interface GetEntitlementsQuery extends GetEntitlementQuery {
  /** the user id to look up entitlements for */
  user_id?: Snowflake;
  /** (optional) the list SKU ids to check entitlements for */
  sku_ids?: Snowflake;
  /** retrieve entitlements before this time */
  before?: Snowflake;
  /** retrieve entitlements after this time */
  after?: Snowflake;
  /** number of entitlements to return, 1-100, default 100 */
  limit?: number;
}

/** https://discord.dev/game-sdk/store#get-entitlements */
export type GetEntitlementsBody = Entitlement[];

/** https://discord.dev/game-sdk/store#get-entitlement */
export interface GetEntitlementQuery {
  /** returns [limited payment data](https://discord.dev/game-sdk/store#httpspecific-data-models-limited-payment-data-object) for each entitlement */
  with_payments?: boolean;
}

/** https://discord.dev/game-sdk/store#get-entitlement */
export type GetEntitlementBody = Entitlement;

/** https://discord.dev/game-sdk/store#get-skus */
export type GetSKUBody = SKU[];

/** https://discord.dev/game-sdk/store#consume-sku */
export type ConsumeSKUBody = void;

/** https://discord.dev/game-sdk/store#delete-test-entitlement */
export type DeleteTestEntitlementBody = void;

/** https://discord.dev/game-sdk/store#create-purchase-discount */
export interface CreatePurchaseDiscountJSON {
  /** the percentage to discount - max of 100, min of 1 */
  percent_off: number;
  /** the time to live for the discount, in seconds - max of 3600, min of 60, default of 600 */
  ttl?: number;
}

/** https://discord.dev/game-sdk/store#create-purchase-discount */
export type CreatePurchaseDiscountBody = void;

/** https://discord.dev/game-sdk/store#delete-purchase-discount */
export type DeletePurchaseDiscountBody = void;
