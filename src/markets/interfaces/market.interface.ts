
export interface Market extends Document {
    id?: string;
    name: string;
    description: string;
    locations: string;
    foodCategory: string;
    image: string;
    date: Date;
}
