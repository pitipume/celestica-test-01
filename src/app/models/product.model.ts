export interface ProductModel {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availableStatus: string
    reviews: Reviews[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    images: string[]
    thumbnail: string
}

export interface Dimensions {
    width: number
    height: number
    depth: number
}

export interface Reviews {
    rating: number
    comment: string
    date: Date
    reviewerName: string
    reviewerEmail: string
}

export interface Meta {
    createdAt: Date
    updatedAt: Date
    barcode: string
    qrCode: string
}