const content = document.getElementById("content");

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

function createMain() {
	const main = document.createElement("main");
	const homeContent = document.createElement("div");
	main.classList.add("container");
	homeContent.classList.add("home-content");
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
content.appendChild(createHeader());

content.appendChild(createNav());

content.appendChild(createMain());
