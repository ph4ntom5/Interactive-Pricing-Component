const slider = document.querySelector("input[type=range]") as HTMLInputElement | null ;
const toggle = document.querySelector("input[type=checkbox]") as HTMLInputElement | null;
const pageviews = document.querySelector(".box span") as HTMLInputElement | null;
const price = document.querySelector(".price span") as HTMLInputElement | null;
let priceAmount: number | null = 16;

toggle!.addEventListener("change", function () {
  price!.innerHTML = "$" + calculatePrice(priceAmount);
});

slider!.addEventListener("input", () => {
  if (slider!.value == "0") {
    pageviews!.innerHTML = "10k";
    priceAmount = 8;
    price!.innerHTML = "$" + calculatePrice(priceAmount);
    slider!.style.setProperty("--value", "0");
  }
  if (slider!.value == "25") {
    pageviews!.innerHTML = "50k";
    priceAmount = 12;
    price!.innerHTML = "$" + calculatePrice(priceAmount);
    slider!.style.setProperty("--value", "25%");
  }
  if (slider!.value == "50") {
    pageviews!.innerHTML = "100k";
    priceAmount = 16;
    price!.innerHTML = "$" + calculatePrice(priceAmount);
    slider!.style.setProperty("--value", "50%");
  }
  if (slider!.value == "75") {
    pageviews!.innerHTML = "500k";
    priceAmount = 24;
    price!.innerHTML = "$" + calculatePrice(priceAmount);
    slider!.style.setProperty("--value", "75%");
  }
  if (slider!.value == "100") {
    pageviews!.innerHTML = "1M";
    priceAmount = 32;
    price!.innerHTML = "$" + calculatePrice(priceAmount);
    slider!.style.setProperty("--value", "100%");
  }
});

function calculatePrice(amount: any) {
  if (toggle!.checked) {
    amount -= (amount / 100) * 25;
  }
  return amount.toFixed(2);
}
