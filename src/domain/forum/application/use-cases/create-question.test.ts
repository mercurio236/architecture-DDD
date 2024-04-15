import { InMemoryQuestionsRepository } from 'test/respositories/in-memory-questions-respository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () =>{
    beforeEach(() =>{
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
        sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)

        //system under test
    })

    it('should be able to create a question', async () =>{
        const {question} = await sut.execute({
            authorId:'1',
            title:'Nova pergunta',
            content:'Conteudo da pergunta'
        })
    
        expect(question.id).toBeTruthy()
        expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
    })

})