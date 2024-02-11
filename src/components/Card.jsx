import React from "react";
import Thumbnails1 from '../assets/images/portfolio/thumbnails/1.jpg'
import Thumbnails2 from '../assets/images/portfolio/thumbnails/2.jpg'
import Thumbnails3 from '../assets/images/portfolio/thumbnails/3.jpg'
import Thumbnails4 from '../assets/images/portfolio/thumbnails/4.jpg'
import Thumbnails5 from '../assets/images/portfolio/thumbnails/5.jpg'
import Thumbnails6 from '../assets/images/portfolio/thumbnails/6.jpg'

export default function Card(){

    return(
        <div class="row g-0">
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/src/assets/images/portfolio/fullsize/1.jpg" title="Project Name">
                    <img className="img-fluid" src={ Thumbnails1 } alt="..." />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Category</div>
                        <div className="project-name">Project Name</div>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/images/portfolio/fullsize/2.jpg" title="Project Name">
                    <img className="img-fluid" src={ Thumbnails2 } alt="..." />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Category</div>
                        <div className="project-name">Project Name</div>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/src/assets/images/portfolio/fullsize/3.jpg" title="Project Name">
                    <img className="img-fluid" src={ Thumbnails3 } alt="..." />
                    <div clasNames="portfolio-box-caption">
                        <div className="project-category text-white-50">Category</div>
                        <div className="project-name">Project Name</div>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/src/assets/images/portfolio/fullsize/4.jpg" title="Project Name">
                    <img className="img-fluid" src={ Thumbnails4 } alt="..." />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Category</div>
                        <div className="project-name">Project Name</div>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/src/assets/images/portfolio/fullsize/5.jpg" title="Project Name">
                    <img className="img-fluid" src={ Thumbnails5 } alt="..." />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">Category</div>
                        <div className="project-name">Project Name</div>
                    </div>
                </a>
            </div>
            <div classclassName="col-lg-4 col-sm-6">
                <a classclassName="portfolio-box" href="/src/assets/images/portfolio/fullsize/6.jpg" title="Project Name">
                    <img classclassName="img-fluid" src={ Thumbnails6 } alt="..." />
                    <div classclassName="portfolio-box-caption p-3">
                        <div classclassName="project-category text-white-50">Category</div>
                        <div classclassName="project-name">Project Name</div>
                    </div>
                </a>
            </div>
        </div>
            
    )
}