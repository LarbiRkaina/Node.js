import { Router } from 'express';
import { houseRepository } from 'dals';
import {
  mapHouseListFromModelToApi,
  mapHouseFromModelToApi,
  mapHouseFromApiToModel,
  mapReviewFromApiToModel,
  mapOneHouseFromModelToApi,
  mapOneHouseListFromModelToApi
} from './house.mappers';

export const housesApi = Router();

housesApi
  .get('/', async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const bookList = await houseRepository.getHouseList(page, pageSize);
      res.send(mapOneHouseListFromModelToApi(bookList));
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const house = mapHouseFromApiToModel(req.body);
      const newHouse = await houseRepository.saveHouse(house);
      res.status(201).send(mapHouseFromModelToApi(newHouse));
    } catch (error) {
      next(error);
    }
  })
  // .put('/:id', async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const house = mapHouseFromApiToModel({ ...req.body, id });
  //     await houseRepository.saveHouse(house);
  //     res.sendStatus(204);
  //   } catch (error) {
  //     next(error);
  //   }
  // })

  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const review = mapReviewFromApiToModel({ ...req.body});
      await houseRepository.saveReview(review, id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      await houseRepository.deleteHouse(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });