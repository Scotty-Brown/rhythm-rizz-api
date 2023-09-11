const poems = [
    {
        id: '1',
        title: 'Happy Day',
        author: 'Kapowies',
        poem: 'On a happy day, the sun does shine, Its golden rays, a gift divine. The world awakens with a cheerful song, As nature\'s beauty dances along.'
    },
    {
        id: '2',
        title: 'Sad Day',
        author: 'Kapowies',
        poem: 'On a somber day, the skies are gray, As tears of rain obscure the way. A heavy heart burdened with sorrow, Longs for a brighter, hopeful tomorrow.'
    },
    {
        id: '3',
        title: 'In Pursuit of Fortune',
        author: 'Dollar Dreamer',
        poem: `
        In the hustle and grind, we chase the gold,
        Counting bills, our dreams unfold,
        With pockets full and ambitions high,
        We follow the path where money lies.
        But amidst the riches and glittering gold,
        We find true wealth in stories untold.
        `
    },
    {
        id: '4',
        title: 'Whispers of the Final Exam',
        author: 'Exam Echo',
        poem: `
        Final assessments, a silent room,
        Where knowledge blooms, dispelling gloom,
        With questions posed, and answers sought,
        In the quietude of learning, lessons are taught.
        A test of our skills, the journey's end,
        With every challenge, wisdom we befriend.
        `
    },
    {
        id: '5',
        title: 'Vacation\'s Serene Embrace',
        author: 'Sandy Serenity',
        poem: `
        To a distant shore, we long to sail,
        A vacation's promise, a soothing tale,
        On sandy beaches, 'neath the sun's warm kiss,
        We find paradise in moments of bliss.
        With each wave's embrace and the ocean's roar,
        Our spirits rejuvenate on the seashore.
        `
    },
    {
        id: '6',
        title: 'Judy and the Study Hall Chronicles',
        author: 'Zoom Zephyr',
        poem: `
        In Judy's Zoom room, a diligent scholar,
        Study hall with friends, it couldn't be duller,
        "Time to leave," she says with a grin,
        In virtual halls, their studies within.
        With a click, they depart, the screen goes black,
        Judy's guidance, in learning, there's no lack.
        `
    },
    {
        id: '7',
        title: 'The First Symphony of Code',
        author: 'Code Crafter',
        poem: `
        As a software developer, the journey begins,
        Coding and debugging, learning the wins,
        The offer arrives, your first job in hand,
        With excitement and nerves, you take a stand.
        In the world of tech, you now take your place,
        A developer's journey, with challenges to embrace.
        `
    },
    {
        id: '8',
        title: "The Code Wizard's Tale",
        author: "Binary Bard",
        poem: `
        In lines of code, a world unfolds,
        Where programmers craft, with stories untold,
        Through algorithms and logic, they weave their spell,
        Creating software wonders, where ideas dwell.
        Turing's legacy, in every byte and bit,
        The School of Software, where minds are lit.
        `
    },
    {
        id: '9',
        title: "Mick Jeets and the Cat's Melody",
        author: "Harmony Harmony",
        poem: `
        Mick Jeets, with his guitar in hand,
        Strumming tunes, in a musical land,
        His cats by his side, a purring choir,
        Their melodies soar, higher and higher.
        Music and felines, a harmonious blend,
        In their world of rhythm, they transcend.
        `
    },
    {
        id: '10',
        title: "Slack's Attendance Blues",
        author: "Chatroom Chatter",
        poem: `
        In the digital realm, we gather 'round,
        Attendance threads, a common sound,
        With groans and sighs, we type our name,
        A ritual we play, it's always the same.
        Oh, Slack attendance, we dread your call,
        In the world of chat, the bane of all.
        `
    },
    {
        id: '11',
        title: "Nature's Serenade",
        author: "Emily Dickinson",
        poem: `
        Beneath the canopy of stars so bright,
        Nature's serenade on a tranquil night,
        Crickets chirping, a soft breeze's kiss,
        In the arms of wilderness, we find our bliss.
        Rustling leaves, a moonbeam's grace,
        Nature's poetry in this quiet space.
        `,
    },
    {
        id: '12',
        title: "Cityscape Symphony",
        author: "Langston Hughes",
        poem: `
        Skyscrapers rise in the urban sprawl,
        Neon lights, a city's call,
        Honking horns and bustling streets,
        In this concrete jungle, life repeats.
        Cityscape symphony, a cacophony so grand,
        The pulse of a metropolis, in every street and strand.
        `,
    },
    {
        id: '13',
        title: "Ode to Solitude",
        author: "Robert Frost",
        poem: `
        In solitude's embrace, I find my peace,
        A tranquil mind, a sweet release,
        Silence whispers, my heart's best friend,
        In solitude's depths, my soul can mend.
        Ode to solitude, a quiet reverie,
        Where the world outside is a distant memory.
        `,
    },
    {
        id: '14',
        title: "A Sailor's Dream",
        author: "Walt Whitman",
        poem: `
        Upon the open sea, I set my sail,
        A sailor's dream, a timeless tale,
        Waves like poetry, a dance so free,
        The endless horizon, my destiny.
        A sailor's heart, forever bound,
        To the ocean's depths, where dreams are found.
        `,
    },
    {
        id: '15',
        title: "Autumn's Whispers",
        author: "John Keats",
        poem: `
        In the embrace of autumn's gentle breeze,
        Whispers of leaves beneath the trees,
        Colors ablaze in nature's grandeur,
        A season's beauty, an artist's fervor.
        Autumn's secrets, in each leaf's descent,
        A timeless cycle, in moments spent.
        `,
    },
    {
        id: '16',
        title: "Chickens in the Sun",
        author: "Mary Oliver",
        poem: `
        Chickens roam in the morning sun,
        Clucking softly, having so much fun,
        Feathers ruffled, pecking the ground,
        In their world, serenity is found.
        A simple life, they proudly strut,
        Chickens in the sun, a peaceful, happy lot.
        `,
    },
    {
        id: '17',
        title: "Blossom of Self Growth",
        author: "Maya Angelou",
        poem: `
        Like a seed in the earth's embrace,
        Self-growth begins at a slow pace,
        Nurtured by trials, watered by tears,
        We bloom with wisdom over the years.
        The journey of self, a beautiful art,
        Blossoming from within, a brand-new start.
        `,
    },
    {
        id: '18',
        title: "The First Big Paycheck",
        author: "Langston Hughes",
        poem: `
        The first big paycheck, a dream come true,
        Hard work and dedication, the path we pursue,
        From humble beginnings to a wealthier day,
        The fruits of our labor, in every way.
        With a heart full of joy, and dreams so wide,
        The first big paycheck, a moment to ride.
        `,
    },
    {
        id: '19',
        title: "Ode to Reese's Peanut Butter Cups",
        author: "Shel Silverstein",
        poem: `
        Chocolate and peanut butter, a divine pair,
        In Reese's cups, a love beyond compare,
        Sweet and savory, a flavor so bold,
        In each bite, a story to be told.
        Ode to Reese's, a sweet delight,
        A candy that always feels just right.
        `,
    },
    {
        id: '20',
        title: "The Inspirational Duck",
        author: "Robert Frost",
        poem: `
        A duck upon the pond, serene and still,
        Against the current, it swims with skill,
        Through storms and waves, it perseveres,
        An inspirational duck, conquering fears.
        With feathers unruffled and spirit untamed,
        In its journey of life, it's forever acclaimed.
        `,
    },
    {
      id: '21',
      title: "Ode to Rhythm and Rizz",
      author: "Web Wondersmith",
      poem: `
        Rhythm and Rizz, a website so divine,
        Where music and art in harmony entwine,
        With vibrant colors and sounds so sweet,
        A digital canvas where creativity meets.
        We surf its pages, in awe we gaze,
        A cyber haven, where inspiration plays.
      `
    },
    {
      id: '22',
      title: "Whispers of the Wind",
      author: "Secret Siren",
      poem: `
        Beneath the silver moon's soft light,
        I listen to the wind at night,
        Its gentle voice, a lullaby,
        In nature's arms, I close my eyes,
        Whispers of the wind, so kind.
      `
    },
    {
      id: '23',
      title: "Sunrise Serenity",
      author: "Mystic Toad",
      poem: `
        As dawn breaks with golden grace,
        A brand new day, a fresh embrace,
        The world awakens, colors blend,
        Sunrise serenity, a message to send,
        Hope in every sun-kissed face.
      `
    },
    {
      id: '24',
      title: "Dancing Raindrops",
      author: "Jeremy Beremy",
      poem: `
        Raindrops tap upon my windowpane,
        Like tiny dancers in a gentle refrain,
        They waltz and twirl in rhythmic glee,
        Nature's ballet, for all to see,
        In each drop, a world to contain.
      `
    },
    {
      id: '25',
      title: "Eternal Stars",
      author: "Tinkie Winkie",
      poem: `
        Up above, the midnight sky,
        A canvas painted, stars on high,
        Each one a story, a distant fire,
        Their beauty, a cosmic choir,
        In their twinkle, dreams can't die.
      `
    },
    {
      id: '26',
      title: "Autumn's Embrace",
      author: "Hornet Hears",
      poem: `
        Leaves of amber, red, and gold,
        In the forest, a story to be told,
        Autumn's embrace, a fleeting kiss,
        Nature's art, in colors amiss,
        A season's beauty, a sight to behold.
      `
    },
    {
      id: '27',
      title: "Whispers of the Sea",
      author: "Olivia Orca",
      poem: `
        Beside the shore where waters meet,
        I find solace in the ocean's heartbeat,
        Each wave a tale, a timeless plea,
        Whispers of the sea, setting my spirit free,
        In its endless rhythm, my heart finds its beat.
      `
    }
]

module.exports = {poems}