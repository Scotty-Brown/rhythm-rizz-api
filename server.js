const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.locals.title = 'Rhythm and Rizz'
app.locals.poems = [
    {
    id: '1', 
    title: 'Happy Day', 
    author: 'Kapowies', 
    poem: 'On a happy day, the sun does shine, Its golden rays, a gift divine.The world awakens with a cheerful song,As nature\'s beauty dances along.'
}, {
    id: '2', 
    title: 'Sad Day', 
    author: 'Kapowies', 
    poem: 'On a somber day, the skies are gray, As tears of rain obscure the way. A heavy heart burdened with sorrow, Longs for a brighter, hopeful tomorrow.'
}
]

app.get('/api/v1/poems', (req, res) => {
    const poems = app.locals.poems
    res.status(200).json({ poems })
})

app.get('/api/v1/poems/:id', (req,res)=> {
    const poem = app.locals.poems.find(poem=>poem.id===req.params.id)
    if(!poem){
     return res.status(404).json({error:'You yearn for a rhyme but your request ran out of time. please return home.'})
    } else {
        res.status(200).json({poem})
    }
})

app.post('/api/v1/poems', (request, response) => {
    const id = Date.now()
    const {title, author, poem} = request.body

    if(!title){
        return response.status(404).json({error:'Please add a title.'})
    } else if (!author) {
        return response.status(404).json({error:'Please add an author.'})
    } else if (!poem) {
        return response.status(404).json({error:'Please add a poem.'})
    } else {
            app.locals.poems.push({id, title, author, poem})
            response.status(201).json({id, title, author, poem})
    }
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  })