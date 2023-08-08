const content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", () => {
	const navBtns = document.querySelectorAll(".nav-item");
	navBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const activeBtn = document.querySelector(".active");
			activeBtn.classList.remove("active");
			e.target.classList.add("active");
			const main = document.querySelector("main");
			main.remove();
			if (e.target.textContent === "Home") {
				content.appendChild(createHome());
			} else if (e.target.textContent === "Menu") {
				content.appendChild(createMenu());
			} else if (e.target.textContent === "About") {
				content.appendChild(createAbout());
			}
		});
	});
});

function createHeader() {
	const header = document.createElement("header");
	const heading = document.createElement("h1");
	header.classList.add("header");
	heading.textContent = "<CodeCook Culinary/>";
	header.appendChild(heading);
	return header;
}

function createNav() {
	const nav = document.createElement("nav");
	const navList = document.createElement("ul");
	const navItems = ["Home", "Menu", "About"];

	nav.classList.add("nav-bar");
	navList.classList.add("nav-list");

	navItems.forEach((item) => {
		const navItem = document.createElement("li");
		navItem.textContent = item;
		navItem.classList.add("nav-item");
		if (item === "Home") {
			navItem.classList.add("active");
		}
		navList.appendChild(navItem);
	});
	nav.appendChild(navList);
	return nav;
}

// Content of the page

// Home page
function createHome() {
	const main = document.createElement("main");
	const homeContent = document.createElement("div");
	main.classList.add("container");
	homeContent.classList.add("home-content");
	homeContent.classList.add("main-layout");
	main.appendChild(homeContent);
	for (let i = 0; i < 3; i++) {
		const div = document.createElement("div");
		const divContent = document.createElement("div");
		const divTitle = document.createElement("p");
		const divText = document.createElement("p");
		divContent.classList.add("div-content");
		divTitle.textContent = "Lorem ipsum dolor sit amet";
		divText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Quisquam, voluptatum!`;
		divContent.appendChild(divTitle);
		divContent.appendChild(divText);
		div.classList.add("div-box");
		div.appendChild(divContent);
		homeContent.appendChild(div);
	}

	const container_main = document.createElement("div");
	container_main.classList.add("container-main");

	homeContent.appendChild(container_main);
	return main;
}

// Menu page

function createMenu() {
	const main = document.createElement("main");
	const menuContent = document.createElement("div");
	menuContent.classList.add("menu-content");
	menuContent.classList.add("main-layout");
	const menuItems = ["Pizza", "Pasta", "Burger", "Sandwich", "Salad", "Dessert"];

	menuItems.forEach((item) => {
		const menuItem = document.createElement("div");
		menuItem.classList.add("menu-item");
		const menuItemTitle = document.createElement("p");
		menuItemTitle.textContent = item;
		menuItem.appendChild(menuItemTitle);
		menuContent.appendChild(menuItem);
	});
	main.appendChild(menuContent);
	return main;
}

content.appendChild(createHeader());

content.appendChild(createNav());

content.appendChild(createHome());
