import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import dayjs from 'dayjs'

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
  get authorId() {
    return this.props.authorId
  }
  get bestAnswerId() {
    return this.props.bestAnswerId
  }
  get title() {
    return this.props.title
  }
  get content() {
    return this.props.content
  }
  get slug() {
    return this.props.slug
  }
  get createAt() {
    return this.props.createAt
  }
  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.createAt, 'days') <= 3
  }

  get except() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)

    this.touch()
  }

  set content(content: string) {
    this.props.content = content
    
    this.touch()
  }

  set bestAnswerId(bestAnswerId: UniqueEntityID | undefined) {
    this.props.bestAnswerId = bestAnswerId

    this.touch()
  }

  static create(
    props: Optional<QuestionsProps, 'createAt' | 'slug'>,
    id?: UniqueEntityID
  ) {
    const question = new Questions(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createAt: new Date(),
      },
      id
    )
    return question
  }
}
