export class product{
    id: string;
    name: string;
    image: string;
    categoryID: string;
    price: number;
    discount: number;
    rating: number;
    ratingCount: number;
    featured: boolean
    recent:boolean;
    color: string;
    size: string;
    description: string;

    constructor(id: string, name: string, image: string, categoryID: string, price: number, discount: number, rating: number, ratingCount: number, featured: boolean, recent: boolean, color: string, size: string, description: string){
        this.id = id;
        this.name = name;
        this.image = image;
        this.categoryID = categoryID;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.ratingCount = ratingCount;
        this.featured = featured;
        this.recent = recent;
        this.color = color;
        this.size = size;
        this.description = description;
    }
}