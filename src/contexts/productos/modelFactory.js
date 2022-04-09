import idMaker from '../../utils/idMaker'

const productoFactory = (title, body, img, id = null) => ({
  id: id ?? idMaker.next(),
  modifiedAt: new Date(),
  title,
  body,
  img,
})

export default productoFactory
