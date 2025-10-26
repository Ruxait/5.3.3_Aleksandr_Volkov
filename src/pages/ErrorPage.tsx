import { Button, Container, Group, Image, Stack, Text, Title, Paper } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import catIcon from '../assets/sad-cat 1.png'

export function ErrorPage() {
  const navigate = useNavigate()
  const goHome = () => navigate('/', {replace: true})
  return (
    <Container size="sm" py="xl">
      <Paper shadow="sm" radius="lg" p="xl" withBorder>
        <Stack align="center" gap="md">
          <Group justify="space-between" w="100%">
            <div>
              <Title order={2}>Упс! Такой страницы<br /> не существует</Title>
              <Text size="md" mt='5px'>
                Давайте перейдём к началу.
              </Text>
            </div>
            <Button onClick={goHome} variant="filled" color="blue" radius="md">
              На главную
            </Button>
          </Group>
          <Image
            src={catIcon}
            alt="Ошибка 404 — кот"
            radius="md"
            mt="md"
            w="100%"
            fit="cover"
          />
        </Stack>
      </Paper>
    </Container>
  )
}
