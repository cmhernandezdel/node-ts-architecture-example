import { AuthorRepository } from "../../../src/repositories/author-repository";
import { AuthorModel } from "../../../src/repositories/models/author";
import { getAll } from "../../../src/services/authors";

describe(`Authors controller`, () => {


    beforeEach(() => {

    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it(`Should return all authors`, async () => {
        // Arrange
        const models: AuthorModel[] = [
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
});