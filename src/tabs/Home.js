import { Link } from 'react-router-dom'
import React from 'react';
    
import banner from "../assets/banner1.svg"
import features from "../assets/banner2.svg"

function Home(){
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1>Create, Share <span>forms</span> easily</h1>
                <p>True Opinion lets you create forms super simply. All you need to do is create a free account and you'll be all set. You can share the link of your form with others and see thier submissions.</p>
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
        <div className="section">
            <div className="content">
                <h1>Why choose us?</h1>
                <p>
                    <span className="li">Easy to use</span>
                    <span className="li">100% free</span>
                    <span className="li">Share with friends</span>
                    <span className="li">No login required for submitting form</span>
                    <span className="li">Supports media file</span>
                </p>
            </div>
            <img src={features} alt="features" />
        </div>
    </div>
}

export default Home