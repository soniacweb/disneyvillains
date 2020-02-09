// This seeds.js is really a self contained program we can run with
// a script we defined in package.json: `npm run seed`

// It's job is to give our db a bunch of data before we start developing
// It connects to mongoose, inserts data, then closes the connection.
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Villain = require('../models/Villain')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        // Insert data
        return User.create([{
          username: 'Sonia',
          email: 'sonia.choudhury@hotmail.co.uk',
          password: 'jelly',
          passwordConfirmation: 'jelly'
        }])
      })
      .then(users => {
        // Insert data
        console.log(`${'🙍‍♀️'.repeat(users.length)} users created`)
        return Villain.create([
          {
            name: 'Lady Tremaine',
            movie: 'Cinderella',
            year: '1950',
            image: 'https://i.imgur.com/QnXcplH.jpg',
            summary: 'As Cinderella’s Wicked Stepmother, Lady Tremaine, is one of the mildest on the list. She didn’t kill or try to kill Cinderella. She was as a social climber, using her two ugly daughters to try and nab a royal title. Not a nice lady, but not the worst. As for Cinderella’s evil step-sisters; Drusilla and Anastasia are two bumbling, vain nitwits who are minimally useful as sidekicks. She gets some clever help from her wonderfully wickedly minded kitty, Lucifer, who tries to make Cinderella\'s rodent friends lunch. Who names their cat Lucifer? In the end, Lady Tremaine is the brains and brawn of the operation and gets bonus points for taking the lady of the house, Cinderella, and turning her into a slave.',
            video: 'https://youtu.be/_TGwWVt4gss',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'The Ugly Step-sisters',
            movie: 'Cinderella',
            year: '2015',
            image: 'https://i.imgur.com/pTcg1kv.jpg',
            summary: 'Cinderella’s unpleasant step-sisters;,Drusilla and Anastasia are two bumbling, vain nitwits who are minimally useful as sidekicks and deserve a thorough shoutout. She gets some clever help from her wonderfully wickedly minded kitty, Lucifer, who tries to make Cinderella\'s rodent friends lunch. Who names their cat Lucifer? In the end, Lady Tremaine is the brains and brawn of the operation and gets bonus points for taking the lady of the house, Cinderella, and turning her into a slave. A live action adaptation was released back in 2015- and the ladies aren\'t ugly, but certainly unpleasant.',
            video: 'https://youtu.be/BztdIbGlNfo',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'The Queen of Hearts',
            movie: 'Alice in Wonderland',
            year: '1951',
            image: 'https://i.imgur.com/MELsdN5.jpg',
            summary: 'Anyone who’s main line is “Off with their head!” deserves a place on the list of villains. She wants to behead just about everyone when she loses her temper, which is more often than not. She\'s not interested in reason or kindness nor is she interested in being fair. All she seems to care about is pushing people around and screaming orders to behead anyone who doesn\'t follow her always changing rules. There doesn’t seem to be any reason for her murderous streak, only in Alice’s world queens are insane. I\'m not sure of it\'s social commentary of our time, but singers like Morrissey would be inclined to agree and then crack a faint smile, because that\'s all they could bear. As for the Queen of Hearts, being insane is definitely a bonus. She’d be higher on the list, but she comes across as comical and all the evil she does is easy turned around by her sidekick, the gentle King.',
            video: 'https://youtu.be/dyVXM2gwKFA',
            dangerRating: 4,
            user: users[0]
          },
          {
            name: 'Gaston',
            movie: 'Beauty and the Beast',
            year: '1991',
            image: 'https://i.imgur.com/ncOqq5c.jpg?1',
            summary: 'Gaston\'s a rude, vain, shallow hunter who doesn’t like taking ‘no’ for an answer and could easily be #metoo\'d at any moment. How bad is he? Gaston drinks, smokes and gets into bar fights, which is a whole lot of badness in a Disney film. It\'s almost cause for a parental advisory. For a villain, it’s a nice little bonus. Worst of all is his jealous streak, which is when he goes for the jugular. He tried to have Maurice, Belle’s father, committed to an insane asylum unless she married him. Talk about being unable to take rejection well. In the end he rallied a mob of villagers to kill Beast, eventually stabbing Belle\’s love in the back. He is a nasty one indeed.',
            video: 'https://youtu.be/nv31pExDX7w',
            dangerRating: 1,
            user: users[0]
          },
          {
            name: 'Hades',
            movie: 'Hercules',
            year: 1997,
            image: 'https://i.imgur.com/P9MQ2lk.jpg?',
            summary: 'He may be funny, but don\'t be fooled. Hades is a killer, but considering he\'s Hades, the ruler of the underworld, you shouldn’t expect anything less. So why is he so low on the list? It hurts to have Pain (voiced by Bobcat Goldthwait) and Panic (voiced by Matt Frewer) as your sidekicks. They are pretty inept and that makes Hades look pretty bad considering he doesn’t seem to know what the hell is going on half the time. In the end, he uses Megara to do his dirty work. Why? He’s jealous of his big brother, Zeus, and wants to be in charge. Not a good sign for someone so powerful. But, he is the ruler of the underworld and that gives him bonus points.',
            video: 'https://youtu.be/GWxf8Hb-Xis',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Jafar',
            movie: 'Aladdin',
            year: 1992,
            image: 'https://i.imgur.com/6Vh9QnH.jpg?1',
            summary: 'Like other villains before him, Jafar craves power and will do just about anything for it. He tried to marry Jasmine, hypnotize the sultan and then uses magic to become all powerful. At least he\'s goal oriented. He does try to kill Aladdin and Jasmine, but like every Disney bad guy before and after, he fails. He did send a man into the Cave of Wonders, knowing full well the thief wasn’t the “Diamond in the Rough”, so he does kill someone. What was that theif’s name? Yeah, I don’t know either, but at least the bad intentions were there. Jafar has a pretty awesome sidekick in Iago (voiced by Gilbert Gottfried), who has a pretty bad attitude and nasty disposition for such colorful bird.',
            video: 'https://youtu.be/PyRMmoKAMsw',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'Cruella De Vil',
            movie: 'One Hundred and One Dalmatians',
            year: 1961,
            image: 'https://i.imgur.com/sg2hfSD.jpg',
            summary: 'She’s a nasty piece of work throughout the movie and hunts down puppies like the predator she is. I guess when a woman loves fur that much there’s not much she won’t do for it. Her two sidekicks, Jasper and Horace Badun, are bumbling fools, but you don’t have to be smart to kidnap then skin puppies. In the end, she doesn’t get her puppy coat, but Cruella gets major bonus points for this line alone: “Poison them. Drown them. Bash them in the head. You got any chloroform?” Are you kidding me? Did she really say that? The woman has no heart at all. Of course, that’s why in the movie Roger sings, “The world was such a wholesome place until Cruella…Cruella…De Vil”.',
            video: 'https://youtu.be/IPhzSatSNQc',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'The Blind Witch',
            movie: 'Hansel and Gretel',
            year: 1812,
            image: 'https://i.imgur.com/nPKMx5G.jpg',
            summary: 'The blind witch first appeared in the Hansel and Gretel story to ward off children from wondering into the dark forests on their own. The story was propelled into the hall of fame by the Grimm brothers, where Hansel and his sister, Gretel, are a young brother and sister kidnapped by a cannibalistic witch living in a forest in a house constructed of cake, confectionery, candy, and many more treats- designed to lure young children! Scary thought, right? She captures them and attempts to fatten them up while they\'re trapped in her child-cages. Thankfully, the two children escape with their lives by outwitting her and give her a taste of her own medicine by throwing her into her own oven. A happy ending!',
            video: 'https://youtu.be/usD-HtuzaGs',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Maleficent',
            movie: 'Sleeping Beauty',
            year: 1959,
            image: 'https://i.imgur.com/IIh7BW2.jpg?1',
            summary: 'She\'s a fairy with an axe to grind. Maleficent gives Aurora the gift of death on her sixteenth birthday. Nice present, huh? Her gift is thwarted by Merryweather, one of the three good fairies. Why? Maybe the King and Queen should have been more considerate and invited her to their daughter’s christening. That or she’s evil to the bone and not afraid to show it. She also has the best sidekick of all time: Diablo, her Raven familiar, but gets brought down a little bit by having bumbling goons who search for an infant when the princess is already a teen. She gets extra bonus points for mind screwing the King and Queen. They get to spend sixteen years tormented about Aurora’s downfall, while she waits around and Goths up her castle. She’s my personal favorite, but there are other Disney Villains that top the scale.ey bad guy before and after, he fails. He did send a man into the Cave of Wonders, knowing full well the thief wasn’t the “Diamond in the Rough”, so he does kill someone. What was that theif’s name? Yeah, I don’t know either, but at least the bad intentions were there. Jafar has a pretty awesome sidekick in Iago (voiced by Gilbert Gottfried), who has a pretty bad attitude and nasty disposition for such colorful bird.',
            video: 'https://youtu.be/n0OFH4xpPr4',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Rumplestiltskin',
            movie: 'Rumplestiltskin',
            year: 1889,
            image: 'https://i.imgur.com/N6siLMi.png?1',
            summary: 'This is a villain belongining in a really dark tale of a desperate Miller\'s daughter, bargaining with a manipulative imp with killer negotiating skills. After negotiating for her first born in exchange for her being able to weave gold for the King (as you do), the one caveat in order to get out of the deal, is to guess his name.',
            video: 'https://youtu.be/07i_o8YwJSs',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Doctor Facilier',
            movie: 'The Princess and the Frog ',
            year: 2009,
            image: 'https://i.imgur.com/B7Q4v3G.png',
            summary: 'He’s a voodoo man and he’s only too happy to use black magic to get his way. Anyone who’s known as The Shadow Man is one to be feared. He gets major kudos for being one of only two villains who actually succeed at killing a major character (the loveable Cajun firefly, Ray); a rare feat in the world of Disney. He gets bonus points for using voodoo, tapping into demonic forces and controlling shadows. Now that’s a bad guy doing his best to be the worst.',
            video: 'https://youtu.be/hFZQuVuUDh8',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'The Evil Queen',
            movie: 'Snow White and the Seven Dwarves ',
            year: 1937,
            image: 'https://i.imgur.com/QHUFPvt.jpg',
            summary: 'She sends her servant to kill Snow White then bring the girl’s heart back in a box. There’s a whole lot of ugliness behind that beautiful exterior. Her only companion is Magic Mirror, who is actually a slave and only able to answer questions when asked. This makes him the perfect sidekick since his lack of humor and honest approach make him pretty darn creepy. If you\'ve ever put on the DVD, he eerily talks until you start the movie. That alone is worth the price of having to listen to Snow Whit\'s shrill voice throughout the movie. But the Evil Queen is only interested in one thing: how beautiful she is. In the true traditions of a pageant queen, when you\’re the \‘fairest in the land\’ you will do whatever it takes to keep that title. This includes tricking the newest pretty girl into eating a poisonous apple to kill her. So what does The Evil Queen do when she figures out Snow White will not die, but only go into a deep sleep? She cackles, \“The dwarves will think she\'s dead. She\'ll be buried alive!” She’s not called The Evil Queen for nothing.',
            video: 'https://youtu.be/mXxT9h78OkE',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'The Snow Queen',
            movie: 'The Snow Queen/Snow White and the Seven Dwarves ',
            year: 1845,
            image: 'https://i.imgur.com/8SzOoDf.jpg',
            summary: 'The Snow Queen, is an original fairytale written by Danish author Hans Christian Andersen. The Snow Queen is a complex one! She\'s has had several incarnations on the big and small screen- some of which have had her character fleshedo ut with a painfil, often tragic backtsory. More recently we\'ve seen Emily Blunt take on the mantel in the sequal to Snow White and the Huntman.',
            video: 'https://youtu.be/P_x4U3tRfoA',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Scar',
            movie: 'The Lion King',
            year: 1994,
            image: 'https://i.imgur.com/Wd8beqs.jpg?1',
            summary: 'Everything about this lion is dastardly and wicked. He wants to be the King and nothing, not his older brother or his nephew will stop him from that. Being the big thinker that he is, killing two birds (or lions as the case may be) with one stone (or herd of wildebeast) was the way to go. He was successful in killing his older brother, the great Mustafa, and sent is sidekicks, Shenzi (voices by Whoopi Goldberg), Banzai (voiced by Cheech Marin and Ed to kill the only remaining heir. The crazy hyenas failed to kill Simba, but they gave it an honest effort. In fact, they are so nasty and vicious they eventually kill him. You are the company you keep. Dirty and deadly. Be Prepared indeed.',
            video: 'https://youtu.be/T98RiXJy3HM',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Mother Gothel',
            movie: 'Repunzel',
            year: 2011,
            image: 'https://i.imgur.com/413I6ZU.jpg',
            summary: 'Just your average witch who likes to kidnap babies and keep them locked away in a tower, away from the world to preserve her youth. No big deal.',
            video: 'https://youtu.be/ZolwEAe9dcE',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Ursula',
            movie: 'The Little Mermaid',
            year: 1989,
            image: 'https://i.imgur.com/oJ3wNf6.jpg',
            summary: 'Ursula is a villainous sea witch who offers our favourate mermaid princess, Ariel, the opportunity to explore the land above the sea in exchange to trade her voice for a pair of human legs. Fair trade you might think at first, right? At first we see Ursula appearing to be providing the character with an opportunity to become human by temporarily transforming her into one so that she may earn the love of Prince Eric within three days. But! Like in true Disney-villain fashion, there\'s a plot twist! Ursula is based on the sea witch character who appears in the fairy tale "The Little Mermaid" by Hans Christian Andersen. However, her minor role was greatly expanded into that of a much more prominent villain for the 2021 live-action film adaptation.',
            video: 'https://youtu.be/mpXoSFTEiRk',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Shere Khan',
            movie: 'The Jungle Book',
            year: 1967,
            image: 'https://i.imgur.com/9eqcgYC.jpg?1',
            summary: 'The reason our protagonist, Mowgli, is orphaned, and raised by a caring wolf pack, Shere Khan is a real treat in the jungle. When he\'s not terrorising the jungle\'s inhabitants, the Bengal tiger is busy generally hating humans and viewing them all as a threat. A live action incarnation was recently portrayed by Idris Elba.',
            video: 'https://youtu.be/OD3CLzPER34',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'Captain Hook',
            movie: 'Peter Pan',
            year: 1904,
            image: 'https://i.imgur.com/1p9kzHh.png?2',
            summary: 'Captain James Hook is a fictional character, the main antagonist of J. M. Barrie\'s play Peter Pan; or, the Boy Who Wouldn\'t Grow Up and its various adaptations, in which he is Peter Pan\'s archenemy and a general troll to the Lost Boys. The character is a pirate captain of the brig Jolly Roger. His two principal fears are the sight of his own blood -supposedly an unnatural colour- and the crocodile who pursues him after eating the hand cut off by Pan. An iron hook replaced his severed hand, which gave the pirate his name.',
            video: 'https://youtu.be/3CXio_3DKCE',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'Morgana Le Fay',
            movie: 'King Arthur and the Legends of Camelot',
            year: 1800,
            image: 'https://i.imgur.com/NrJ242z.jpg',
            summary: 'Her character may have been rooted in Welsh mythology as well as other earlier myths and historical figures, but Morgan Le Fay has been a prominant figure in the Arthurian legends. A powerful enchantress, Morgana is known by many variants of the same name. Early appearances of Morgana don\'t elaborate her character beyond her role as a goddess, a fay, a witch, or a sorceress, generally benevolent and related to King Arthur as his magical saviour and protector. Her prominence increased over time, as did her moral ambivalence, and in some texts there is an evolutionary transformation of her to an antagonist, particularly as portrayed in cyclical prose such as the Lancelot-Grail and the Post-Vulgate Cycle. A significant aspect in many of Morgana\'s medieval and later iterations is the unpredictable duality of her nature, with potential for both good and evil.',
            video: 'https://youtu.be/HF-9pSefki8',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'Magic Mirror on the Wall',
            movie: 'Snow White and the Seven Dwarves',
            year: 1916,
            image: 'https://i.imgur.com/fwx0R6b.jpg',
            summary: 'Not much is known about the The Magic Mirror or it\'s origin. It\'s a mystical object that is featured in the story of Snow White, depicted as either a hand mirror or a wall-mounted mirror. It\'s used by the Evil Queen in order to find out who is the "fairest of them all". Each time the Evil Queen asks this question, the mirror states "My Queen, you are the fairest of them all", up until that precious year Snow White comes of age and blossoms into a beautiful creature- it states that Snow White is in fact more fair. We know the rest. Those famous last words, unleash an unpleasant series of events, resulting in the Evil Queen hiring a huntsman to kill poor Snow White in the contemporary version of the fairy tale.',
            video: 'https://youtu.be/FHDq1ehz_cg',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'The Sanderson Sisters',
            movie: 'Hocus Pocus',
            year: 1993,
            image: 'https://i.imgur.com/zd495vC.jpg?1',
            summary: 'The Sanderson sisters, Winifred, Sarah and Mary- are ones to watch out for on All Hallows Eve! If it\'s not absorbing youth from the young to regain their own, or transforming innocent boys into immortal black cats, then it\'s trying to absorb every single child\'s soul in Salem.. note to self, don\'t light black candles in suspicous looking cottages a day before Halloween..',
            video: 'https://youtu.be/gwpaA5HGo9k',
            dangerRating: 3,
            user: users[0]
          },
          {
            name: 'Big Bad Wolf',
            movie: 'Little Red Riding Hood',
            year: 1916,
            image: 'https://i.imgur.com/8ilE2ZR.png',
            summary: 'Who\'s afraid of the big bad wolf? The Big Bad Wolf is a fictional wolf appearing in several cautionary tales that include some of Aesop\'s Fables (c. 600 BC) and Grimms\' Fairy Tales. Versions of this character have appeared in numerous works, and it has become a generic archetype of a menacing predatory antagonist for Granny and Red Riding Hood. As for the protagonist herself, "Little Red Riding Hood" is of European origins and can be traced back to the 10th century to several European folk tales, including one from Italy called The False Grandmother, later written among others by Italo Calvino in the Italian Folktales collection; the best known versions were written by Charles Perrault and the Brothers Grimm. With several incarnations in plays and on the big screen, the big bad wolf is definately one to watch out for! He\'s had a big presence in the legends of red riding hood and in popular culture. A more recent portrayal was made by none other than Johnny Depp in Disney\'s \'Into the Woods\' back in 2014',
            video: 'https://youtu.be/UO3t4xRzLGM',
            dangerRating: 5,
            user: users[0]
          },
          {
            name: 'The Beast',
            movie: 'Beauty and the Beast',
            year: 1991,
            image: 'https://i.imgur.com/NQN8mRV.jpg?2',
            summary: 'The 30th Disney animated feature film and the third released during the Disney Renaissance period, it is based on the French fairy tale of the same name by Jeanne-Marie Leprince de Beaumont (who was uncredited in the English version but credited in the French version) a prince who is magically transformed into a monster and his servants into household objects as punishment for his arrogance, and Belle a prince who is magically transformed into a monster and his servants into household objects as punishment for his arrogance, and Belle. Not your run of the mill villain, but required an honourable mention for being an absolute plum in a former life.',
            video: 'https://youtu.be/XHQXU-PDlm8',
            dangerRating: 4,
            user: users[0]
          },
          {
            name: 'Thanos',
            movie: 'Avengers Infinity War',
            year: 2018,
            image: 'https://i.imgur.com/XSYbxj3.jpg',
            summary: 'Since Disney have aquired Marvel, we thought Thanos (also known as the Mad Titan,) deserved a dishonourable mention. Thanos is a fictional supervillain appearing in American comic books published by Marvel Comics. Thanos is one of the most powerful villains in the Marvel Universe and has clashed with many heroes including the Avengers, the Guardians of the Galaxy, the Fantastic Four, and the X-Men. He is best known in the Marvel Cinematic Universe for detroying half of all living things.',
            video: 'https://youtu.be/osSJhXruEzU',
            dangerRating: 4,
            user: users[0]
          }
        ]
        )
      })
      .then(villains => console.log(`${villains.length} Villain created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)