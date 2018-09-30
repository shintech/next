import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const Menu = ({ menu, data, onClick = () => {} }) =>
  <Wrapper>
    <ul>
      {data.map((d, v) => {
        return <li key={v} onClick={() => { onClick(d) }}>{d}</li>
      })}
    </ul>

    <div className='hidden'>
      {(menu === 0) ? <h3>Please choose a value...</h3>
        : <h3>You have chosen: {menu}</h3>
      }
    </div>
  </Wrapper>

Menu.propTypes = {
  menu: PropTypes.number,
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Menu
