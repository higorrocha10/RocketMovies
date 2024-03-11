import { Container } from "./styles"
import { Tag } from "../Tag"

import { FaStar } from "react-icons/fa"
import { FiStar } from "react-icons/fi"

export function NoteMovies({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FiStar />
      </div>
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
