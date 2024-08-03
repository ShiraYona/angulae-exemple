 export class product{
    categoryName!: string ; // Assuming this is a required field
    productId!: number; // Assuming this is a required field
    categoryId: number| undefined; // Assuming this is a required field
    price?: number; // Optional field
    name?: string; // Optional field
    img?: string; // Optional field
    description?: string; // Optional field
} 