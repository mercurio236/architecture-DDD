import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get authorId() {
    return this.props.authorId
  }
  get questionId() {
    return this.props.questionId
  }
  get content() {
    return this.props.content
  }
  get createAt() {
    return this.props.createAt
  }
  get updatedAt() {
    return this.props.updatedAt
  }

  get except() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  static create(props: Optional<AnswerProps, 'createAt'>, id?: UniqueEntityID) {
    const answer = new Answer(
      {
        ...props,
        createAt: new Date(),
      },
      id
    )
    return answer
  }
}
