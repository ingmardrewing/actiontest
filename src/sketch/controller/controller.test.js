
import Controller from './controller'

test('add' , () => {
  const controller = new Controller()
  expect(controller.dt()).toBe(3)
})
