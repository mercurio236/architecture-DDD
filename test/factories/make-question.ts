import {faker} from '@faker-js/faker'

import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Questions, QuestionsProps } from "@/domain/forum/enterprise/entities/question";


export function makeQuestion(
    override: Partial<QuestionsProps> = {},
    id?: UniqueEntityID,
){
   const question =  Questions.create({
        title: faker.lorem.sentence(),
        authorId: new UniqueEntityID(),
        content: faker.lorem.text(),
        ...override
    },
    id
)

    return question
}