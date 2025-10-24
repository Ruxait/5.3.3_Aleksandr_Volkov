import { Container, Title, Text, Card } from '@mantine/core'

export const AboutPage = () => {
  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <Card
        shadow="sm"
        radius="lg"
        withBorder
        mt='30px'
        p="lg"
        style={{ backgroundColor: 'white', maxWidth: 900, width: '100%' }}>
        <Title order={2} mb="md">
          Волков Александр
        </Title>
        <Text size="md">
          Привет! Меня зовут Александр, я frontend-разработчик, увлечённый созданием удобных и продуманных интерфейсов.
          Люблю React, Redux и чистый, структурированный код.
        </Text>
      </Card>
    </Container>
  )
}
