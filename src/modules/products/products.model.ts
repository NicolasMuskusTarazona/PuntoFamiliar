export interface Products {
    id: number
    name: string
    base_price: number
    description?: string | null
    image: string
    categoryId: number
    category?: {
        id: number
        name: string
        image: string
    }
}