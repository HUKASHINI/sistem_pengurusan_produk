const tableBody = document.getElementById("tableBody");
const form = document.getElementById("productForm");

// FETCH API
fetch("https://dummyjson.com/products?limit=10")
.then(res => res.json())
.then(data => {
    data.products.forEach(p => tambahRow(p.title, p.category, p.price));
});

// TAMBAH ROW
function tambahRow(nama, kategori, harga) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nama}</td>
        <td>${kategori}</td>
        <td>${harga}</td>
        <td><button onclick="hapusRow(this)">Hapus</button></td>
    `;

    tableBody.appendChild(row);
}

// BORANG TAMBAH
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const kategori = document.getElementById("kategori").value;
    const harga = document.getElementById("harga").value;

    tambahRow(nama, kategori, harga);

    form.reset();
});

// HAPUS
function hapusRow(btn) {
    btn.parentElement.parentElement.remove();
}