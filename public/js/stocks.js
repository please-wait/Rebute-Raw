function stockStyle(prefix="",num,compare="flat",font_size="1em",symbol_height="12px") {
  var up_
  var down_
  var flat_

  var logo,color;

  if(compare==="up") {logo = "images/up-logo.png"; color = "#5ae217";}
  else if ( compare === "down") {logo = "images/down-logo.png"; color = "#ef6b1d";}
  else if ( compare === "flat") {logo = "images/flat-logo.png"; color = "#1dd2ef";}

  return `<div id=stock-wrapper style="font-size:${font_size}; color:${color}; height:${symbol_height};">${prefix + num}<img style="height:100%;" src="${logo}"" /></div>`
}
