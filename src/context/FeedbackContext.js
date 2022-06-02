import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Best trip I had in ages',
      rating: 10,
    },
    {
      id: 2,
      text: 'Very good, we enjoyed the view from our room and the kayaking to the caves was very good.',
      rating: 9,
    },
    {
      id: 3,
      text: 'We enjoyed our time except on the last day, nothing was planned in case of bad weather.',
      rating: 8,
    },
]) 

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
 
  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }
  //delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return(
    <FeedbackContext.Provider 
      value={{
        feedback,
        editFeedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  ) 
}

export default FeedbackContext
