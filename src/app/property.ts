export interface Property {
    _id: number,
    sellerName: string,
    location: string,
    area: string,
    bedrooms: number,
    bathrooms: number,
    amenities: Amenity,
    __v?: number
}

interface Amenity {
    [key: string]: string;
}
