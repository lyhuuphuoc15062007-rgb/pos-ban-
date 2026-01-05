let total = 0;
let inventory = [];

/* ===== LOGIN ===== */
function login() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (!username || !password) {
        error.innerText = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "login.html";
}

/* ===== CHECKOUT ===== */
function addToBill() {
    const product = document.getElementById("product");
    const quantity = document.getElementById("quantity").value;
    const bill = document.getElementById("bill");

    if (!quantity || quantity <= 0) return;

    const price = parseInt(product.value);
    const name = product.options[product.selectedIndex].text;

    const itemTotal = price * quantity;
    total += itemTotal;

    const li = document.createElement("li");
    li.innerText = `${name} x ${quantity} = ${itemTotal} VNĐ`;
    bill.appendChild(li);

    document.getElementById("total").innerText = total;
}

function checkout() {
    alert("Thanh toán thành công!\nTổng tiền: " + total + " VNĐ");
    total = 0;
    document.getElementById("bill").innerHTML = "";
    document.getElementById("total").innerText = 0;
}

/* ===== INVENTORY ===== */
function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const expiry = document.getElementById("expiry").value;

    if (!name || !price || !stock || !expiry) return;

    inventory.push({ name, price, stock, expiry });
    renderInventory();
}

function renderInventory() {
    const list = document.getElementById("inventory");
    list.innerHTML = "";

    inventory.forEach(p => {
        const li = document.createElement("li");
        li.innerText = `${p.name} | SL: ${p.stock} | Giá: ${p.price} | HSD: ${p.expiry}`;
        list.appendChild(li);
    });
}
