function component(type, classArr) {
  const element = document.createElement(type);

  if (classArr.length > 0) {
    for (const divClass of classArr) {
      console.log(divClass);
      element.classList.add(divClass);
    }
  }

  return element;
}

export { component };
