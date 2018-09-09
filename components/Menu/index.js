import Wrapper from './Wrapper'

const Menu = ({ pathname, menu, data, onClick = () => {} }) =>
  <Wrapper>
    <ul>
      {data.map((d, v) => {
        return <li key={v} onClick={() => { onClick(d) }}>{d}</li>
      })}
    </ul>

    <div className='hidden'>
      {(menu === 'hidden') ? <h3>Please choose a value...</h3>
        : <h3>You have chosen: {menu}</h3>
      }
    </div>
  </Wrapper>

export default Menu
