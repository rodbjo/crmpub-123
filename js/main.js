function autoScaleText(el) {
    const container = el.parentElement;
    let fontSize = 100; // Start big

    el.style.fontSize = fontSize + 'px';

    // Reduce font size until it fits the container
    while (el.scrollWidth > container.clientWidth && fontSize > 0) {
      fontSize--;
      el.style.fontSize = fontSize + 'px';
    }
  }

  function scaleAllH2s() {
    const headings = document.querySelectorAll('h2');
    headings.forEach(el => autoScaleText(el));
  }

  //Accordion functionality to bring view to the top of the selected section
  document.getElementById('accordion-tabs').addEventListener('change', function (e) {
    const targetId = e.target.value;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });

  //X mark closing functionality
  function clearRadioSelection(event) {
    event.preventDefault();
    event.stopPropagation();

    const targetId = event.currentTarget.getAttribute("data-target");
    if (targetId) {
      const input = document.getElementById(targetId);
      if (input && input.type === "radio") {
        input.checked = false;
      }
    }
  }

  document.querySelectorAll(".x-mark, .x-mark-mobile").forEach(el => {
    el.addEventListener("click", clearRadioSelection);
  });
  // Run on load and on resize
  window.addEventListener('load', scaleAllH1s);
  window.addEventListener('resize', scaleAllH1s);

