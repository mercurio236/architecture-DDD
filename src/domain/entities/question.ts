import { randomUUID } from 'node:crypto'
import { Slug } from './value-objects/slug'

interface QuestionsProps {
  title: string
  slug: Slug
  content: string
  authorId: string
}

export class Questions {
  public id: string
  public title: string
  public slug: Slug
  public content: string
  public authorId: string

  constructor(props: QuestionsProps, id?: string) {
    this.title = props.title
    this.content = props.content
    this.slug = props.slug
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}
