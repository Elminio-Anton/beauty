let pipe = (...arrayOfFunctions) => {
    /*return arrayOfFunctions.reduce((prev, func) => {
        return func(prev)
    }, undefined) */
    if (arrayOfFunctions.length === 0) return undefined
    else if (arrayOfFunctions.length === 1) return arrayOfFunctions[0]()
    return arrayOfFunctions.reduceRight((recur, func) => (...args) => recur(func(...args)))()
}
/* let addTitle = (node) => {
    let title = document.createElement("h5")
    title.classList.add('title')
    node.appendChild(title)
    return node
} */
let addContent = (node) => {
    let createContainer = () => {
        let newsContainerNode = document.createElement("div")
        newsContainerNode.classList.add("news-container")
        return newsContainerNode
    }
    let news = [['Почему рекомендуется посещать профессионального косметолога. Мнение специалистов центра',
        ['Процедуры аппаратной косметологии на оборудовании экспертного класса от ведущих мировых производителей могут проводиться в любом возрасте и решать широкий спектр проблем: возрастные изменения, покраснения, акне и купероз, потеря тонуса и упругости кожи, отечность, целлюлит и т. п. ',
            'С помощью инъекционных методик мы можем разгладить морщины, провести объёмное моделирование, увлажнить кожу, ввести активные вещества в поверхностные и средние слои кожи, запустить процессы омоложения. ',
            'Лазерное и фотоомоложение помогут запустить процесс синтеза собственного коллагена, улучшить светооптические свойства кожи, а также получить максимальный эффект подтяжки лица без уколов и длительного восстановительного периода. ',
            'Курс процедур лазерной эпиляции поможет навсегда избавиться от проблемы нежелательных волос.']],
    ['News2', ['p1', 'p2', 'p3']],
    ['News3', ['p1', 'p2', 'p3', 'p4']]]
    let newsContentArray = news.map((news) => {
        let title = document.createElement("h5")
        title.classList.add('news-title')
        title.innerText = news[0]
        let list = document.createElement('ul')
        list.classList.add('news-p-list')
        news[1].forEach((p) => {
            let newsP = document.createElement('li')
            newsP.classList.add('news-list-item')
            newsP.innerText = p
            list.appendChild(newsP)
        })

        return [title, list]
    })
    return newsContentArray.map((news) => {
        let container = createContainer()
        container.appendChild(news[0])
        container.appendChild(news[1])
        return container
    })
}
let newsContent = addContent()
console.log(newsContent)



document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    let slider = new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    console.log(slider)
    document.querySelector('#slider-prev').addEventListener('click', () => {
        slider.prev()
    })
    document.querySelector('#slider-next').addEventListener('click', () => {
        slider.next()
    })
    document.querySelector(".news").addEventListener('click', ({ target }) => {

        if (target.classList.contains('radio-news')) {
            console.log(target.getAttribute('value'))
            document.querySelector(".news-content").innerHTML = ''
            document.querySelector(".news-content").appendChild(newsContent[target.getAttribute('value')])

        }
    })
    document.querySelector(".news-content").appendChild(newsContent[0])
});