import React, { Component } from 'react';
import NewsColumn from './NewsColumn';

export default class Search extends Component {

    state = {
        searchItem: ""
        // progress: 0,
    };

    // setProgress = (progress) => {
    //     this.setState({ progress: progress });
    // }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({ searchItem: event.target.value });
    }
    
    // fetchNews = () => {
    //     var input = "";
    //     input = document.getElementById('search').value;
    //     console.log(input);
    //     return <NewsColumn category={input} key={input} headLines={0} />
    // }
    fetchNews = () => {
        const { searchItem } = this.state; // Use the searchItem state directly
        console.log(searchItem);
        // Pass the searchItem value to the NewsColumn component as a prop
        return <NewsColumn category={searchItem} key={searchItem} headLines={0} />;
      }

    render() {
        const newsColumnComponent = this.fetchNews();
        return (
            <>
                <div className="container fixed fixed-top">
                    <div className="banner d-flex justify-content-center">
                        <div className='text-white' style={{ fontSize: "100px" }}>
                            News
                            <span
                                className="text-black rounded-1 "
                                style={{
                                    backgroundColor: "#ffa31a",
                                    border: "none",
                                    fontWeight: "bold"
                                }}
                            >
                                Hub
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="d-flex justify-content-center" >
                        <div className="row">
                            <div className="d-flex searchArea p-0">
                                <input className="form inputArea form-control" id="search" placeholder='  Search Topics' />
                                <button type="button" onClick={this.fetchNews} className="btn btn-success button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {newsColumnComponent}
            </>
        )
    }
}