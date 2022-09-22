import CloseButton from '../Button/CloseButton';

export const ModalText = ({ text, handleClose }: any) => (
  <div className='flex flex-col items-center justify-center'>
    <div className='modal-text'>
      <h3>{text}</h3>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
        expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste
        similique eos id. Porro, culpa? Officiis, placeat?
      </h5>
    </div>

    <CloseButton onClick={handleClose} label='Close' className='-mb-8 mt-14' />
  </div>
);
