import { Perspective } from "./perspective.model";

export interface Objective{
    id: number,
    code: string,
    name: string,
    description: string,
    perspective: Perspective
}
