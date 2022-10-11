const addBookButton = document.querySelector('#AddBook')
const title = document.querySelector('#Title')
const isbn = document.querySelector('#ISBN')
const author = document.querySelector('#Author')

addBookButton.addEventListener('click', addBook)



function addBook(){
    // table row
    const tr = document.createElement('tr')
    // table data
    const titleTag = document.createElement('td')
    titleTag.appendChild(document.createTextNode(title.value))

    const isbnTag = document.createElement('td')
    isbnTag.appendChild(document.createTextNode(isbn.value))

    const authorTag = document.createElement('td')
    authorTag.appendChild(document.createTextNode(author.value))

    const removeTag = document.createElement('td')
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('Remove'))
    a.setAttribute('href', '#')
    removeTag.appendChild(a)

    // add data to table
    tr.appendChild(titleTag)
    tr.appendChild(authorTag)
    tr.appendChild(isbnTag)
    tr.appendChild(removeTag)

    // add to list
    const ul = document.querySelector('tbody')
    ul.appendChild(tr)


}






