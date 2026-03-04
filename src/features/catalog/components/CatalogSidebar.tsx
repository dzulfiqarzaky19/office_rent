import { CategoryPanel } from "./CategoryPanel";

export const CatalogSidebar = () => {
  return (
    <aside className="w-full md:w-[450px] border-l border-border-main bg-white flex flex-col pt-8 flex-1 md:flex-none min-h-0 md:h-full">
      <div className="px-6 mb-8 shrink-0">
        <h2 className="font-prada text-[11px] font-bold tracking-[0.2em] text-black mb-1">
          COLLECTION
        </h2>
        <p className="text-[9px] font-prada text-text-muted tracking-widest uppercase">
          Select items to add to your workspace
        </p>
      </div>

      <div className="flex-1 overflow-hidden px-6">
        <CategoryPanel />
      </div>
    </aside>
  );
};
