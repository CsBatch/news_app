import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {

        let { newsUrl, title, urlToImage, author, publishedAt } = this.props;
        return (
            <div className='my-2'>

                <a href={newsUrl}>

                    <div className="card mb-3 bg-dark text-white" >

                        <img src={urlToImage} className="img-fluid rounded-start" alt="This could not be loaded" style={{ height: "10rem" }} />

                        <div className="card-body">

                            <h5 className="card-title">{title.slice(0, 60)}...<small>Read More</small></h5>
                            <p className="card-text"><small className="text-white">{author}</small></p>
                            <p className="card-text"><small className="text-white">Published at : {publishedAt}</small></p>

                        </div>

                    </div>

                </a>
                
            </div>
        )
    }
}
