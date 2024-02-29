const content = document.querySelector(".content");
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
	button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(e) {
	const buttonText = e.target.textContent;
	switch (buttonText) {
		case "Home":
			loadHome();
			break;
		case "Menu":
			loadMenu();
			break;
		case "About":
			loadAbout();
			break;
		default:
			break;
	}
}

function createHome() {
	const home = document.createElement("div");
	home.classList.add("home");

	const logoContainer = document.createElement("div");
	logoContainer.classList.add("logo-container");
	logoContainer.style.backgroundImage = "url('/assets/img1.jpeg')";

	const logo = document.createElement("img");
	logo.classList.add("logo");
	logo.src = "/assets/Designer.png";
	logo.alt = "Logo";
	logoContainer.appendChild(logo);

	home.appendChild(logoContainer);

	const containerSecond = document.createElement("div");
	containerSecond.classList.add("container-second");
	home.appendChild(containerSecond);

	const homeText = document.createElement("div");
	homeText.classList.add("home-text");
	homeText.innerHTML = `
		<h1>Welcome The best Pizza parler in the world!</h1>
		<p> We are the best pizza place
		in the world. We offer the best pizza in town. We have a variety of pizzas to choose from. We have the best prices and the best quality. We also offer delivery services.</p>
		`;
	containerSecond.appendChild(homeText);

	const locationContainer = document.createElement("div");
	locationContainer.classList.add("location-container");

	const location = document.createElement("img");
	location.classList.add("location");
	location.src = "/assets/map.png";
	locationContainer.appendChild(location);

	const locationTextContainer = document.createElement("div");
	locationTextContainer.classList.add("location-text-container");

	const locationTitle = document.createElement("h2");
	locationTitle.textContent = "Location and Hours";
	locationTextContainer.appendChild(locationTitle);

	const locationText = document.createElement("p");
	locationText.textContent = "We are located at 1234 Pizza Street, Pizza Town, PZ 12345;";

	const openingHours = document.createElement("span");
	openingHours.textContent = " We are open from 11:00 AM to 11:00 PM";
	locationText.appendChild(openingHours);

	locationTextContainer.appendChild(locationText);
	locationContainer.appendChild(locationTextContainer);
	containerSecond.appendChild(locationContainer);

	return home;
}

function createMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu");

	const menuTitle = document.createElement("h1");
	menuTitle.textContent = "Menu";
	menu.appendChild(menuTitle);

	const menuList = document.createElement("ul");
	menuList.classList.add("menu-list");

	const menuItems = [
		{
			name: "Margherita",
			description: "Tomato, mozzarella, basil",
			price: "$8.00",
		},
		{
			name: "Marinara",
			description: "Tomato, garlic",
			price: "$7.00",
		},
		{
			name: "Quattro Stagioni",
			description: "Tomato, mozzarella, mushrooms, ham, artichokes, olives, oregano",
			price: "$12.00",
		},
		{
			name: "Carbonara",
			description: "Tomato, mozzarella, parmesan, eggs, bacon",
			price: "$9.00",
		},
		{
			name: "Frutti di Mare",
			description: "Tomato, seafood",
			price: "$13.00",
		},
	];

	menuItems.forEach((item) => {
		const menuItem = document.createElement("li");
		menuItem.classList.add("menu-item");

		const itemName = document.createElement("h2");
		itemName.textContent = item.name;
		menuItem.appendChild(itemName);

		const itemDescription = document.createElement("p");
		itemDescription.textContent = item.description;
		menuItem.appendChild(itemDescription);

		const itemPrice = document.createElement("span");
		itemPrice.textContent = item.price;
		menuItem.appendChild(itemPrice);

		menuList.appendChild(menuItem);
	});

	menu.appendChild(menuList);
	return menu;
}

function createAbout() {
	const about = document.createElement("div");
	about.classList.add("about");

	const aboutTitle = document.createElement("h1");
	aboutTitle.textContent = "About Us";
	about.appendChild(aboutTitle);

	const aboutText = document.createElement("p");
	aboutText.textContent = `Phone: 123-456-7890
		Email: thebestpizza@realmail.com`;
	about.appendChild(aboutText);

	return about;
}

function loadHome() {
	content.textContent = "";
	content.appendChild(createHome());
}

function loadMenu() {
	content.textContent = "";
	content.appendChild(createMenu());
}

function loadAbout() {
	content.textContent = "";
	content.appendChild(createAbout());
}

loadMenu();
loadAbout();
loadHome();
