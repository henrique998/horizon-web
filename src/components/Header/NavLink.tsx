import { useLocation } from 'react-router-dom'
import { NavLinkContainer } from './styles'

interface NavLinkProps {
  path: string
  label: string
}

export function NavLink({ path, label }: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <NavLinkContainer to={path} isActive={pathname === path}>
      <span>{label}</span>
    </NavLinkContainer>
  )
}
