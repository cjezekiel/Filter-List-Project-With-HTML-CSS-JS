const search = document.querySelector('#search');
const clearBtn = document.querySelector('.btn');
const itemsContainer = document.querySelector('.section-container');
const pagination = document.querySelector('.pagination')

// Smooth scale effect transition
const items = itemsContainer.querySelectorAll('.product-container');

Array.from(items).forEach(function(item){
    // console.log(item);
    item.addEventListener('mouseenter', scaleOut);
    item.addEventListener('mouseleave', scaleIn);

    /*
    // Code snippet is not part of project
    item.addEventListener('click', changeColor)
    
    function changeColor(e) {
        e.target.style.backgroundColor = 'red';
        console.log(e.target.classList.contains('product-container'))
    }
    */
})

// Scale out event
function scaleOut(e){
    // console.log(e)
    e.target.style.transform = `scale(1.05)`
    e.target.style.transition = `0.7s` 
}

// Scale in event
function scaleIn(e){
    // console.log(e)
    e.target.style.transform = `scale(1)`
    e.target.style.transition = `0.7s` 
}

// Search input event
search.addEventListener('input', searchEvent);

// Clear input field
clearBtn.addEventListener('click', deleteEvent);

// Filter items
function searchEvent(e){
    // Display clear button when input is fired
    if(e.target.value.length > 0){
        clearBtn.style.display = 'block';
        pagination.style.display = 'none'
    } else {
        clearBtn.style.display = 'none';
        // Reload browser
        location.reload();
    }

    // console.log(e.target.value)

    // Convert text value to lowercase
    const text = e.target.value.toLowerCase();
    // Get the items in Array
    const items = itemsContainer.querySelectorAll('.product-container');
    // Convert items to an iterable array
    Array.from(items).forEach(function(item){
        const itemListName = item.children[1].textContent;
        // console.log(item)
        if(itemListName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}

// Delete event
function deleteEvent(e){
    // clear text input field
    search.value = '';

    e.target.style.display = 'none'

    // Reload the browser
    location.reload();
}