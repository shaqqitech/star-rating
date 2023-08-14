const stars = document.querySelectorAll('.stars i');

stars.forEach((star, ind1)=>{
    star.addEventListener("click", ()=>{
        stars.forEach((star, ind2)=>{
            ind1 >= ind2 ? star.classList.add('active') : star.classList.remove('active')
        })
    })
})