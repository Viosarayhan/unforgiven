import PropTypes from "prop-types";
import ArtikelSamping from "../../Elements/ArtikelSamping/ArtikelSamping";


const ArtikelSampingList = (props) => {
    
    const { artikels } = props
  return (
    <>
         {artikels?.map((artikel, index) => <ArtikelSamping artikel={artikel} index={index} key={artikel.id ?? index} />)}
         {artikels.length <= 0 && <p className="font-sans">No Product Found.</p>}
    </>
  )
}

export default ArtikelSampingList

ArtikelSampingList.propTypes = {
  artikels: PropTypes.arrayOf(PropTypes.object).isRequired
}

