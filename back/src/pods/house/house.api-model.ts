export interface House {
    id: string;
    name: string;
    description: string;
    reviews : Review[];
    
}

export interface Review {
    userName: string;
    comment: string;
}