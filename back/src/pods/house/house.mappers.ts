import { ObjectId } from "mongodb";
import * as model from "dals";
import * as apiModel from "./house.api-model";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  name: house.name,
  //releaseDate: house.releaseDate?.toISOString(),
  description: house.description,
  bathrooms: house.bathrooms,
  beds: house.beds,
  bedrooms:house.bedrooms,
  reviews: mapReviewListFromModelToApi(house.reviews)
});

export const mapReviewListFromModelToApi= (
  reviewList: model.Review[]
): apiModel.Review[] => reviewList.map(mapReviewFromModelToApi);


export const mapReviewFromModelToApi = (house: model.Review): apiModel.Review => ({
  userName: house.reviewer_name,
  date: house.date?.toISOString(),
  comment: house.comments,
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);

export const mapOneHouseListFromModelToApi = (
  houseList: model.OneHouse[]
): apiModel.OneHouse[] => houseList.map(mapOneHouseFromModelToApi);

export const mapOneHouseFromModelToApi = (house: model.OneHouse): apiModel.OneHouse => ({
  name: house.name
});

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
    _id: house.id,
    name: house.name,
    description: house.description,
    bathrooms: house.bathrooms,
    beds: house.beds,
    bedrooms:house.bedrooms,
    reviews: mapReviewListFromApiTomodel(house.reviews)
});

export const mapReviewListFromApiTomodel= (
  houseList: apiModel.Review[]
): model.Review[] => houseList.map(mapReviewFromApiToModel);


export const mapReviewFromApiToModel = (house: apiModel.Review ):  model.Review => ({
  reviewer_name: house.userName,
  date: new Date (house.date),
  comments: house.comment
});

export const mapHouseListFromApiToModel = (
  houseList: apiModel.House[]
): model.House[] =>
  Array.isArray(houseList) ? houseList.map(mapHouseFromApiToModel) : [];