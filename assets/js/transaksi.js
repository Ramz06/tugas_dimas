

function renderTransaksi() {
    const transaksi = document.getElementById('data');
    transaksi.innerHTML = `
        <h2 class="text-center">Data Transaksi</h2>
                <div class="container">
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">Nama</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Rp 1,000,000</td>
                                <td>Pinjaman</td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>Rp 500,000</td>
                                <td>Simpanan</td>
                            </tr>
                            <tr>
                                <td>Michael Johnson</td>
                                <td>Rp 750,000</td>
                                <td>Pinjaman</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    `;
}