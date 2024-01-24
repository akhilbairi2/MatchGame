import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onThumbnailImg} = props
  const {thumbnailUrl, id} = thumbnailDetails
  const onThumbnailBtn = () => {
    onThumbnailImg(id)
  }
  return (
    <li className="li-container">
      <button type="button" className="btn" onClick={onThumbnailBtn}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ThumbnailItem
