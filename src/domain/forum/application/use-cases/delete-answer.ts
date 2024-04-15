import { AnswerRepository } from '../repositories/answer-repository'

interface DeleteAnswerUseCaseRequest {
  authorId: string
  questionId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    authorId,
    questionId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const question = await this.answerRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.answerRepository.delete(question)

    return {}
  }
}
