//DioBanking
 
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

/*const peopleAccount: PeopleAccount = new PeopleAccount	(10524470965, 'Darlan Oliveira', 16785)
console.log(peopleAccount)
peopleAccount.deposit()*/

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 19853)
companyAccount.deposit()
console.log(companyAccount)


