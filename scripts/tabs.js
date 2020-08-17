const tabs = document.querySelectorAll(".tabs__container__element");

tabs.forEach((tab) => {
  // reset
  tabs[1].classList.add("tabs__container__element--active");
  document.querySelectorAll(".tabs__content__data")[1].style.display = "block";
  tab.addEventListener("click", (e) => {
    const tabsContentData = document.querySelectorAll(".tabs__content__data");
    tabsContentData.forEach(
      (tabContent) => (tabContent.style.display = "none")
    );
    tabs.forEach((tab) =>
      tab.classList.remove("tabs__container__element--active")
    );
    const tabContent = document.querySelector(
      `.${e.target.dataset.tabPrimaryKey}`
    );
    e.target.classList.add("tabs__container__element--active");
    tabContent.style.display = "block";
  });
});
