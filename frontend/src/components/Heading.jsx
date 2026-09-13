

function Heading({ text, color, size = 'text-4xl' }) {
  return <h1 className={`${size} font-bold ${color}`}>{text}</h1>
}

export default Heading