const btnToggle = document.querySelector(".navigation__toggle");
const navigation = document.querySelector(".navigation");

btnToggle.onclick = function () {
	navigation.classList.toggle("open");
};

const list = document.querySelectorAll(".list");

function activarLink() {
	list.forEach((item) => {
		item.classList.remove("active");
		this.classList.add("active");
	});
}

list.forEach((item) => {
	item.addEventListener("click", activarLink);
});
