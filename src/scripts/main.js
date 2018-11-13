// In charge of executing all the DOM-builders etc.

import NewsList from "./newsList"
import NewsForm from "./newsForm"
import DomManager from "./domManager"
import APICollection from "./apiCollection";
import LoginCollection from "./login"

let get_news_list = NewsList.buildNewsList()
console.log(get_news_list);

DomManager.elementAppender(get_news_list, "#news_output")
DomManager.elementAppender(NewsForm.buildNewsForm("post"), "#news_form")
