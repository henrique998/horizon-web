import { Trash } from 'phosphor-react'
import womanImg from '../../../../assets/woman.png'

import { PhotosBoxContainer, PhotosContainer, PhotoBox } from './styles'

export function PhotosBox() {
  return (
    <section>
      <PhotosBoxContainer>
        <header>
          <h1>Last Photos</h1>
          <p>check out your photos below</p>
        </header>

        <PhotosContainer>
          <PhotoBox>
            <img src={womanImg} alt="woman" />

            <button type="button">
              <Trash size={18} />
              Delete
            </button>
          </PhotoBox>

          <PhotoBox>
            <img src={womanImg} alt="woman" />

            <button type="button">
              <Trash size={18} />
              Delete
            </button>
          </PhotoBox>

          <PhotoBox>
            <img src={womanImg} alt="woman" />

            <button type="button">
              <Trash size={18} />
              Delete
            </button>
          </PhotoBox>
        </PhotosContainer>
      </PhotosBoxContainer>
    </section>
  )
}
