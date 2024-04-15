import { Questions } from "../../enterprise/entities/question";


export interface QuestionRepository{
    findBySlug(slug: string): Promise<Questions | null>
    create(question: Questions ): Promise<void>
}