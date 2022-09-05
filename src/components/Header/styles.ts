import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.375rem;

  border-bottom: 1px solid ${(props) => props.theme['base-border']};
`

export const HeaderWrapper = styled.div`
  max-width: 70rem;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled(Link)`
  img {
    width: 7.625rem;
  }
`

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const AvatarWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 500;

    strong {
      font-weight: 600;
      color: ${(props) => props.theme['base-brand-600']};
    }
  }

  > div {
    img {
      display: block;
      border: 3px solid ${(props) => props.theme['base-brand-600']};

      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;

      cursor: pointer;
    }

    > button {
      position: absolute;
      top: 3rem;
      right: -2.5rem;

      width: 130px;
      height: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;

      background-color: #fff;
      border-radius: 6px;

      box-shadow: 0px 0px 18px 3px ${(props) => props.theme['base-border']};

      font-size: 1rem;

      color: ${(props) => props.theme['base-dropzone-border']};
    }
  }
`

interface NavLinkContainerProps {
  isActive: boolean
}

export const NavLinkContainer = styled(Link)<NavLinkContainerProps>`
  span {
    color: ${(props) =>
      props.isActive ? props.theme['base-brand-900'] : props.theme.gray};
    font-weight: ${(props) => (props.isActive ? '500' : '400')};

    &:hover {
      ${(props) =>
        !props.isActive &&
        css`
          color: ${(props) => props.theme['base-brand-600']};
          transition: 0.2s;
        `}
    }
  }
`
