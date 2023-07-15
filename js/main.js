var arr = [
    {
        head: "“Be yourself; everyone else is already taken.”",
        body: "Oscar Wilde",
    },
    {
        head: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        body: "Marilyn Monroe",
    },
    {
        head: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        body: "Albert Einstein",
    },
    {
        head: "“So many books, so little time.”",
        body: "Frank Zappa",
    },
    {
        head: "“A room without books is like a body without a soul.”",
        body: "Marcus Tullius Cicero",
    },
    {
        head: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        body: "Bernard M. Baruch",
    },
    {
        head: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        body: "William W. Purkey",
    },
    {
        head: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        body: "Dr. Seuss",
    },
    {
        head: "“You only live once, but if you do it right, once is enough.”",
        body: "Mae West",
    },
    {
        head: "“Be the change that you wish to see in the world.”",
        body: "Mahatma Gandhi",
    },

];
var randomItem=1,temp=0;
function random() {
    randomItem = Math.floor(Math.random() * arr.length);
    if (randomItem==temp){
        randomItem++;
        if(randomItem>arr.length-1)
        {
            randomItem=0;
        }
    }
    document.getElementById('demo').innerHTML = arr[randomItem].head;
    document.getElementById('demo2').innerHTML = arr[randomItem].body;
    temp=randomItem;
}
