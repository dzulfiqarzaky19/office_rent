import Image from "next/image";
import Link from "next/link";

interface CollectionItem {
  id: string;
  name: string;
  imageSrc: string;
  weeklyPrice: number;
  monthlyPrice: number;
}

interface CollectionDetailsProps {
  items: CollectionItem[];
  rentalPeriod: "weekly" | "monthly";
}

export const CollectionDetails = ({ items, rentalPeriod }: CollectionDetailsProps) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-main">
        <h2 className="font-prada text-xs font-bold tracking-[0.2em] text-black">
          COLLECTION DETAILS
        </h2>
        <Link
          href="/builder"
          className="font-prada text-[9px] text-text-muted hover:text-black tracking-widest uppercase"
        >
          EDIT COLLECTION
        </Link>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-6 border-b border-border-light">
            <div className="flex items-center gap-6 min-w-0">
              <div className="w-20 h-20 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
                <Image 
                  src={item.imageSrc} 
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-prada text-xs font-bold text-black tracking-widest truncate uppercase">
                  {item.name}
                </p>
                <p className="font-prada text-[8px] text-text-muted tracking-widest uppercase mt-1">
                  {item.id.includes('desk') ? 'DESK' : item.id.includes('chair') ? 'CHAIR' : 'ACCESSORY'}
                </p>
              </div>
            </div>
            <span className="font-prada text-[11px] text-black tracking-tighter ml-6 shrink-0">
              ${rentalPeriod === "weekly" ? item.weeklyPrice : item.monthlyPrice}
              <span className="text-[9px] text-text-muted font-normal ml-1">/ {rentalPeriod === "weekly" ? "WK" : "MO"}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
