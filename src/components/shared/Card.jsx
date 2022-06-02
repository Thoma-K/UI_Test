import PropTypes from 'prop-types';

const Card = ({children, reverse}) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )

  // ---- This is the way to change the style without changing class (based on conditional)
  
//   return (
//     <div 
//       className="card" 
//       style={{
//         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
//         color: reverse ? '#fff' :  '#000',
//       }}
//     >
//       {children}
//     </div>
//   )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card