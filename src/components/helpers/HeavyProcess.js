
export const heavyProcess = (iterations) => {

    for(let i = 0; i < iterations; i++){
        console.log('...')
    }

    return `${iterations} iterations done.`
}