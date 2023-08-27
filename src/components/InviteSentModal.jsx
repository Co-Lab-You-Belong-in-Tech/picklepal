import "../styles/modal.css"
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
// import { useNavigate } from 'react-router-dom';
import { displayModal, inviteMatch } from '../redux/slices/userSlice';

function InviteSentModal() {
  const isModalOpen = useSelector((state) => (state.user.isModalOpen))
  ReactModal.setAppElement('#root')
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  function closeModal() {
    dispatch(displayModal(false));
    dispatch(inviteMatch(false));
    // navigate('/match/matchFound')
  }
  return (
    <ReactModal
      isOpen={isModalOpen}
      overlayClassName='modal-overlay'
      className='modal-content'
    >
      <h3>Woohoo!</h3>
      <p>Your invite has been sent. You will receive a response within three days.</p>
      <Button text='View More Matches' onclick={closeModal} />
    </ReactModal>
  )
}

export default InviteSentModal;
