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

export interface OneHouse {
    name: string;
}