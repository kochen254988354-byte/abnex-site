
document.querySelectorAll('.item-title').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const list=btn.nextElementSibling;
    list.style.display = list.style.display==='block'?'none':'block';
  });
});
