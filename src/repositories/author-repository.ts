import { AuthorModel } from "./models/author";
import { Repository } from "./repository";

export class AuthorRepository implements Repository<AuthorModel> {
    findAll(): Promise<AuthorModel[]> {
        return AuthorModel.findAll();
    }

    find(id: string): Promise<AuthorModel | null> {
        return AuthorModel.findOne({
            where: { id: id }
        });
    }

    insert(item: AuthorModel): Promise<AuthorModel> {
        return item.save();
    }

    update(item: AuthorModel): Promise<AuthorModel> {
        return item.save();
    }

    delete(item: AuthorModel): Promise<void> {
        return item.destroy();
    }
}