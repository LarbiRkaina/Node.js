import { House, OneHouse, Review } from "../house.model"

export interface HouseRepository {
    getHouseList: (page?: number, pageSize?:number) => Promise <OneHouse[]>;
    getHouse: (id: string) => Promise <House>;
    saveHouse: (house: House) => Promise <House>;
    saveReview: (review: Review, id:string) => Promise <Review>
}