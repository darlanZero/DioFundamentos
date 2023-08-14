export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
      this.name = name
     console.log('Nome alterado com sucesso')
    }

    getName = (): string => {
      return this.name
    }
  
    deposit = (amount: number): void => {
      if(this.validateStatus()) {
        this.balance += amount
      }
    }
  
    withdraw = (amount: number): void => {
      if (this.status) {
        if (amount <= this.balance) {
          this.balance -= amount
          console.log('Você sacou', this.withdraw, 'reais.')
        } else {
          throw  new Error('Saldo insuficiente')
        }
      }
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }

    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }

      throw new Error('Conta inválida')
    }
  
  }