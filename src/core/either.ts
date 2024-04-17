//error
export class Left<L> {
  readonly value: L //ela nunca vai ser alterada após a sua inicialização

  constructor(value: L) {
    this.value = value
  }
}

//success
export class Right<R> {
  readonly value: R //ela nunca vai ser alterada após a sua inicialização

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
