export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('span'),
  btnClose: document.querySelector('.close'),

  open(){
    Modal.wrapper.classList.add('open');
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

Modal.btnClose.onclick = () => Modal.close();

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
  if(event.key === 'Escape'){
    Modal.close()
  }
}