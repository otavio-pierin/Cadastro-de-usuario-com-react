import './style.css'
import Trash from '../../assets/iconLixo.png'

function Home() {
  const users = [{
    id: '3254213514',
    name: 'Otavio',
    age: 18,
    email: 'otavio@email.com'
  }, {
    id: '3254963852',
    name: 'Maria',
    age: 89,
    email: 'maria@email.com'
  },
  {
    id: '8523697',
    name: 'Paulo',
    age: 75,
    email: 'paulo@email.com'
  }]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input name='nome' type='text' placeholder='Digite seu nome' />
        <input name='idade' type='number' placeholder='Digite sua idade'/>
        <input name='email' type='email' placeholder='Digite seu email'/>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>

      ))}


    </div>
  )
}

export default Home
