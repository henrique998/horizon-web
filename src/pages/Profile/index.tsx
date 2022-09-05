import { CloudArrowUp } from 'phosphor-react'
import womanImg from '../../assets/woman.png'

import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <main>
      <ProfileContainer>
        <h1>My Profile</h1>

        <img src={womanImg} alt="woman" />

        <form>
          <input type="file" hidden id="photo" />

          <label htmlFor="photo">
            <CloudArrowUp size={20} weight={'bold'} />
            Upload
          </label>
        </form>
      </ProfileContainer>
    </main>
  )
}
