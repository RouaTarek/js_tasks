
var Qoutes=[
        {
            text:'“Be yourself; everyone else is already taken.”',
            auther:'― Oscar Wilde'
        },
        {
            text:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            auther:'― Marilyn Monroe'
        },
        {
            text:"“So many books, so little time.”",
            auther:'― Frank Zappa'
        },
        {
            text:"“A room without books is like a body without a soul.”",
            auther:'― Marcus Tullius Cicero'
        },
        {
            text:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            auther:'― Bernard M. Baruch'
        },
        {
            text:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            auther:'― Albert Einstein'
        },
        {
            text:"“In three words I can sum up everything I've learned about life: it goes on.”",
            auther:"― Robert Frost"
        },
        {
            text:"“Be the change that you wish to see in the world.”",
            auther:"― Mahatma Gandhi"
        },
        {
            text:"“You only live once, but if you do it right, once is enough.”",
            auther:"― Mae West"
        },
        {
            text:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            auther:"― Dr. Seuss"
        },
        {
            text:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
            auther:"― Ralph Waldo Emerson"
        },
        {
            text:"“Insanity is doing the same thing, over and over again, but expecting different results.”",
            auther:"― Narcotics Anonymous"
        },
        {
            text:"“It is better to be hated for what you are than to be loved for what you are not.”",
            auther:"― Andre Gide, Autumn Leaves "
        },
        {
            text:"“We accept the love we think we deserve.”",
            auther:"― Stephen Chbosky, The Perks of Being a Wallflower"
        },
        {
            text:"“Without music, life would be a mistake.”",
            auther:"― Friedrich Nietzsche, Twilight of the Idols"
        }
    ];
var usedIndexes = [];

function selectRandomQuote() {
    if (usedIndexes.length === Qoutes.length) {
        usedIndexes = []; 
    }
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * Qoutes.length);
    } while (usedIndexes.includes(randomIndex));
    usedIndexes.push(randomIndex);
    return Qoutes[randomIndex];
}

function getQoute(){
    var selectedQoute =selectRandomQuote();
    console.log(usedIndexes);
    document.getElementById('qoute').innerHTML = selectedQoute.text;
    document.getElementById('auther').innerHTML = selectedQoute.auther; 
};

