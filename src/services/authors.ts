import { Author } from "../entities/author";
import { AuthorRepository } from "../repositories/author-repository";
import { AuthorModel } from "../repositories/models/author";
import { CreateAuthorRequest } from "../routes/requests/authors/create-author";

const authorRepository = new AuthorRepository();

export async function getAll(): Promise<Author[]> {
    const dtos: AuthorModel[] = await authorRepository.findAll();
    return dtos.map(d => d.toEntity());
}

export async function getById(id: string): Promise<Author | null> {
    const dto = await authorRepository.find(id);
    if (!dto) {
        return null;
    }

    return dto.toEntity();
}

export async function insert(request: CreateAuthorRequest) : Promise<Author> {
    const entity: Author = new Author(request.name, request.birthDate, request.country);
    const dto: AuthorModel = new AuthorModel({ id: entity.id, name: entity.name, birthDate: entity.birthDate, country: entity.country });
    await authorRepository.insert(dto);
    return entity;
}