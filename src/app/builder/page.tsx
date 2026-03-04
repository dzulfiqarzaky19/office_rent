import Navbar from "@/shared/components/layout/Navbar";
import { SummaryPanel } from "@/features/catalog/components/SummaryPanel";
import { CatalogSidebar } from "@/features/catalog/components/CatalogSidebar";
import { WorkspaceLayout } from "@/features/workspace/components/WorkspaceLayout";

export default function BuilderPage() {
  return (
    <main className="relative h-dvh flex flex-col bg-white overflow-hidden">
      <Navbar />

      <div className="pt-(--navbar-height) flex-1 flex flex-col md:flex-row min-h-0 bg-white">
        <WorkspaceLayout />
        <CatalogSidebar />
      </div>

      <SummaryPanel />
    </main>
  );
}
