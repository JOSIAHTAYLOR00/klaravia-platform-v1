export function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || !obj1 || !obj2) return false

  const keysObj1 = Object.keys(obj1).filter(key => key !== 'id' && key !== 'userId')
  const keysObj2 = Object.keys(obj2).filter(key => key !== 'id' && key !== 'userId')

  if (keysObj1.length !== keysObj2.length) return false

  return keysObj1.every(key => 
    keysObj2.includes(key) && deepEqual(obj1[key], obj2[key])
  )
}