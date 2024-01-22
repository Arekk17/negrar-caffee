export const generateOrderNumber = () => {
  const timestamp = Date.now()
  const randomPortion = Math.floor(Math.random() * 1000)
  const orderNumber = `ORD-${timestamp}-${randomPortion}`
  return orderNumber
}
