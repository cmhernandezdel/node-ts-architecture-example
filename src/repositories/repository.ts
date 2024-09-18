import { Model } from "sequelize";

export interface Repository<T extends Model> {
    findAll(): Promise<T[]>;
    find(id: string): Promise<T | null>;
    insert(item: T): Promise<T>;
    update(item: T): Promise<T>;
    delete(item: T): Promise<void>;
}