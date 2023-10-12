// ! function damit ich den ganzen rums wenn ich auf load more klicke hinzufüge
const fetchData = (page) => {
  // # ein hoch auf die template literals c:
  // * ps.: page könnte man auch für previous & next buttons nehmen
  fetch(`https://picsum.photos/v2/list?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((datensatz) => {
        // : für spätere zwecke maybe die id

        let id = datensatz.id;
        let autor = datensatz.author;
        let seeMore = datensatz.url;
        let image = datensatz.download_url;

        let singleItem = document.createElement("div");
        singleItem.classList.add("item");

        let name = document.createElement("h2");
        name.innerHTML = autor;

        let pic = document.createElement("img");
        pic.setAttribute("src", image);

        let btn = document.createElement("button");
        btn.innerHTML = "See more";

        singleItem.appendChild(pic);
        singleItem.appendChild(name);
        singleItem.appendChild(btn);

        document.querySelector(".imageGallery").appendChild(singleItem);

        btn.addEventListener("click", () => {
          window.open(seeMore, "_target");
        });
      });
    })
    // ? error handling lol
    .catch((err) => console.error("Yan Junge was machst du hier?!?!!", err));
};
let count = 1;
fetchData(count);
// - mehr pics laden magie
document.querySelector("#next").addEventListener("click", () => {
  count++;
  fetchData(count);
});
