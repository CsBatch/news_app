import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsColumn extends Component {

    static defaultProps = {
        newsType:"top-headlines",
        country: "in",
        category: ""
    }
    static propTypes = {
        newsType: PropTypes.string,
        country: PropTypes.string,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            loading: false,
            articles: [],
            totalResults: 0
        }
    }

    page = 1;
    url=""

    async updateNews(pageNumber) {
        this.props.setProgress(10);
        if(this.props.headLines){
            this.url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=541ab983557743f9a17c2e5192993473&category=${this.props.category}&page=${pageNumber}`
        }
        else{
            this.url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=541ab983557743f9a17c2e5192993473&page=${pageNumber}`
        }
        let data = await fetch(this.url);
        this.props.setProgress(30);
        let parsedData = "";
        parsedData = await data.json();
        this.props.setProgress(60);
        document.title = `Snapnews ${this.capitalizeFirstLetter(this.props.category)} `
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews(this.page);
    }

    fetchData = async () => {
        this.page = this.page + 1;
        if(this.props.headLines){
            this.url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=541ab983557743f9a17c2e5192993473&category=${this.props.category}&page=${this.page}`
        }
        else{
            this.url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=541ab983557743f9a17c2e5192993473&page=${this.page}`
        }
        let data = await fetch(this.url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    };

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <>
                <div className='text-center text-warning'>
                    <h1>{this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4>Loading...</h4>}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                if (element.title) {
                                    return (
                                        <div className='newsItem col-lg-3 col-md-6 ' key={element.url}>
                                            <NewsItem
                                                newsUrl={element.url}
                                                title={element.title}
                                                urlToImage={
                                                    element.urlToImage ? element.urlToImage : 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'}
                                                author={element.author}
                                                publishedAt={element.publishedAt} />
                                        </div>
                                    )
                                }
                                else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
