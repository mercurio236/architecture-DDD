import { expect, test } from 'vitest'
import { QuestionRepository } from '../repositories/question-repository'
import { Questions } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRespository: QuestionRepository = {
    create: async (question: Questions) => {
        return
    }
}
test('create a question', async () =>{
    const createQuestion = new CreateQuestionUseCase(fakeQuestionRespository)

    const {question} = await createQuestion.execute({
        authorId:'1',
        title:'Nova pergunta',
        content:'Conteudo da pergunta'
    })

    expect(question.authorId).toBeTruthy()
})