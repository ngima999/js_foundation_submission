/* eslint-disable no-unused-vars */


class Media {
    constructor(title, yearOfRelease) {
        this.title = title;                     //Set the title of the media
        this.yearOfRelease = yearOfRelease;     //Set the year of release
        this.ratings = [];                       //Initialize an empty array for ratings
    }

    getTitle() {
        return this.title;                     
    }

    getYearOfRelease() {
        return this.yearOfRelease;           
    }

    addRating(rating) {
        if (rating < 1 || rating > 100) {
            return `${rating} is not a valid rating, ratings must be 1-100`; 
        }
        this.ratings.push(rating);              
    }

    getAverageRating() {
        if (this.ratings.length === 0) {
            return 'this is not rated';          //Return a message if no ratings
        }
        const total = this.ratings.reduce((sum, rating) => sum + rating, 0); //Calculate total
        return Math.round(total / this.ratings.length); //Return the average rating
    }
}

//Album Class extending Media
class Album extends Media {
    constructor(title, yearOfRelease, artist, tracks) {
        super(title, yearOfRelease);            //Call the parent constructor
        this.artist = artist;                    //Set the artist
        this.tracks = tracks;                    //Set the tracks
    }
}

//Movie Class extending Media
class Movie extends Media {
    constructor(title, yearOfRelease, director, runTime) {
        super(title, yearOfRelease);            //Call the parent constructor
        this.director = director;                //Set the director
        this.runTime = runTime;                  //Set the runtime
    }
}

//Book Class extending Media
class Book extends Media {
    constructor(title, yearOfRelease, author, pages) {
        super(title, yearOfRelease);            //Call the parent constructor
        this.author = author;                    //Set the author
        this.pages = pages;                      //Set the number of pages
    }
}
