export type HelloWorld = string | number

export const mount = (value: HelloWorld) => {
    console.log('sampleFunc:: ', value)

    return value
}
