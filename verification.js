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
  const errorMessage = 'Email or Password is not correct'
  const correctMessage = 'Welcom Back,'
  let usersMap = {}
  users.forEach(user => {
    usersMap[user.email] = user
  })
  if (!usersMap[email]) {
    return errorMessage
  } else {
    if (password === usersMap[email].password) {
      return `${correctMessage} ${usersMap[email].firstName}！`
    } else {
      return errorMessage
    }
  }
}

module.exports = verification