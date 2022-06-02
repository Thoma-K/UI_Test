import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet.</p>
  }

  // --- With Animation
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
  // --- Without Animation
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} 
  //       handleDelete={handleDelete}/>
  //     ))}
  //   </div>
  // )
}
// --- We dont need them if we use the useContext ---
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string,
//     })
//   )
// }

export default FeedbackList