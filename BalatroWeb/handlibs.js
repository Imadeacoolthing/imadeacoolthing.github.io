async function trigger(cardnum, triggernum) {
 await sleep(250);
chips += cardnum;
getAllIndexes(cardsSelectedrank,toaknum);
if (Jokersheld.Slot1.Id == 2) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 3) {
      mult += 3;
  }
}
if (Jokersheld.Slot1.Id == 3) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 2) {
      mult += 3;
  }
}
if (Jokersheld.Slot1.Id == 4) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 1) {
      mult += 3;
  }
}
if (Jokersheld.Slot1.Id == 5) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 4) {
      mult += 3;
  }
}
if (Jokersheld.Slot2.Id == 2) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 3) {
      mult += 3;
  }
}
if (Jokersheld.Slot2.Id == 3) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 2) {
      mult += 3;
  }
}
if (Jokersheld.Slot2.Id == 4) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 1) {
      mult += 3;
  }
}
if (Jokersheld.Slot2.Id == 5) {
  if (cardsSelectedsuit[suitarr[triggernum]] == 4) {
      mult += 3;
  }
}
document.getElementById("chips").innerHTML = chips;
document.getElementById("mult").innerHTML = mult;
}