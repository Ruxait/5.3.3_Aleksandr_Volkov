import { Link, useMatch } from 'react-router-dom'
import { Text } from '@mantine/core'

interface CustomNavLinkProps {
  to: string
  children: React.ReactNode
}

export const CustomLink = ({ to, children }: CustomNavLinkProps) => {
  const match = useMatch(to)

  return (
    <Link
      to={to}
      style={{
        position: 'relative',
        color: match ? 'black' : 'gray',
        fontWeight: 500,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Text>{children}</Text>
      {match && (
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
