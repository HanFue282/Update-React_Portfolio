import React from  "react";
import "../styles/Portfolio.css";

function Portfolio() {
    return(
        <section class="porfolio-area" id="portfolio">
        <h3 class="portfolio-title">Portfolio</h3>
        <ul class="portfolio-content">
            <li class="port-left">
                <p>Using GitHub to save projects and assignments during my time in the SMU Code Bootcamp.
                    Each have been exciting to learn and creating from scratch can set my mind to the test.
                    A few websites that I have create are the
                    <a href="https://hanfue282.github.io/Weather-Dashboard/">Weather Dashboard</a>,
                    <a href="https://peaceful-plains-86435.herokuapp.com/">BurgerApp</a>, and the
                    <a href="https://hanfue282.github.io/Calendar-Schedule/">Work Day Scheduler</a>
                </p>
            </li>
            <li class="port-right"></li>
        </ul>
    </section>
    )
}

export default Portfolio;