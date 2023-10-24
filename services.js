// scroll down to services section

const discoverServices = document.querySelector(".discover-services")
const servicesSection = document.querySelector(".services")

discoverServices.addEventListener("click", () => {
    servicesSection.scrollIntoView({behavior:"smooth"})
})
