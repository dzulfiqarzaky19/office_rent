/**
 * Generic utility helpers — no domain knowledge here.
 */

export function formatPrice(cents: number): string {
    return `$${cents.toFixed(0)}`;
}

export function formatPeriod(period: "weekly" | "monthly"): string {
    return period === "weekly" ? "wk" : "mo";
}
