import { Link, useLocation, useMatch } from 'react-router-dom'
import { Text } from '@mantine/core'

interface CustomNavLinkProps {
  to: string
  children: React.ReactNode
}

export const CustomLink = ({ to, children }: CustomNavLinkProps) => {
  const location = useLocation()
  const match = useMatch({
    path: to,
    end: true,
  })
  let isActive = Boolean(match)

  if (to === '/') {
    isActive = location.pathname === '/' || location.pathname.startsWith('/vacancies')
  }

  return (
    <Link
      to={to}
      style={{
        position: 'relative',
        color: isActive ? 'black' : 'gray',
        fontWeight: 500,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Text>{children}</Text>
      {isActive && (
        <span
          style={{
            position: 'absolute',
            right: -10,
            bottom: 8,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#228be6',
          }}
        />
      )}
    </Link>
  )
}
