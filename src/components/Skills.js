import React from "react";
import "../styles/Skills.css";

function Skills() {
    return(
        <section class="skills-area" id="skills">
        <h3 class="section-title">Skills</h3>
        <ul class="skills-content">
            <li>
                <i class="fa fa-laptop"></i>
                <h4>Web Design</h4>
                <p>Creating frontend designs with HTML5, Javascript, and CSS.</p>
            </li>
            <li>
                <i class="fa fa-image"></i>
                <h4>Graphics</h4>
                <p>Formatting website and designing logos and images.</p>
            </li>
            <li>
                <i class="fa fa-sitemap"></i>
                <h4>Organization</h4>
                <p>Top priority to making progress of organizing files for teams
                    and projects.</p>
            </li>
        </ul>
    </section>
    )
}

export default Skills;