import type { Audience, ViewType } from '@/types'

export function isVisibleForView(
  itemAudience: Audience[] | undefined,
  currentView: ViewType,
): boolean {
  // Product view is intentionally the full cross-functional picture.
  if (currentView === 'Product') return true

  if (!itemAudience || itemAudience.length === 0) return true

  return itemAudience.includes('All') || itemAudience.includes(currentView)
}

export function filterByView<T extends { audience?: Audience[] }>(
  items: T[],
  currentView: ViewType,
): T[] {
  return items.filter((item) => isVisibleForView(item.audience, currentView))
}
