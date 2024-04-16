import { Questions } from "../../enterprise/entities/question";
import { QuestionComment } from "../../enterprise/entities/question-comment";


export interface QuestionCommentsRepository{
    create(question: QuestionComment ): Promise<void>
}