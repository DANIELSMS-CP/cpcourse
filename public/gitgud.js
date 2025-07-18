// public/gitgud.js

document.addEventListener("DOMContentLoaded", () => {
  const form    = document.querySelector("#level-form");
  const inputEl = document.querySelector("#autocomplete-input");
  const listEl  = document.querySelector("#autocomplete-list");
  const levels  = ["800", "900", "1000", "1100", "1800"];

  // 1) prevent the form’s default submit (page reload)
  form.addEventListener("submit", e => {
    e.preventDefault();
    // you can handle the final “submit” value here if you want:
    console.log("Submitted level:", inputEl.value);
  });

  // 2) on each keystroke, rebuild the dropdown
  inputEl.addEventListener("input", onInputChange);

  function onInputChange() {
    const value = inputEl.value.trim();
    listEl.innerHTML = "";           // clear out any old suggestions

    if (!value) return;              // no text → no list

    // substring match anywhere
    const matches = levels.filter(lvl => lvl.includes(value));

    matches.forEach(lvl => {
      const li = document.createElement("li");
      li.textContent = lvl;
      li.addEventListener("click", () => {
        inputEl.value = lvl;         // fill input
        listEl.innerHTML = "";       // hide list
      });
      listEl.appendChild(li);
    });
  }
});
