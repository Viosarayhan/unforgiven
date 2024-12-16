import PropTypes from "prop-types";
import CardHistory from "../../Elements/History";


const HistoryList = (props) => {
    const { Historys } = props
  return (
    <>
        {Historys?.map((Hist, index) => (
        <CardHistory product={Hist} index={index} key={Hist.id ?? index} />
      ))}
      {Historys.length <= 0 && <p>Tidak Ada video yang ditonton.</p>}
    </>
  )
}

export default HistoryList

HistoryList.propTypes = {
    Historys: PropTypes.arrayOf(PropTypes.object).isRequired, // Nama prop diperbaiki
  };

