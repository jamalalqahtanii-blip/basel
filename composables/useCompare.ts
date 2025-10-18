// Comparison composable using localStorage
// Nuxt auto-imports defineComponent APIs at runtime; declare ref for TS when types aren't generated
declare function ref<T = any>(v?: T): { value: T }

// Singleton state
const items = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const STORAGE_KEY = 'compare_items'
const MAX_COMPARE_ITEMS = 4 // Maximum items that can be compared

export function useCompare() {
  // Load items from localStorage on client side
  const loadFromStorage = () => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed)) {
            // Clean up old data and migrate to new format
            items.value = parsed.map(item => ({
              id: item.id,
              name: item.name,
              price: item.price || 0,
              image: item.image || '', // Keep image field if it exists
              slug: item.slug || '',
              brand: item.brand || '',
              category: item.category || '',
              rating: item.rating || 0,
              reviews_count: item.reviews_count || 0,
              description: item.description || '',
              features: item.features || [],
              specifications: item.specifications || {},
              added_at: item.added_at || new Date().toISOString()
            }))
            // Save cleaned data back to localStorage
            saveToStorage()
          } else {
            items.value = []
          }
        }
      } catch (e) {
        console.warn('Failed to load compare items from localStorage:', e)
        items.value = []
      }
    }
  }

  // Save items to localStorage
  const saveToStorage = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value))
      } catch (e) {
        console.warn('Failed to save compare items to localStorage:', e)
      }
    }
  }

  // Initialize on mount
  const init = () => {
    loadFromStorage()
  }

  // Add product to comparison
  const add = (product: any) => {
    if (!product || !product.id) {
      error.value = 'Invalid product'
      return false
    }

    // Check if already exists
    const exists = items.value.find(item => item.id === product.id)
    if (exists) {
      error.value = 'Product already in comparison'
      return false
    }

    // Check maximum limit
    if (items.value.length >= MAX_COMPARE_ITEMS) {
      error.value = `Maximum ${MAX_COMPARE_ITEMS} items can be compared`
      return false
    }

    loading.value = true
    error.value = null

    try {
      // Helper function to get full image URL
      const getFullImageUrl = (imagePath: string) => {
        if (!imagePath) return ''
        
        if (/^(https?:|data:|blob:)/i.test(imagePath)) {
          return imagePath
        }
        
        // Get base URL from runtime config or use default
        const cfg = useRuntimeConfig()
        const assetBase = (cfg?.public?.apiBase || 'http://127.0.0.1:8000').replace(/\/api(?:\/v\d+)?$/, '')
        
        let path = imagePath.replace(/\\/g, '/')
        path = path.replace(/^public\//, '')
        path = path.replace(/^app\/public\//, '')
        path = path.replace(/^storage\/app\/public\//, '')
        path = path.replace(/\/+/g, '/').replace(/^\//, '')
        
        if (!path.startsWith('storage/')) {
          path = 'storage/app/public/product/thumbnail/' + path
        }
        
        return `${assetBase}/${path}`
      }

      // Add product with essential data including full image URL
      const compareItem = {
        id: product.id,
        name: product.name,
        price: product.price || product.unit_price || product.selling_price || 0,
        image: getFullImageUrl(product.thumbnail || product.image || product.thumbnail_full_url || ''),
        slug: product.slug,
        brand: product.brand?.name || product.brand_name || '',
        category: product.category?.name || product.category_name || '',
        rating: product.rating || 0,
        reviews_count: product.reviews_count || 0,
        description: product.description || '',
        features: product.features || [],
        specifications: product.specifications || {},
        added_at: new Date().toISOString()
      }

      items.value.push(compareItem)
      saveToStorage()
      return true
    } catch (e: any) {
      error.value = e?.message || 'Failed to add product to comparison'
      return false
    } finally {
      loading.value = false
    }
  }

  // Remove product from comparison
  const remove = (productId: number) => {
    loading.value = true
    error.value = null

    try {
      const index = items.value.findIndex(item => item.id === productId)
      if (index > -1) {
        items.value.splice(index, 1)
        saveToStorage()
        return true
      }
      error.value = 'Product not found in comparison'
      return false
    } catch (e: any) {
      error.value = e?.message || 'Failed to remove product from comparison'
      return false
    } finally {
      loading.value = false
    }
  }

  // Check if product is in comparison
  const isInCompare = (productId: number) => {
    return items.value.some(item => item.id === productId)
  }

  // Clear all items
  const clearAll = () => {
    loading.value = true
    error.value = null

    try {
      items.value = []
      saveToStorage()
      return true
    } catch (e: any) {
      error.value = e?.message || 'Failed to clear comparison'
      return false
    } finally {
      loading.value = false
    }
  }

  // Get comparison count
  const compareCount = computed(() => items.value.length)

  // Check if comparison is full
  const isFull = computed(() => items.value.length >= MAX_COMPARE_ITEMS)

  // Check if comparison is empty
  const isEmpty = computed(() => items.value.length === 0)

  // Get comparison items
  const getItems = () => items.value

  // Clear old data and reset
  const clearOldData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
      items.value = []
    }
  }

  return {
    items,
    loading,
    error,
    compareCount,
    isFull,
    isEmpty,
    init,
    add,
    remove,
    isInCompare,
    clearAll,
    getItems,
    clearOldData
  }
}
