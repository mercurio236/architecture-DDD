import { randomUUID } from "node:crypto"

class Student {
  public id: string
  public nome: string

  constructor(nome: string, id?: string) {
    this.nome = nome
    this.id = id ?? randomUUID()
  }
}
