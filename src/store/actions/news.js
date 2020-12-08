import { LOAD_NEWS, TOGGLE_CHOSED } from '../types'
import { Http } from "../../http";
import { getData, removeData } from "../../AsyncStorage";

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

const fetchNews = async () => {
    try {
        const data = await Http.get('http://freelance.news-world-blogs-18.info/newsApp/data/Data.json')
        shuffleArray(data)
        return data
    } catch (e) {
        console.log(e)
    }
}

const checkingChosen = (arrayChosen, arrayAllNews) => {
    return arrayChosen.map((el) => {
        const isChosen = arrayAllNews.find(elem => elem.id === el)

        if (isChosen) isChosen.chosen = true
        else removeData(el)

        return isChosen
    })
}

export const loadNews = () => {
    return async dispatch => {
        const news = await fetchNews()
        const chosenNews = await getData()
        const filteredChosen = checkingChosen(chosenNews, news).filter(e => e !== undefined && e !== null)

        dispatch({
            type: LOAD_NEWS,
            payload: {news: news, chosenNews: filteredChosen}
        })
    }
}

export const toggleChosen = id => {
    return {
        type: TOGGLE_CHOSED,
        payload: id
    }
}