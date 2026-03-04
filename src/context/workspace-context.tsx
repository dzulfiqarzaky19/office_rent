/**
 * Legacy compatibility shim — context is now a Zustand store.
 * Any file still importing from "@/context/workspace-context" will
 * continue to work via this re-export.
 */
export { useCatalogStore as useWorkspace } from "@/features/catalog/store/useCatalogStore";

// WorkspaceProvider is no longer needed (Zustand has no Provider).
// This is exported as a passthrough so old imports don't break.
export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
