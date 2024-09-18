import express from 'express';

export interface Request<T> extends express.Request {
    body: T;
}