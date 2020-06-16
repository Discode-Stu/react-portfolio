import React, { Component } from 'react'
import axios from 'axios';



export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            portfolioItem: {}
        }
    }


    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
    axios.get(`https://danstuart.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentialds:true})
    .then(response => {
        this.setState({
        portfolioItem: response.data.portfolio_item
        })
    })
    .catch(error => {
        console.log('getPortfolioItem error', error);
        
    })
    }
    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            position,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center center"

        }

        const logoStyles = {
            width: "200px"

        }

        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} style={logoStyles}/>
                </div>

                <div className="portfolio-detail-desription-wrapper">
                    <div className="description">{description}</div>
                </div>

                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">
                        Visit {name}
                    </a>
                </div>

                <div className="bottom-banner">
                    <div className="banner" style={bannerStyles}>
                        <img src={logo_url} style={logoStyles}/>
                    </div>
                </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            // <div className="portfolio-detail-wrapper">
            //     <img 
            //     className="portfolio-detail-banner-img"
            //     src={banner_image_url}
            //     ></img>
            //     <div className="portfolio-detail-text-wrapper">
            //         <h2>{position}.) {name}</h2>
            //         <h2>Category: {category}</h2>
            //         <p>{description}</p>
            //         <h3>{url}</h3>
            //     </div>

            //     <img 
            //     className="portfolio-detail-logo"
            //     src={logo_url}>
            //     </img>
            //     <img 
            //     className="portfolio-detail-thumb-image"
            //     src={thumb_image_url}>
            //     </img>
            // </div>
        );
    }
}