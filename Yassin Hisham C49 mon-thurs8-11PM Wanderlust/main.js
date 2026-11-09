document.addEventListener("DOMContentLoaded", () => {
  const navDashboard = document.getElementById("nav-dashboard");
  const navHolidays = document.getElementById("nav-holidays");
  const navEvents = document.getElementById("nav-events");
  const navWeather = document.getElementById("nav-weather");
  const navLongWeekends = document.getElementById("nav-long-weekends");
  const navCurrency = document.getElementById("nav-currency");
  const navSunTimes = document.getElementById("nav-sun-times");
  const navMyPlans = document.getElementById("nav-my-plans");

  const viewDashboard = document.getElementById("view-dashboard");
  const viewHolidays = document.getElementById("view-holidays");
  const viewEvents = document.getElementById("view-events");
  const viewWeather = document.getElementById("view-weather");
  const viewLongWeekends = document.getElementById("view-long-weekends");
  const viewCurrency = document.getElementById("view-currency");
  const viewSunTimes = document.getElementById("view-sun-times");
  const viewMyPlans = document.getElementById("view-my-plans");

  const mainContentArea = document.getElementById("main-content-area");

  const btnGoDashboardHolidays = document.getElementById(
    "btn-go-dashboard-holidays",
  );
  const btnGoDashboardEvents = document.getElementById(
    "btn-go-dashboard-events",
  );
  const btnGoDashboardWeather = document.getElementById(
    "btn-go-dashboard-weather",
  );
  const btnGoDashboardLongWeekends = document.getElementById(
    "btn-go-dashboard-long-weekends",
  );
  const btnGoDashboardSunTimes = document.getElementById(
    "btn-go-dashboard-sun-times",
  );
  const btnGoDashboardMyPlans = document.getElementById(
    "btn-go-dashboard-my-plans",
  );

  function updateTime() {
    const now = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedTime = now.toLocaleString("en-US", options);

    document.querySelectorAll(".current-time-display").forEach((el) => {
      el.textContent = formattedTime;
    });
  }

  setInterval(updateTime, 1000);
  updateTime();

  function resetViews() {
    navDashboard.classList.remove("active");
    navHolidays.classList.remove("active");
    navEvents.classList.remove("active");
    navWeather.classList.remove("active");
    navLongWeekends.classList.remove("active");
    navCurrency.classList.remove("active");
    navSunTimes.classList.remove("active");
    navMyPlans.classList.remove("active");

    viewDashboard.classList.add("d-none");
    viewHolidays.classList.add("d-none");
    viewEvents.classList.add("d-none");
    viewWeather.classList.add("d-none");
    viewLongWeekends.classList.add("d-none");
    viewCurrency.classList.add("d-none");
    viewSunTimes.classList.add("d-none");
    viewMyPlans.classList.add("d-none");

    mainContentArea.classList.remove("dashboard-bg", "white-content-bg");
  }

  function showDashboard(e) {
    if (e) e.preventDefault();
    resetViews();

    navDashboard.classList.add("active");
    viewDashboard.classList.remove("d-none");
    mainContentArea.classList.add("dashboard-bg");
  }

  function showHolidays(e) {
    if (e) e.preventDefault();
    resetViews();

    navHolidays.classList.add("active");
    viewHolidays.classList.remove("d-none");
    mainContentArea.classList.add("white-content-bg");
  }

  function showEvents(e) {
    if (e) e.preventDefault();
    resetViews();

    navEvents.classList.add("active");
    viewEvents.classList.remove("d-none");
    mainContentArea.classList.add("white-content-bg");
  }

  function showWeather(e) {
    if (e) e.preventDefault();
    resetViews();

    navWeather.classList.add("active");
    viewWeather.classList.remove("d-none");
    mainContentArea.classList.add("white-content-bg");
  }

  function showLongWeekends(e) {
    if (e) e.preventDefault();
    resetViews();

    navLongWeekends.classList.add("active");
    viewLongWeekends.classList.remove("d-none");
    mainContentArea.classList.add("white-content-bg");
  }

  function showCurrency(e) {
    if (e) e.preventDefault();
    resetViews();

    navCurrency.classList.add("active");
    viewCurrency.classList.remove("d-none");
    mainContentArea.classList.add("dashboard-bg");
  }

  function showSunTimes(e) {
    if (e) e.preventDefault();
    resetViews();

    navSunTimes.classList.add("active");
    viewSunTimes.classList.remove("d-none");
    mainContentArea.classList.add("white-content-bg");
  }

  function showMyPlans(e) {
    if (e) e.preventDefault();
    resetViews();

    navMyPlans.classList.add("active");
    viewMyPlans.classList.remove("d-none");
    mainContentArea.classList.add("white-content-bg");
  }

  navDashboard.addEventListener("click", showDashboard);
  navHolidays.addEventListener("click", showHolidays);
  navEvents.addEventListener("click", showEvents);
  navWeather.addEventListener("click", showWeather);
  navLongWeekends.addEventListener("click", showLongWeekends);
  navCurrency.addEventListener("click", showCurrency);
  navSunTimes.addEventListener("click", showSunTimes);
  navMyPlans.addEventListener("click", showMyPlans);

  btnGoDashboardHolidays.addEventListener("click", showDashboard);
  btnGoDashboardEvents.addEventListener("click", showDashboard);
  btnGoDashboardWeather.addEventListener("click", showDashboard);
  btnGoDashboardLongWeekends.addEventListener("click", showDashboard);
  btnGoDashboardSunTimes.addEventListener("click", showDashboard);
  btnGoDashboardMyPlans.addEventListener("click", showDashboard);
});
