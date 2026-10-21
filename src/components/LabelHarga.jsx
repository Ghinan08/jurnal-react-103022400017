

function LabelHarga(props) {

return (
        <div className="card">
            <label htmlFor="nama"> LabelHarga</label>
            <h3>{props.nilai}</h3>
            <p>Harga: {props.nilai}</p>
            <p>Kategori: {props.kategori}</p>
        </div>
    );
}

export default LabelHarga;