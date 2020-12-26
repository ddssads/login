function verification(email, password) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
  let usersMap = {}
  users.forEach(user => {
    usersMap[user.email] = user
  })
  if (!usersMap[email]) {
    return false
  } else {
    if (password === usersMap[email].password) {
      return usersMap[email]
    } else {
      return false
    }
  }
}

module.exports = verification