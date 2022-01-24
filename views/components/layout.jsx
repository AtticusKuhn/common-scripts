import React from 'react';
import Pagelink from "./link.jsx"
const Layout = (props)=>(
    <>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"/>
        <script src="https://common-scripts.atticuskuhn.repl.co/scripts/fix_url"/>
        <script src="https://common-scripts.atticuskuhn.repl.co/scripts/active_links"/>
        <script src="https://common-scripts.atticuskuhn.repl.co/scripts/document_title"/>
        <script src="https://common-scripts.atticuskuhn.repl.co/scripts/lorem_ipsum"/>
        <script src="https://common-scripts.atticuskuhn.repl.co/scripts/levenstein_distance"/>

        <script src="/public/scripts/main.js"/>

        <link rel="stylesheet" href="/public/styles/main.css" />

        <dix>
            <div id="navbar">
                header
                <Pagelink name="Home" link="/" />
                <Pagelink name="Browse Scripts" link="/scripts" />
            </div>
            <h1 id="main_title" />


        </dix>
            {props.children}
        <div id="footer">footer. Made by <a href="https://repl.it/@AtticusKuhn">@AtticusKuhn</a></div>
    </>
)
export default Layout