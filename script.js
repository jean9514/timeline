const infobox = "#info-box";

window.addEventListener("DOMContentLoaded", loadJSON);
window.addEventListener("DOMContentLoaded", loadSVG);
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
window.addEventListener("resize", calculateSizes);

function hideInfo() {

  document.querySelectorAll("#info-box").forEach(infobox => {
    infobox.classList.add("hidden");
  });
  VisInfo();
}

function loadJSON() {
  fetch(
    "https://www.jeanettemadsen.com/portfolie-timeline/wp-json/wp/v2/timeline?per=100"
  )
    .then(response => response.json())
    .then(myJson => {
      console.log(myJson);
      console.log("the json data is:");
      myJson.forEach(obj => {
        console.log(obj);

        //clone the template

        const clone = document
          .querySelector("#info_template")
          .content.cloneNode(true);

        const dest = document.querySelector(
          `[data-svgplaceholder=${obj.acf.legi}]`
        );
        console.log(`[data-svgplaceholder=${obj.acf.legi}]`);

        clone.querySelector("[data-field='title']").textContent = obj.acf.title;
        clone.querySelector("[data-field='billede']").src = obj.acf.billede.url;
        clone.querySelector("[data-field='link']").href = obj.acf.link;
        clone.querySelector("[data-field='langbeskrivelse']").textContent =
          obj.acf.langbeskrivelse;

        dest.appendChild(clone);
      });
    });
}

function VisInfo() {

  document
    .querySelector(`[data-svgplaceholder="emne-1"]`)
    .addEventListener("mousemove", e => {
      visInfo1();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-1"]`)
    .addEventListener("mouseout", e => {
      gemInfo1();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-2"]`)
    .addEventListener("mousemove", e => {
      visInfo2();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-2"]`)
    .addEventListener("mouseout", e => {
      gemInfo2();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-3"]`)
    .addEventListener("mousemove", e => {
      visInfo3();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-3"]`)
    .addEventListener("mouseout", e => {
      gemInfo3();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-4"]`)
    .addEventListener("mousemove", e => {
      visInfo4();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-4"]`)
    .addEventListener("mouseout", e => {
      gemInfo4();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-5"]`)
    .addEventListener("mousemove", e => {
      visInfo5();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-5"]`)
    .addEventListener("mouseout", e => {
      gemInfo5();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-6"]`)
    .addEventListener("mousemove", e => {
      visInfo6();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-6"]`)
    .addEventListener("mouseout", e => {
      gemInfo6();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-7"]`)
    .addEventListener("mousemove", e => {
      visInfo7();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-7"]`)
    .addEventListener("mouseout", e => {
      gemInfo7();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-8"]`)
    .addEventListener("mousemove", e => {
      visInfo8();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-8"]`)
    .addEventListener("mouseout", e => {
      gemInfo8();
    });
    document
    .querySelector(`[data-svgplaceholder="emne-9"]`)
    .addEventListener("mousemove", e => {
      visInfo9();
    });
  document.querySelector(`[data-svgplaceholder="emne-9"]`).addEventListener("mouseout", e => {
      gemInfo9();
    });
    document
    .querySelector(`[data-svgplaceholder="emne-10"]`)
    .addEventListener("mousemove", e => {
      visInfo10();
    });
  document
    .querySelector(`[data-svgplaceholder="emne-10"]`)
    .addEventListener("mouseout", e => {
      gemInfo10();
    });
}

function visInfo1() {
  document.querySelector("#emne-1 #info-box").classList.remove("hidden");
}
function gemInfo1() {
  document.querySelector("#emne-1 #info-box").classList.add("hidden");
}
function visInfo2() {
  document.querySelector("#emne-2 #info-box").classList.remove("hidden");
}
function gemInfo2() {
  document.querySelector("#emne-2 #info-box").classList.add("hidden");
}
function visInfo3() {
  document.querySelector("#emne-3 #info-box").classList.remove("hidden");
}
function gemInfo3() {
  document.querySelector("#emne-3 #info-box").classList.add("hidden");
}
function visInfo4() {
  document.querySelector("#emne-4 #info-box").classList.remove("hidden");
}
function gemInfo4() {
  document.querySelector("#emne-4 #info-box").classList.add("hidden");
}
function visInfo5() {
  document.querySelector("#emne-5 #info-box").classList.remove("hidden");
}
function gemInfo5() {
  document.querySelector("#emne-5 #info-box").classList.add("hidden");
}
function visInfo6() {
  document.querySelector("#emne-6 #info-box").classList.remove("hidden");
}
function gemInfo6() {
  document.querySelector("#emne-6 #info-box").classList.add("hidden");
}
function visInfo7() {
  document.querySelector("#emne-7 #info-box").classList.remove("hidden");
}
function gemInfo7() {
  document.querySelector("#emne-7 #info-box").classList.add("hidden");
}
function visInfo8() {
  document.querySelector("#emne-8 #info-box").classList.remove("hidden");
}
function gemInfo8() {
  document.querySelector("#emne-8 #info-box").classList.add("hidden");
}
function visInfo9() {
  document.querySelector("#emne-9 #info-box").classList.remove("hidden");
}
function gemInfo9() {
  document.querySelector("#emne-9 #info-box").classList.add("hidden");
}
function visInfo10() {
  document.querySelector("#emne-10 #info-box").classList.remove("hidden");
}
function gemInfo10() {
  document.querySelector("#emne-10 #info-box").classList.add("hidden");
}

function loadSVG() {
  console.log("load the SVG");

  fetch("timeline-linear-01.svg")
    .then(response => response.text())
    .then(svgdata => {
      console.log("the SVG data is:");
      // console.log(svgdata);
      // vores svg omskrives til HTML der kan læses af DOM
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

      calculateSizes();
      // denne function skal først kaldes når svg ER loaded, ellers hides info boxe ikke når siden reloades.
      hideInfo()
    });
}
function calculateSizes() {
  const svgplaceholders = document.querySelectorAll(".svgplaceholder");
  svgplaceholders.forEach(replaceSVGwithHTML);
}

// svgId er tilføjet til htmlElementet som dataset
function replaceSVGwithHTML(htmlElement) {
  // svgSelector findes ud fra id og det element med klassen HTML_placeholder
  const svgId = htmlElement.dataset.svgplaceholder;
  // console.log(svgId);
  const svgSelector = "#" + svgId + " #overskrift" + ".HTML_placeholder";
  // her vælges svg elementet
  const svgElement = document.querySelector(svgSelector);
  // console.log(svgSelector);

  fitRectangle(svgElement, htmlElement);
}

function fitRectangle(svgElement, htmlElement) {
  const rect = svgElement.getBoundingClientRect();

  htmlElement.style.left = rect.x + "px";
  htmlElement.style.top = rect.y + "px";
  htmlElement.style.width = rect.width + "px";
  htmlElement.style.height = rect.height + "px";
}
