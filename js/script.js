const projects = document.querySelector(".projects");

for (let i = 1; i <= 8; i++) {
  projects.innerHTML += `<div class="project">
                           <h2>Prosjekt ${i}</h2>
                           <i class="fa-solid fa-code fa-2xl"></i>
                         </div>`;
}
