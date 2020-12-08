import { LOAD_NEWS, TOGGLE_CHOSED } from '../types'

const initialState = {
    allNews: [],
    chosenNews: [],
    loading: true
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return {
                ...state,
                allNews: action.payload.news,
                chosenNews: action.payload.chosenNews,
                loading: false
            }
        case TOGGLE_CHOSED:
            const allNews = state.allNews.map(news => {
                if (news.id === action.payload) {
                    news.chosen = !news.chosen
                }
                return news
            })
            return {
                ...state,
                allNews,
                chosenNews: allNews.filter(n => n.chosen)
            }
        default:
            return state
    }
}
