import React from 'react'
import { array } from 'prop-types'

const Gallery = ({galleries, match}) => {
  const getGallery = () => {
    if (!galleries) {
      return ''
    } else {
      const gallery = galleries.find((gallery) => {
        console.log(gallery.slug.toString(), match.params.slug)
        return gallery.slug.toString() === match.params.slug
      })

      if (gallery) {
        return gallery.title
      }

      return ''
    }
  }

  return (
    <p>{ getGallery() }</p>
  )
}

Gallery.propTypes = {
  galleries: array.isRequired,
}

Gallery.displayName = 'Gallery'

export default Gallery
//
// const Gallery extends Component {
//   static propTypes = {
//     galleries: array.isRequired,
//     match: any.isRequired,
//   }
//
//   state = {
//     gallery: null,
//   }
//
//
//
//   render() {
//
//   }
// }
//
// export default Gallery
