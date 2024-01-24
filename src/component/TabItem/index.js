import './index.css'

const TabItem = props => {
  const {tabDetails, onTabButton, isActive} = props
  const {displayText, tabId} = tabDetails
  const btnStyle = isActive ? 'btn2' : ''
  const onTabBtn = () => {
    onTabButton(tabId)
  }
  return (
    <li className="li-container">
      <button className={`btn1 ${btnStyle}`} type="button" onClick={onTabBtn}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
