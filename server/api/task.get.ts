export default defineEventHandler(async (_event) => {
  return [{
    title: 'This is my first task',
  }, {
    title: 'Oh, I have another task',
  }] as Task[]
})
