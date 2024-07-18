
const Card = ({children, bg = 'bg-gray=100'}) => {
  return (
    <div className={`${bg} p-6 round-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card