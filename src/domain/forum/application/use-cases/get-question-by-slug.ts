import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Questions } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repository";



interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

interface GetQuestionBySlugUseCaseResponse {
    question: Questions
}

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionRepository) {}

  async execute({
   slug
  }: GetQuestionBySlugUseCaseRequest):Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if(!question){
        throw new Error('Question not found.')
    }


    return {
        question
    }
  }
}
