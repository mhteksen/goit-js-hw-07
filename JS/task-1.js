const li = document.querySelectorAll(".item");

console.log(`Number of Categories : ${li.length}`);

li.forEach((element) => {
  const everyLi = element.querySelector("h2");
  console.log(`Category : ${everyLi.textContent}`);
  const everyUl = element.querySelectorAll("ul");

  everyUl.forEach((element) => {
    const everyli = element.querySelectorAll("li");
    console.log(`Elements : ${everyli.length}`);
  });
});
