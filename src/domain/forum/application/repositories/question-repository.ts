import { Questions } from "../../enterprise/entities/question";


export interface QuestionRepository{
    create(question: Questions ): Promise<void>
}