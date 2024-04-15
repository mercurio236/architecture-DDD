import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Questions } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repository";



interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
}

interface CreateQuestionUseCaseResponse {
    question: Questions
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionRepository) {}

  async execute({
   authorId,
   title,
   content
  }: CreateQuestionUseCaseRequest):Promise<CreateQuestionUseCaseResponse> {
    const question = Questions.create({
        authorId: new UniqueEntityID(authorId),
        title,
        content
    })

    await this.questionsRepository.create(question)

    return {
        question
    }
  }
}
