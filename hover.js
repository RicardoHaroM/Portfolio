window.addEventListener("load",()=>{
    const about = document.getElementById("aboutItem");
    const projects = document.getElementById("projectsItem");
    const contact = document.getElementById("contactItem");
    let aboutTop = document.getElementById("title").offsetTop;
    let projectsTop = document.getElementById("projects").offsetTop;
    let contactTop = document.getElementById("contact").offsetTop;
    let aboutHover = false;
    let projectsHover = false;
    let contactHover = false;

    let windowPos;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {
        updatePos();
        if (windowPos >= aboutTop && windowPos < projectsTop && !aboutHover){
            
            about.classList.add("hover");
            aboutHover = true;
            if(projects.classList.contains("hover")){
                projects.classList.remove("hover");
                projectsHover=false;
            }
            else{
                contact.classList.remove("hover");
                contactHover = false
            }
        } else if(windowPos >= projectsTop && windowPos < contactTop && !projectsHover) {
            if(about.classList.contains("hover")){
                about.classList.remove("hover");
                aboutHover = false;
            }else{
                contact.classList.remove("hover");
                contactHover = false
            }
            projects.classList.add("hover");
            projectsHover = true;
        } else if(windowPos >= contactTop && !contactHover){
            if(projects.classList.contains("hover")){
                projects.classList.remove("hover");
                projectsHover= false;
            } else {
                about.classList.remove("hover");
                aboutHover = false
            }
            contact.classList.add("hover");
            contactHover = true;
        }
    }

    document.addEventListener("scroll", onScroll);
})