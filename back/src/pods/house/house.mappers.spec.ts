import { Decimal128, Int32, ObjectId } from 'mongodb';
import * as model from 'dals';
import * as apiModel from './house.api-model';
import { mapHouseListFromApiToModel } from './house.mappers';

describe('pods/house/house.mappers spec', () => {
  describe('mapHouseListFromApiToModel', () => {
    it.each<apiModel.House[]>([undefined, null, []])(
      'should return empty array when it feeds houseList equals %p',
      (houseList: any) => {
        // Arrange

        // Act
        const result: model.House[] = mapHouseListFromApiToModel(houseList);

        // Assert
        expect(result).toEqual([]);
      }
    );

    it('should return one mapped item in array when it feeds houseList with one item', () => {
      // Arrange
      const houseList: apiModel.House[] = [
        {
            
                id: "1",
                name: "Casa Malagueta",
                description: "Casa a primera linea de playa",
                beds: new Int32(5),
                bathrooms: new Decimal128("1"),
                bedrooms: new Int32(4),
                reviews: [
                  {comment: "Muy tranquila, ambiente agradable",
                  userName : "Larbi",
                  date: "2016-01-03T00:00:00.000Z"
                  }
                ]
          
              },
        
      ];

      // Act
      const result: model.House[] = mapHouseListFromApiToModel(houseList);

      // Assert
      expect(result).toEqual([
        {
            
            _id: "1",
            name: "Casa Malagueta",
            description: "Casa a primera linea de playa",
            beds: new Int32(5),
            bathrooms: new Decimal128("1"),
            bedrooms: new Int32(4),
            reviews: [
                {comments: "Muy tranquila, ambiente agradable",
                reviewer_name : "Larbi",
                date: new Date("2016-01-03T00:00:00.000Z")
                }
            ]
          
        },
      ]);
    });
  });
});