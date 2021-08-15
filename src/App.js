import React, { useState } from 'react'
import GithubServices from './services/GithubServices'
import { Container } from './styled/Global'
import Header from './components/Header'


function App() {
  const [user, setUser] = useState('')
  const getRepositories = async () => {
    const response = await GithubServices.getRepositories(user)
    console.log(response.data)
  }


  return (
    <Container>
      <Header/>
      <input value={user} onChange={(event) => setUser(event.target.value)} type="text" placeholder="usuario"/>
      <button onClick={() => getRepositories()} type="button">Enviar</button>
    </Container>

  );
}

export default App;
