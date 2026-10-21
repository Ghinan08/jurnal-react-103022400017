

function KartuMenu(props) {
return (
        <div className="card">
            <h3>{props.nama}</h3>
            <input
            placeholder="Nama"
            value={nama}
            onChange={(e) => setnama(e.target.value)}
            />
            <input
            placeholder="harga"
            value={harga}
            onChange={(e) => setNarga(e.target.value)}
            />
            <button onClick={tambahHarga}>Tambah</button>

            <p>Harga: {props.harga}</p>
            <p>Kategori: {props.kategori}</p>
        </div>
    );
}

export default KartuMenu;