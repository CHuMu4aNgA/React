export function classNames (cls, addClasses = []) {
    return [
        cls,
        addClasses
    ].join(' ')
}