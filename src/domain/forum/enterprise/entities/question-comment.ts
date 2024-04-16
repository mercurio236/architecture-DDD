import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Comment, CommentProps } from './comment'

export interface QuesntionCommentProps extends CommentProps {
  questionId: UniqueEntityID
}

export class QuesntionComment extends Comment<QuesntionCommentProps> {
  get questionId() {
    return this.props.questionId
  }

  static create(
    props: Optional<QuesntionCommentProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const quesntionComment = new QuesntionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    )
    return quesntionComment
  }
}
