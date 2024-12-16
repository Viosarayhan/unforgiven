import PropTypes from "prop-types";
import Card from "../../Elements/Product";


const CardList = (props) => {
    const { products } = props
  return (
    <>
         {products?.map((prod, index) => <Card product={prod} index={index} key={prod.id ?? index} />)}
         {products.length <= 0 && <p className="font-sans">No Product Found.</p>}
    </>
  )
}

export default CardList

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

