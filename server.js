const express = require('express')
const app = express()
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.locals.title = 'Rhythm and Rizz'
app.locals.poems = [
    {
    id: '1', 
    title: 'Happy Day', 
    Author: 'Kapowies', 
    Poem: 'On a happy day, the sun does shine, Its golden rays, a gift divine.The world awakens with a cheerful song,As nature\'s beauty dances along.'
}, {
    id: '2', 
    title: 'Sad Day', 
    Author: 'Kapowies', 
    Poem: 'On a somber day, the skies are gray, As tears of rain obscure the way. A heavy heart burdened with sorrow, Longs for a brighter, hopeful tomorrow.'
}
]



app.get('/api/v1/poems', (req, res) => {
    const poems = app.locals.poems
    res.json({ poems })
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  });