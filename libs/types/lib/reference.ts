/** https://discord.dev/reference#snowflakes */
// Snowflakes can be bigints if ETF encoding is enabled
export type Snowflake = bigint | `${bigint}`;
