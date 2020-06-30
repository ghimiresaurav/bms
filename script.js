const form = document.querySelector('form');
const bookName = document.getElementById('book');
const author = document.getElementById('author');
const price = document.getElementById('price');
const tbody = document.querySelector('tbody');
const msg = document.getElementById('message');
const table = document.querySelector('table');
const taskToRemove = document.querySelectorAll('span');

class Book{
    constructor(name, author, price){
        this.name = name;
        this.author = author;
        this.price = price;
        this.addedOn = new Date().toLocaleDateString();
    }
}
class Controller{
    addBook(book){
        const row = `<tr><td>${bookName.value}</td>
                    <td>${author.value}</td>
                    <td>${price.value}</td>
                    <td>${new Date().toDateString()}</td>
                    <td><div id="removeBook">
                            <div class="line" id="one"></div>
                            <div class="line" id="two"></div>
                        </div>
                    </td>
                </tr>`;
        table.style.visibility = "visible";
        table.style.marginTop = "30px";
        tbody.innerHTML += row;
        msg.innerText = "Book has been added!";
        msg.className = "sucess";
        msg.style.transform = "translateY(20px)";
        setTimeout(function(){
            msg.innerText = "";
            msg.className = "";
            msg.style.transform = "translateY(-20px)";
        }, 2500);
    }
}
form.addEventListener('submit', function(e){
    const controller = new Controller();
    if(bookName.value != "" && author.value != "" && price.value != ""){
        const book = new Book(bookName.value, author.value, price.value);
        controller.addBook(book);
        bookName.value = author.value = price.value = "";
    }else{
        msg.innerText = "Please fill out the text fields!";
        msg.className = "fill-out";
        msg.style.transform = "translateY(20px)";
        setTimeout(function(){
            msg.innerText = "";
            msg.className = "";
            msg.style.transform = "translateY(-20px)";
        }, 2500);        
    }
    e.preventDefault();
});

table.addEventListener('click', function(e){
    if(e.target.id=="removeBook"){
    e.target.parentElement.parentElement.remove();
    msg.innerText = "Book Removed!";
    msg.className = "sucess";
    msg.style.transform = "translateY(20px)";
    setTimeout(function(){
        msg.innerText = "";
        msg.className = "";
        msg.style.transform = "translateY(-20px)";
    }, 2500);
    }
})
