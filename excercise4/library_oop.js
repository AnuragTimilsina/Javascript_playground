console.log("Excercise 4");

// Create a class library and implement the following:
// constructor must take the book_list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)
var book_list = ["HarryPotter", "LOTR", "PercyJackson", "Twilight"];
var book_user = new Object;
class Library {
    constructor(book_list, book_user) {
        this.book_list = book_list;
        this.book_user = book_user;
    }

    getBookList(){
        return this.book_list;
    }

    issueBook(book_name, user){
        let index = 0
        this.book_list.forEach(function(e){
            if (e == book_name){
                this.book_list.splice(index, 1);
            }
            index++;
        })
        this.book_user.push({user: user, book_name: book_name}) 
    }

    returnBook(book_name){
        this.book_list.push(book_name);
    }

    static add(a, b){
        return a + b;
    }
}

lib = new Library(book_list, book_user);

console.log(lib);

console.log(lib.getBookList());

//lib.issueBook("LOTR", "Anmol");

lib.returnBook("50ShadesOfGrey");

console.log(lib);






