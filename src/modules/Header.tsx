import { Group, Text, Container } from '@mantine/core'
import hhIcon from '../assets/hh.svg'
import { CustomLink } from '../components/CustomLink'
import { useMatch } from 'react-router-dom'
import UserIcon from '../assets/user-circle.svg?react'

export const Header = () => {
  const match = useMatch('about')
  return (
    <header
      style={{
        borderBottom: '1px solid #e9ecef',
        backgroundColor: 'white',
      }}>
      <Container
        size="lg"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
          position: 'relative',
        }}>
        <Group gap="xs">
          <img src={hhIcon} alt="logo" width={28} height={28} />
          <Text fw={700} size="lg" style={{ color: 'black', cursor: 'pointer' }}>
            .FrontEnd
          </Text>
        </Group>
        <Group
          gap="xl"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
          <CustomLink to="/">Вакансии FE</CustomLink>
          <CustomLink to="about">
            <div style={{ display: 'flex', gap: '5px' }}>
              <UserIcon width={24} height={24} color={match ? 'black' : 'gray'} />
              Обо мне
            </div>
          </CustomLink>
        </Group>
      </Container>
    </header>
  )
}
