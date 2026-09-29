# Netflix-Clone

End-to-end DevSecOps pipeline for a Netflix UI app using Jenkins, Docker, Trivy, Kubernetes, Prometheus & Grafana — featuring automated CI/CD, security scanning, and real-time monitoring.


## Tech-Stack-

<div align="left">
<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/> 
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
</div>


## Features-

- Movie and TV show data: The project uses the TMDB API and YouTube Search API to fetch and display movie and TV show data. Users can browse through a collection of popular movies and TV shows, search for specific titles, and view trailers.

- User-friendly interface: The project features a clean and intuitive user interface that makes it easy to navigate and search for content. The design is also responsive, adapting to different screen sizes and devices.

- Responsive design: The project is designed to be responsive, ensuring that the user interface is optimized for all screen sizes and devices. This includes desktops, laptops, tablets, and smartphones.

- API integration: The project demonstrates skills in API integration, specifically using the TMDB API and YouTube Search API to fetch data from external sources and display it in the application.

- Front-end development: The project showcases skills in front-end development, specifically using HTML, CSS, and JavaScript to create the user interface, implement interactivity, and fetch data from APIs.

- Project management: The project was developed using a version control system (Git) and follows best practices for code organization and documentation.

## Live-Demo-

[Netflix-Clone-Live](https://netflix-clone-wd.netlify.app/)


[![Netlify Status](https://api.netlify.com/api/v1/badges/e37fba97-0766-4626-9212-06a9fa3e5f00/deploy-status)](https://app.netlify.com/sites/animated-marshmallow-d90790/deploys)


## Screenshot-

![image](https://user-images.githubusercontent.com/48729682/227184261-88aca988-1aa2-4472-aa87-7b6f51d6f4b4.png)




---------------------------------------------------------

Architecture Flow diagram


                      ┌──────────────────────────┐
                      │        GitHub Repo        │
                      │  (Netflix UI Source Code) │
                      └────────────┬──────────────┘
                                   │
                          Webhook Trigger (Push)
                                   │
                      ┌────────────▼──────────────┐
                      │        Jenkins CI         │
                      │  - Build                 │
                      │  - Test                  │
                      │  - Scan (Trivy)          │
                      │  - Deploy (K8s)          │
                      └────────────┬──────────────┘
                                   │
                          Docker Image Build
                                   │
                      ┌────────────▼──────────────┐
                      │        Trivy Scan         │
                      │  Image Vulnerability Scan │
                      └────────────┬──────────────┘
                                   │
                            Push to Registry
                                   │
                      ┌────────────▼──────────────┐
                      │   Kubernetes Cluster       │
                      │  - Control Plane: Jenkins  │
                      │  - Worker Nodes: App Pods  │
                      │  - Netflix UI Deployment   │
                      └────────────┬──────────────┘
                                   │
                       Continuous Deployment Stage
                                   │
                      ┌────────────▼──────────────┐
                      │  Prometheus (Monitoring)  │
                      │  - Metrics Collection     │
                      │  - Node Exporters         │
                      └────────────┬──────────────┘
                                   │
                      ┌────────────▼──────────────┐
                      │     Grafana Dashboard     │
                      │  - Visualization Layer    │
                      │  - Node Exporter Full     │
                      │  - Cluster Metrics View   │
                      └────────────┬──────────────┘
                                   │
                      ┌────────────▼──────────────┐
                      │    DevSecOps Visibility   │
                      │  - Logs | Metrics | Alerts│
                      │  - Secure, Automated Flow │
                      └──────────────────────────┘

