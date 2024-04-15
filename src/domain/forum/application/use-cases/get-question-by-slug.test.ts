import { InMemoryQuestionsRepository } from 'test/respositories/in-memory-questions-respository'
import { CreateQuestionUseCase } from './create-question'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Questions } from '../../enterprise/entities/question'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () =>{
    beforeEach(() =>{
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
        sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)

        //system under test
    })

    it('should be able to get a question by slug', async () =>{
        const newQuestion = Questions.create({
            title:'Example question',
            slug: Slug.create('example-question'),
            authorId: new UniqueEntityID(),
            content:'Example content'
        })
        
        inMemoryQuestionsRepository.create(newQuestion)
        
        const {question} = await sut.execute({
            slug:'example-question'
        })
    
        expect(question.id).toBeTruthy()
       
    })

})