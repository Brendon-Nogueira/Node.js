const myFuturePromise = () => {
    return new Promise((resolved, reject) => {
        setTimeout(() => resolved('resolvido a promise!'), 8000)
    })
}

const mySecondFunction = async () => {
    console.log('initializing mySecondFunction')

  const data = await myFuturePromise()
  console.log(`data received: ${data}`)

    console.log('endind mySecondFunction')
}

mySecondFunction()