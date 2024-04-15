import { InMemoryQuestionsRepository } from 'test/respositories/in-memory-questions-respository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { makeQuestion } from 'test/factories/make-question'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () =>{
    beforeEach(() =>{
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
        sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)

        //system under test
    })

    it('should be able to get a question by slug', async () =>{
        const newQuestion = makeQuestion({
            slug: Slug.create('example-question')
        })
        
        inMemoryQuestionsRepository.create(newQuestion)
        
        const {question} = await sut.execute({
            slug:'example-question'
        })
    
        expect(question.id).toBeTruthy()
       
    })

})