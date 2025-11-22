import recipes from './recipes.mjs';

function randomNumber(num) {
     return Math.floor(Math.random()*num)// gives a ranom number 0-4
};

function recipePuller(list) {
    const listLength = list.length;
	const randomNum = randomNumber(listLength);
	return list[randomNum];
};


function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = "";

    for (let tag of tags) {
        html += `<li>${tag}</li>`;
    }

    return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
// our ratings are always out of 5, so create a for loop from 1 to 5
		// check to see if the current index of the loop is less than our rating
         for (let i = 1; i <= 5; i++) {
		// if so then output a filled star
            if (i <= rating) {
                 html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		// else output an empty star
            } else {
                 html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
	// after the loop, add the closing tag to our string
            }
        }

	html += `</span>`;
	// return the html string
	return html;
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	    <img src="${recipe.image}" alt="${recipe.name}"/>
	    <figcaption>
	    	<ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
	    	</ul>
	    	<h2><a href="#">${recipe.name}</a></h2>
	    	<p class="recipe__ratings">
	    		${ratingTemplate(recipe.rating)}
	    	</p>
	    	<p class="recipe__description">	${recipe.description}</p>
        </figcaption>
    </figure>`;
};


function renderRecipes(recipeList) {
    // get the container in your HTML (you must have <main id="recipes">)
    const output = document.querySelector("main");

    // convert recipe objects → HTML
    const html = recipeList.map(recipeTemplate).join("");

    // insert into page
    output.innerHTML = html;
};

function init() {
    const recipe = recipePuller(recipes);
    renderRecipes([recipe]);
};

init();

function filterRecipes(query) {
    query = query.toLowerCase();
    return recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        return nameMatch || tagMatch;
    });
};

const searchButton = document.querySelector(".search-bar button");
const searchInput = document.querySelector(".search-bar input");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const results = filterRecipes(query);
    renderRecipes(results);
});

const recipe = recipePuller(recipes);
console.log(recipePuller(recipes));
console.log(recipeTemplate(recipe));

