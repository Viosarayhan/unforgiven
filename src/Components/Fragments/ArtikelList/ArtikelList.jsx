import PropTypes from "prop-types";
import ArtikelCard from "../../Elements/CardArtikel/CardArtikel";


const ArtikelList = (props) => {
    
    const { artikels } = props
  return (
    <>
         {artikels?.map((artikel, index) => <ArtikelCard artikel={artikel} index={index} key={artikel.id ?? index} />)}
         {artikels.length <= 0 && <p className="font-sans">No Product Found.</p>}
    </>
  )
}

export default ArtikelList

ArtikelList.propTypes = {
  artikels: PropTypes.arrayOf(PropTypes.object).isRequired
}

