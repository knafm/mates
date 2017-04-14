export function nameCheck(name: string): boolean {
    return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name)
}
export function ageCheck(age: number): boolean {
    return !(age > 120 || age < 2 )
}