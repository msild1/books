const addBookButton = document.querySelector('#addBook')
const title = document.querySelector('#Title')
const isbn = document.querySelector('#ISBN')
const author = document.querySelector('#Author')
const bookList = document.querySelector('#books')
const tbody = document.querySelector("#tbody")

addBookButton.addEventListener('click', addBook)
bookList.addEventListener('click', removeBook)
document.addEventListener('DOMContentLoaded', getBooks)




function addBook(){
    // table row
    const tr = document.createElement('tr')
    // table data
    const titleTag = document.createElement('td')
    titleTag.appendChild(document.createTextNode(title.value))
    titleTag.className ="titleText"

    const isbnTag = document.createElement('td')
    isbnTag.appendChild(document.createTextNode(isbn.value))
    isbnTag.className ="isbnText"

    const authorTag = document.createElement('td')
    authorTag.appendChild(document.createTextNode(author.value))
    authorTag.className ="authorText"

    const removeTag = document.createElement('td')
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('Remove'))
    a.setAttribute('href', '#')
    a.className = "removeText"
    removeTag.appendChild(a)

    // add data to table
    tr.appendChild(titleTag)
    tr.appendChild(authorTag)
    tr.appendChild(isbnTag)
    tr.appendChild(removeTag)

    // add to list
    const ul = document.querySelector('tbody')
    ul.appendChild(tr)

    addBookLS([title.value,author.value,isbn.value])


}

function removeBook(e){
    if(e.target.textContent == 'Remove'){

        let children = e.target.parentElement.parentElement.children;
        let tbl = []
        for (let i = 0; i < children.length; i++) {
            if (children[i].textContent == "Remove") {

            } else {
                tbl.push(children[i].textContent)
            }
        }
        e.target.parentElement.parentElement.remove()
        deleteBookLS(tbl)

    }
}

function addBookLS(book) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

function getBooks(){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    console.log("Getting books...")
    books.forEach((book) => {

        // table row
        const tr = document.createElement('tr')
        // table data
        const titleTag = document.createElement('td')
        titleTag.appendChild(document.createTextNode(book[0]))
        titleTag.className = "titleText"

        const authorTag = document.createElement('td')
        authorTag.appendChild(document.createTextNode(book[1]))
        authorTag.className ="authorText"

        const isbnTag = document.createElement('td')
        isbnTag.appendChild(document.createTextNode(book[2]))
        isbnTag.className ="isbnText"



        const removeTag = document.createElement('td')
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('Remove'))
        a.setAttribute('href', '#')
        a.className = "removeText"
        removeTag.appendChild(a)

        // add data to table
        tr.appendChild(titleTag)
        tr.appendChild(authorTag)
        tr.appendChild(isbnTag)
        tr.appendChild(removeTag)
        console.log(tr)
        // add to list
        const ul = document.querySelector('tbody')
        ul.appendChild(tr)

    })
}

function deleteBookLS(book) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((bookLS, taskIndex) => {
        // console.log("BookLS: " + bookLS)
        console.log(book)
        console.log(bookLS)
        console.log(typeof(book))
        console.log(typeof(bookLS))
        console.log(bookLS === book)
        if(bookLS == book.toString()){

            console.log("is same")
            books.splice(taskIndex, 1)

        }

    })
    localStorage.setItem('books', JSON.stringify(books))
}
