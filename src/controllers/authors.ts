import { CreateAuthorRequest } from "./requests/authors/create-author";
import { AuthorResponse } from "./responses/authors/author-response";
import * as authorsService from "../services/authors";

export async function getAll(): Promise<AuthorResponse[]> {
    const authors = await authorsService.getAll();
    const response = authors.map(a => new AuthorResponse(a));
    return response;
}

export async function create(request: CreateAuthorRequest) : Promise<AuthorResponse> {
    const author = await authorsService.insert(request);
    const response = new AuthorResponse(author);
    return response;
}