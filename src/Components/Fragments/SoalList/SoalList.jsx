import PropTypes from "prop-types";
import SoalCard from "../../Elements/SoalCard/SoalCard";


const SoalList = (props) => {
    
    const { soals } = props
  return (
    <>
         {soals?.map((soal, index) => <SoalCard soal={soal} index={index} key={soal.id ?? index} />)}
         {soals.length <= 0 && <p className="font-sans">No Product Found.</p>}
    </>
  )
}

export default SoalList

SoalList.propTypes = {
  soals: PropTypes.arrayOf(PropTypes.object).isRequired
}

