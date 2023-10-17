const inputEl = document.getElementById('example')
const btnEl = document.querySelector('.kn')
const spisokEl = document.querySelector('.spisok')

const todoList = [
    {
        id: 1,
        text: 'some text',
        isDone: false 
    },
    {
        id: 2,
        text: 'someasdasdtext',
        isDone: true
    }
]

let id = 3

function render() {
    spisokEl.innerHTML=''
    for (let item of todoList) {
        const el = createHtmlElement(item)
        spisokEl.appendChild(el)
    }
}

function createHtmlElement(item) {
    const divEl = document.createElement('div')
    divEl.classList.add('item')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    if (item.isDone) {
        checkbox.checked = true
        divEl.classList.add('done')
    }
    const text =document.createElement('p')
    text.classList.add('text')
    text.innerText = item.text

    const img = document.createElement('img')
    img.src = 'trash.png'
    img.addEventListener('click', () => {
        removeItem(item.id)
    })
    
    divEl.appendChild(checkbox)
    divEl.appendChild(text)
    divEl.appendChild(img)

    checkbox.addEventListener('change', () => {
        updateItem(item.id)
    })

    return divEl
}
function updateItem(id) {
    const item = todoList.find((i) => i.id === id)
    item.isDone = !item.isDone
    render()
}
function removeItem(id) {
    const idx = todoList.find((i) => i.id === id)
    todoList.splice(idx, 1)
    render()
}
function addItem() {
    if(inputEl.value) {
        const obj = {
            text: inputEl.value,
            isDone: false,
            id: id++
        }
        todoList.push(obj)
        inputEl.value = ''
        render()
    }
}

btnEl.addEventListener('click', addItem)

render()