let total = 0;

function addExpense() {
    let amount = document.getElementById("amount").value;
    let desc = document.getElementById("desc").value;
    let category = document.getElementById("category").value;

    if (amount === "") {
        alert("Please enter all details");
        return;
    }

    let ul = document.getElementById("expense-list");

    let li = document.createElement("li");
    li.innerHTML = `${desc} - ₹${amount} - ${category} 
                    <button onclick="deleteExpense(this, ${amount})">Delete</button>`;

    ul.appendChild(li);

    total += parseInt(amount);
    document.getElementById("total").innerText = total;
    
    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("category").selectedIndex = 0;
}

function deleteExpense(button, amount) {
    button.parentElement.remove();
    total -= amount;
    document.getElementById("total").innerText = total;
}