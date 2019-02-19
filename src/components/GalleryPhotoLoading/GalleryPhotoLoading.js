import React from 'react'

import styled from 'styled-components'

import Loading from '../Loading'

const GalleryLoading = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: top;
  width: 100%;

  &-cont {
    align-items: center;
    display: flex;
    height: 90%;

    img {
      padding: 0 150px;
    }
  }

  & + & {
    display: none;
  }
`

const GalleryPhotoLoading = () => {
  return (
    <GalleryLoading>
      <div className="gallery-loading-cont">
        <Loading />
      </div>
    </GalleryLoading>
  )
}

GalleryPhotoLoading.displayName = 'GalleryPhotoLoading'

export default GalleryPhotoLoading
