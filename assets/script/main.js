const restaurantLocations = [
  "شارع الملك فهد، الرياض",
  "طريق الكورنيش، جدة",
  "وسط البلد، القاهرة",
  "شارع الشيخ زايد، دبي",
  "الحي الدبلوماسي، الكويت",
];

let findbranches = document.getElementById("search");
let iasknow = document.getElementById("i-ask-now");

iasknow.onclick = () => {
  let data = findbranches.value.trim();
  function displayRestaurantLocations(data) {
    let resultContainer = document.getElementById("data");
    resultContainer.innerHTML = ""; 

    if (typeof data === "string" && data.length > 0) {
      let found = false;
      for (let i = 0; i < restaurantLocations.length; i++) {
        if (restaurantLocations[i] === data) {
          found = true;
          resultContainer.innerHTML = `<div class="found">✅ Found: ${restaurantLocations[i]}</div>`;
          break;
        }
      }
      if (!found) {
        resultContainer.innerHTML = `<div class="not-found">❌ This address does not exist</div>`;
      }
    } else {
      resultContainer.innerHTML = `<div class="not-found">⚠️ Please enter a valid address</div>`;
    }
  }

  displayRestaurantLocations(data);
};
