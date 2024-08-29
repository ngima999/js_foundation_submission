/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price){

    const book = Object.create(bookPrototype)
     book.id = id,
     book.title = title,
     book.author = author,
     book.price = price,
     book.rating = [];
    return book;
    }

   const bookPrototype = {
      getPrice: function(){
        return this.price;
      },
      getInfo: function(){
        return `${this.title} by ${this.author}`;
      },
      addRating: function(rating){
            this.rating.push(rating);
      },
      getRating: function() {
        if (this.rating.length === 0) return 0;
        const sum = this.rating.reduce((acc, curr) => acc + curr.length, 0);
        return sum / this.rating.length;
    }
   };
