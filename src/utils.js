const arrayWithout = (array, item) => {
  const index = array.indexOf(item)
  return [...array.slice(0, index), ...array.slice(index+1, array.length)]
}

const arrayWithoutById = (array, id) => {
  const item = array.find( (item) => item.id === id )
  const index = array.indexOf(item)
  return [...array.slice(0, index), ...array.slice(index+1, array.length)]
}

export {
  arrayWithout,
  arrayWithoutById
}
