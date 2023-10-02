'use strict';

import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar() {
    const genreList = {}; 
    fetchDataFromServer('https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}',
    function ({ genres }) {
        for (const { id, name } of genres) {
            genreList[id] = name;
        }
        genreLink();
    });

    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = html`
        <div class="sidebar-list">
                <p class="title">Genre</p>
        </div>
        <div class="sidebar-list">
            <p class="title">Language</p>
            <a href="./movie-list.html" menu-close class="sidebar-link">English</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Hindi</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">French</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">German</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Spanish</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Chinese</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Bengali</a>
        </div>
    `;

    cons genreLink = function () {
        for (const { genreId, genreName } of Object.entries(genreList)) {

            const link = document.createElement("a");

            link.classList.add("sidebar-link");
            link.setAttribute("href", "./movie-list.html");
            link.setAttribute("menu-close", "");
            //link.setAttribute("onclick", `getMovieList(with_genres=$
            //{genreId}", "$ {genreNmae}")`)
            link.textContent = genreNmae;
            sidebarInner.querySelectorAll("sidebar-list")[0]
                .appendChild(link);

        }
        
    }

}