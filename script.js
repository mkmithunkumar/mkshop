let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " কার্টে যোগ হয়েছে!");
}


function updateCart() {

    document.getElementById("cartCount").innerText = cart.length;

    let items = document.getElementById("cartItems");

    items.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        items.innerHTML += `
            <div style="display:flex;justify-content:space-between;margin:15px 0;">
                <span>${item.name}</span>

                <span>
                    ৳${item.price}

                    <button onclick="removeItem(${index})">
                        ❌
                    </button>
                </span>
            </div>
        `;
    });

    document.getElementById("cartTotal").innerText = total;
}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document.getElementById("cartModal").style.display = "block";
}


function closeCart() {

    document.getElementById("cartModal").style.display = "none";
}


function checkout() {

    if (cart.length === 0) {

        alert("আপনার কার্ট খালি!");

        return;
    }

    alert(
        "অর্ডার নেওয়ার জন্য এখানে Customer Form + Firebase Backend যুক্ত করতে হবে।"
    );
}
