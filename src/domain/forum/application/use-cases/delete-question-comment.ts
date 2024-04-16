import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface DeleteQuestionCommitUseCaseRequest {
  authorId: string
  questionCommentId: string
}

interface DeleteQuestionCommitUseCaseResponse {}

export class DeleteQuestionCommitUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommitUseCaseRequest): Promise<DeleteQuestionCommitUseCaseResponse> {
    const questionComment = await this.questionCommentsRepository.findById(
      questionCommentId
    )

    if (!questionComment) {
      throw new Error('Question comment not found.')
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error('Not Allowed')
    }

    await this.questionCommentsRepository.delete(questionComment)

    return {}
  }
}
