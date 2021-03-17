let app = require('express')()

app.get('/', (request, response) => {
    response.send('Salut, Tu es à racine')
})
app.get('/demo', (requete, response) =>{
    response.send('Salut, tu es sur la page Demo')
})
app.listen(8080)