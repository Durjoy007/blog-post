var blogForm = document.getElementById("blogForm");
var blogTitle = document.getElementById("blogTitle");
var blogDescription = document.getElementById("blogDescription");

blogForm.addEventListener("submit", function(event){
    event.preventDefault();
    createBlog(blogTitle.value, blogDescription.value);
});

function createBlog(blogTitle, blogDescription){
    var displayTiitle = `<div class="displayTitle" style="border: 1px solid black; width: 30%; height: 9%; position: relative; top: 4%; left: 12%;"> ${blogTitle} </div>`;
    var displaDescription = `<div class="displayDescription" style="border: 1px solid black; width: 30%; height: 15%; position: relative; top: 6%; left: 12%;"> ${blogDescription} </div>`;
    // taskList.insertAdjacentHTML('beforeend', taskHTML);
    blogTitle.value = "";
    blogDescription.value = "";
}