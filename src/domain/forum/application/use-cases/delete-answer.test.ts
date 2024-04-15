
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { InMemoryAnswerRepository } from 'test/respositories/in-memory-answers-repository'
import { DeleteAnswerUseCase } from './delete-answer'
import { makeAnswer } from 'test/factories/make-answer'

let inMemoryAnswersRepository: InMemoryAnswerRepository
let sut: DeleteAnswerUseCase

describe('Delete Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswerRepository()
    sut = new DeleteAnswerUseCase(inMemoryAnswersRepository)

    //system under test
  })

  it('should be able to delete a question', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityID('author-1'),
      },
      new UniqueEntityID('question-1')
    )

    inMemoryAnswersRepository.create(newAnswer)

    await sut.execute({
      questionId: 'question-1',
      authorId: 'author-1',
    })

    expect(inMemoryAnswersRepository.items).toHaveLength(0)
  })

  it('should not be able to delete a question from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityID('author-1'),
      },
      new UniqueEntityID('question-1')
    )

    inMemoryAnswersRepository.create(newAnswer)

    expect(() => {
      return sut.execute({
        questionId: 'question-1',
        authorId: 'author-2',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
