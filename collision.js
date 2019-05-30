"use strict";

function sunMov() {
    sunX += 2 * directX, sunY += 2 * directY, dfg.style.top = sunY + "px", dfg.style.left = sunX + "px", (sunX + dfg.offsetWidth >= document.documentElement.clientWidth-4 || sunX <= 0) && (directX = -directX), (sunY + dfg.offsetHeight >= document.documentElement.clientHeight-4 || sunY <= 0) && (directY = -directY)
}
var directX = 1,
    directY = 1,
    sunX = 0,
    sunY = 0;
setInterval("sunMov()", 25);