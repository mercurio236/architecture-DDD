import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface QuestionsProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createAt: Date
  updatedAt?: Date
}

export class Questions extends Entity<QuestionsProps> {
  static create(props: Optional<QuestionsProps, 'createAt'>, id?: UniqueEntityID) {
    const question = new Questions(
      {
        ...props,
        createAt: new Date(),
      },
      id
    )
    return question
  }
}
