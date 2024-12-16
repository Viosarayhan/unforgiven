import PropTypes from "prop-types";
import ContentCard from "../../Elements/ContentCard/ContentCard";


const ContentList = (props) => {
    
    const { contents } = props
  return (
    <>
         {contents?.map((content, index) => <ContentCard content={content} index={index} key={content.id ?? index} />)}
         {contents.length <= 0 && <p className="font-sans">No Product Found.</p>}
    </>
  )
}

export default ContentList

ContentList.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object).isRequired
}

