import { CloudArrowUp } from 'phosphor-react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'

import avatarIcon from '../../assets/avatarIcon.png'

import { ProfileContainer } from './styles'

export function Profile() {
  const { user } = useAuth()

  async function handleUpdateProfileImage(image: File) {
    const imageData = new FormData()

    imageData.append('avatar', image)

    await api.put(
      '/accounts/update/avatar',
      {
        avatar: imageData.get('avatar'),
      },
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      },
    )

    window.location.reload()
  }

  return (
    <main>
      <ProfileContainer>
        <h1>My Profile</h1>

        {user?.avatar_url ? (
          <img src={user?.avatar_url} alt={`${user?.name}'s avatar`} />
        ) : (
          <img src={avatarIcon} alt="placeholder avatar" />
        )}

        <form>
          <input
            type="file"
            hidden
            id="photo"
            onChange={(e) => handleUpdateProfileImage(e.target.files[0])}
          />

          <label htmlFor="photo">
            <CloudArrowUp size={20} weight={'bold'} />
            Upload
          </label>
        </form>
      </ProfileContainer>
    </main>
  )
}
