// Data image
export const dataImage = () => {
    let d = document.querySelectorAll("[data-bg-img");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-bg-img"
      )})`;
    }
  };