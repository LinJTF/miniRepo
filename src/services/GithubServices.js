import axios from 'axios'


const GithubServices = { 
    getRepositories: async (name) => {
        const response = await axios.get(`https://api.github.com/users/${name}/repos`)
        return response
    }
  }

export default GithubServices