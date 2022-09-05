import { ImageSquare } from 'phosphor-react'
import noImgIlustration from '../../../../assets/noImageIlustration.svg'

import { Button, EmptyBoxContainer } from './styles'

export function EmptyBox() {
  return (
    <section>
      <EmptyBoxContainer>
        <img src={noImgIlustration} alt="empty image ilustration" />

        <p>You haven&apos;t shared any photos yet</p>

        <Button to="/upload">
          <ImageSquare size={24} weight={'bold'} />
          Publish
        </Button>
      </EmptyBoxContainer>
    </section>
  )
}
