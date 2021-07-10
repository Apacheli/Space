export interface DiscoveryMetadata {
  guild_id: Snowflake;
  primary_category_id: number;
  keywords: string[] | null;
  emoji_discoverability_enabled: boolean;
  partner_actioned_timestamp: string | null;
  partner_application_timestamp: string | null;
  category_ids: number[];
}

export interface DiscoveryCategory {
  id: number;
  name: DiscoveryCategoryName;
  is_primary: boolean;
}

export interface DiscoveryCategoryName {
  default: string;
  localizations?: Record<string, string>;
}

export type ListDiscoveryCategoriesBody = DiscoveryCategory[];

export interface ValidateDiscoverySearchTermQuery {
  term: string;
}

export interface ValidateDiscoverySearchTermBody {
  valid: boolean;
}
