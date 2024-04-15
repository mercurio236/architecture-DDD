import { QuestionRepository } from "@/domain/forum/application/repositories/question-repository";
import { Questions } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionRepository{
    public items: Questions[] = []
    
    async findBySlug(slug: string) {
        const question = this.items.find(item => item.slug.value === slug)

        if(!question){
            return null
        }

        return question
    }
    

    async create(question: Questions): Promise<void> {
        this.items.push(question)
    }

}