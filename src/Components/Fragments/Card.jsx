import Card from "../Elements/Product"
const Card1 = (props) => {
    return (
        <div>
            <Card 
                Img="/src/assets/Nike air force 1.jpg"
                Alt="Nike air force 1"
                Namaproduct="Air force 1 '70 "
                Category="men's shoses"
                price={100000}
                Namabutton="Masukan Keranjang"
            />
        </div>
    )
}

export default Card1