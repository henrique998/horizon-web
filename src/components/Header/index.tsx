import { NavLink } from './NavLink'

import horizonLogo from '../../assets/logoWithText.svg'
import avatarIcon from '../../assets/avatarIcon.png'

import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  Menu,
  AvatarWrapper,
} from './styles'
import { Power } from 'phosphor-react'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { user, handleSignOut } = useAuth()
  const [isSignOutButtonVisible, setIsSignOutButtonVisible] = useState(false)

  function handleChangeSignOutButtonVisibility() {
    setIsSignOutButtonVisible(!isSignOutButtonVisible)
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoWrapper to="/home">
          <img src={horizonLogo} alt="" />
        </LogoWrapper>

        <Menu>
          <ul>
            <li>
              <NavLink path="/home" label="Home" />
            </li>
            <li>
              <NavLink path="/upload" label="Upload" />
            </li>
            <li>
              <NavLink path="/profile" label="Profile" />
            </li>
          </ul>
        </Menu>

        <AvatarWrapper>
          <span>
            Hello, <strong>{user?.name}</strong>
          </span>

          <div>
            {user.avatar_url ? (
              <img
                src={user?.avatar_url}
                alt={`${user?.name}'s photo`}
                onClick={handleChangeSignOutButtonVisibility}
              />
            ) : (
              <img
                src={avatarIcon}
                alt=""
                onClick={handleChangeSignOutButtonVisibility}
              />
            )}

            {isSignOutButtonVisible && (
              <button type="button" onClick={handleSignOut}>
                <Power size={20} />
                sign out
              </button>
            )}
          </div>
        </AvatarWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
