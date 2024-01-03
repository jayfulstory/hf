const HorizontalContent = props => {
  // eslint-disable-next-line react/prop-types
  const { img, title, text } = props.content;
  console.log();
  return (
    <div className='flex flex-col  items-center  bg-BLUE border-[1px] border-[hsla(0,0%,100%,.2);] backdrop-blur w-[420px] h-[480px] p-8 rounded-3xl text-white text-center whitespace-pre-line'>
      <div className='w-40 h-40 mb-8 bg-PURPLE  rounded-full'>
        <img className='w-full' src={img} alt='' />
      </div>
      <h3 className='text-xl font-bold mb-8'>{title}</h3>
      <p className='text-md leading-6'>{text}</p>
    </div>
  );
};

export default HorizontalContent;
