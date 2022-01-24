let loadMore = document.querySelector('.btnLoad');
let readMore = document.querySelectorAll('.btn-readMore');
let counter = 3;

loadMore.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(let i=counter; i<counter + 3; i++) {
        boxes[i].style.display = 'block';
    }
    counter += 3;

    if(counter >= boxes.length) {
        loadMore.style.display = 'none';
    }
}

Array.from(readMore).forEach((ele) => {
    ele.onclick = (e) => {
        let current = e.currentTarget.previousElementSibling;
        current.classList.toggle("active");

        if(current.classList.contains('active')) {
            e.currentTarget.textContent = 'Read Less';
        }
        else {
            e.currentTarget.textContent = 'Read More';
        }
    }
})