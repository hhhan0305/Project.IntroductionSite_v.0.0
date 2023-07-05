const article = document.querySelectorAll("article");

history.scrollRestoration = "manual";

document.addEventListener("wheel", (event) => {
  const clientHeight = window.innerHeight;
  const baseElementTop =
    article[article.length - 1].getBoundingClientRect().top;

  if (event.deltaY > 0) {
    wheelDown(article, baseElementTop, clientHeight);
  }
  if (event.deltaY < 0) {
    wheelUp(article, baseElementTop, clientHeight);
  }
});

function wheelDown(article, baseElementTop, clientHeight) {
    for (let i = 1; i < article.length; i++) {
      if (baseElementTop === clientHeight * (article.length - i)) {
        scrollTo({
          top: clientHeight * i,
          behavior: "smooth",
        });
      }
    }
  }
  function wheelUp(article, baseElementTop, clientHeight) {
    for (let i = 0; i < article.length - 1; i++) {
      if (baseElementTop === clientHeight * i) {
        scrollTo({
          top: clientHeight * (article.length - 2 - i),
          behavior: "smooth",
        });
      }
    }
  }