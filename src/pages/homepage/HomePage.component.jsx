import React, { Component } from 'react'
import './homepage.styles.scss'
export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
             <div className="directory-menu">
              <div className="menu-item">
               <div className="content">
                 <h1 className="title">Hats</h1>
                 <span className="subtitle">Shop Now</span>
               </div>
              </div>
                <div className="menu-item">
               <div className="content">
                 <h1 className="title">Jackets</h1>
                 <span className="subtitle">Shop Now</span>
               </div>
              </div>
                <div className="menu-item">
               <div className="content">
                 <h1 className="title">Sneakers</h1>
                 <span className="subtitle">Shop Now</span>
               </div>
              </div>
                <div className="menu-item">
               <div className="content">
                 <h1 className="title">men</h1>
                 <span className="subtitle">Shop Now</span>
               </div>
              </div>
                <div className="menu-item">
               <div className="content">
                 <h1 className="title">Women</h1>
                 <span className="subtitle">Shop Now</span>
               </div>
              </div>
              
             
             </div>
                
            </div>
        )
    }
}
