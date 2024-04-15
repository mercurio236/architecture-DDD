import { QuestionRepository } from "@/domain/forum/application/repositories/question-repository";
import { Questions } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionRepository{
    public items: Questions[] = []

    async create(question: Questions): Promise<void> {
        this.items.push(question)
    }

}