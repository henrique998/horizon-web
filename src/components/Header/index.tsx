import { NavLink } from './NavLink'

import horizonLogo from '../../assets/logoWithText.svg'
import womanImg from '../../assets/woman.png'

import {
  HeaderContainer,
  HeaderWrapper,
  LogoWrapper,
  Menu,
  AvatarWrapper,
} from './styles'
import { Power } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
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
            Hello, <strong>sofia</strong>
          </span>

          <div>
            <img
              src={womanImg}
              alt="woman"
              onClick={handleChangeSignOutButtonVisibility}
            />

            {isSignOutButtonVisible && (
              <button type="button">
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
