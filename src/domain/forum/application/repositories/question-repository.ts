import { PaginationParams } from "@/core/repositories/pagination-params";
import { Questions } from "../../enterprise/entities/question";


export interface QuestionRepository{
    findById(id: string): Promise<Questions | null>
    findBySlug(slug: string): Promise<Questions | null>
    findManyRecent(params: PaginationParams):Promise<Questions[]>
    save(question: Questions ): Promise<void>
    create(question: Questions ): Promise<void>
    delete(question: Questions): Promise<void>
}