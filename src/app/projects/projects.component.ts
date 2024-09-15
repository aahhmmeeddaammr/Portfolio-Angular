import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  myProjects:Project[]=[
  {
    imgSrc:"./assets/Images/image.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/Ecommerce",
    DemoLink:"https://aahhmmeeddaammr.github.io/Ecommerce/#/",
    title:"E-commerce",
    Description:`Developed a high-quality e-commerce platform using React.JS, React-Router-Dom, Formik, Yup,
Bootstrap, and AOS. Features include an intuitive user interface, diverse product range, secure
transactions, responsive design, personalized recommendations, efficient search and filtering options, and
dedicated customer support. This project ensures a seamless and enjoyable shopping experience across
different devices.`,
  },
  {
    imgSrc:"./assets/Images/image2.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/Full-Stack-Freelancing-Application",
    DemoLink:null,
    title:"Freelancing Application",
    Description:`Developed a comprehensive freelancing platform using React, Recoil, React Router Dom, React Prime,
Bootstrap, FontAwsom, Sweet Alert, Django, and Django Rest Framework. `,
  },
  {
    imgSrc:"./assets/Images/image3.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/JobPortal-Full-Stack",
    DemoLink:null,
    title:"jobPortal",
    Description:` Developed JobPortal, a dynamic job search platform utilizing Django for backend development and
JavaScript, HTML, and CSS for frontend design. `,
  },
  {
    imgSrc:"./assets/Images/image.4png.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/project1_react",
    DemoLink:"https://aahhmmeeddaammr.github.io/React-Portfolio/",
    title:"Portofolio Template",
    Description:" This Is My First Web Application Using React.JS",
  },
  {
    imgSrc:"./assets/Images/image5.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/yummy",
    DemoLink:"https://aahhmmeeddaammr.github.io/yummy/",
    title:"Yummy",
    Description:" Welcome to Yummy: Where Every Click is a Culinary Adventure! I built It using JS, JQuery, API, Bootstrap, CSS, and HTML. ",
  },
  {
    imgSrc:"./assets/Images/image6.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/danials..",
    DemoLink:"https://aahhmmeeddaammr.github.io/danials../",
    title:"Daniels(Portofolio Template)",
    Description:`Certainly! Crafting a compelling and enticing description for a front-end website is essential to capture the attention of users. it is a portfolio using HTML, CSS, and Bootstrap`,
  },
  {
    imgSrc:"./assets/Images/image7.png",
    RepoLink:"https://github.com/aahhmmeeddaammr/Ecommerce",
    DemoLink:"https://aahhmmeeddaammr.github.io/Ecommerce/#/",
    title:"Fokir (Portofolio Template)",
    Description:`I build this Portfolio using HTML and CSS , it is fully responsive website, You can use it on your phone,
laptop, or any device.`,
  }
]
}
