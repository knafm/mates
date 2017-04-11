export function nameCheck(name:any):boolean{
    return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name)
}
export function ageCheck(age: any):boolean{
    return !(age>120 || age<2 )
}