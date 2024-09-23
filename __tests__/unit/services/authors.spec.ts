import { AuthorRepository } from "../../../src/repositories/author-repository";
import { AuthorModel } from "../../../src/repositories/models/author";
import { getAll, getById } from "../../../src/services/authors";

describe(`Authors controller`, () => {


    beforeEach(() => {

    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it(`Should return all authors`, async () => {
        // Arrange
        const models = [
            {
                id: '1',
                name: 'Author1',
                birthDate: new Date('1980-01-01'),
                country: 'USA',
                toEntity: jest.fn().mockReturnValue({
                    id: '1',
                    name: 'Author1',
                    birthDate: new Date('1980-01-01'),
                    country: 'USA'
                })
            },
            {
                id: '2',
                name: 'Author2',
                birthDate: new Date('1985-05-05'),
                country: 'UK',
                toEntity: jest.fn().mockReturnValue({
                    id: '2',
                    name: 'Author2',
                    birthDate: new Date('1985-05-05'),
                    country: 'UK'
                })
            }
        ] as unknown as AuthorModel[];

        jest.spyOn(AuthorRepository.prototype, 'findAll')
            .mockImplementation(() => new Promise((resolve, _) => {
                resolve(models);
            }));


        // Act
        const response = await getAll();

        // Assert
        expect(response.length).toBe(models.length);
        expect(AuthorRepository.prototype.findAll).toHaveBeenCalledTimes(1);
        
    });

    it(`Should return author by id`, async () => {
        // Arrange
        const model = {
            id: '1',
            name: 'Author1',
            birthDate: new Date('1980-01-01'),
            country: 'USA',
            toEntity: jest.fn().mockReturnValue({
                id: '1',
                name: 'Author1',
                birthDate: new Date('1980-01-01'),
                country: 'USA'
            })
        } as unknown as AuthorModel;

        jest.spyOn(AuthorRepository.prototype, 'find')
            .mockImplementation(() => new Promise((resolve, _) => {
                resolve(model);
            }));

        // Act
        const response = await getById(model.id);

        // Assert
        expect(response).toBeTruthy();
        expect(response!.id).toBe(model.id);
    });

    it(`Should return null when id is not found`, async () => {
        // Arrange
        jest.spyOn(AuthorRepository.prototype, 'find')
            .mockImplementation(() => new Promise((resolve, _) => {
                resolve(null);
            }));

        // Act
        const response = await getById('1');

        // Assert
        expect(response).toBeNull();
    });
});