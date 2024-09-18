import { AuthorDto } from "./dto/author";
import { Repository } from "./repository";

export class AuthorRepository implements Repository<AuthorDto> {
    findAll(): Promise<AuthorDto[]> {
        return AuthorDto.findAll();
    }

    find(id: string): Promise<AuthorDto | null> {
        return AuthorDto.findOne({
            where: { id: id }
        });
    }

    insert(item: AuthorDto): Promise<AuthorDto> {
        return item.save();
    }

    update(item: AuthorDto): Promise<AuthorDto> {
        return item.save();
    }

    delete(item: AuthorDto): Promise<void> {
        return item.destroy();
    }
}