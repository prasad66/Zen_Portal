
console.log("*****************************Movie Details class*****************************")
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating == null) {
            this.rating = "PG";
        }
        else
            this.rating = rating;
    }

    getPG(arr) {
        return arr.filter(movie => movie.rating === 'PG')
    }
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Spiderman", "Maevel");
let pgMovie = new Movie().getPG([new Movie("Justice League","DC", "UA"), new Movie("Green Arrow", "CW", "UV"), new Movie("You Before Me", "Paramount"), new Movie("Heels","ABC"), new Movie("Supreergirl","CW"), 
                                 new Movie("Avengers","Marvel","UA"), new Movie("Mr. Bean","Paramount","U"), new Movie("Air Bud","Wondercorp","U")]);
console.log(movie2);
console.log(pgMovie)