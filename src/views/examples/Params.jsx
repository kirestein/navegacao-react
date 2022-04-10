import { useParams } from 'react-router-dom'

export const Params = props => {
  const { id } = useParams()
  return (
    <div className="Params">
      <h1>Params</h1>
      <h2>Valor: { id }! </h2>
    </div>
  )
}
