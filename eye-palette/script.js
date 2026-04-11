const res=document.getElementById('res');

function run(){
  const input=(document.getElementById('input').value||'').toLowerCase();
  const ctx=(document.getElementById('context').value||'').toLowerCase();

  let out='Result:\n';

  if(input.includes('#')){
    out+='- Hex color detected → estimating skin tone\n';
  }

  if(input.includes('warm')){
    out+='- Warm undertone → peach, gold, coral tones\n';
  }
  if(input.includes('cool')){
    out+='- Cool undertone → pink, berry, blue tones\n';
  }
  if(input.includes('neutral')){
    out+='- Neutral undertone → wide range of shades\n';
  }

  if(ctx.includes('bright')){
    out+='- High brightness → increase makeup intensity\n';
  }

  if(ctx.includes('contrast')){
    out+='- Adjust makeup contrast accordingly\n';
  }

  if(input.includes('red')||input.includes('lip')){
    out+='- Suggest lipstick matching undertone\n';
  }

  out+='- Ensure harmony between skin, eyes and products\n';

  res.innerText=out;
}