import { Container, Text, Img, Profile } from "./styles";
import Img_profile from "../../assets/profile.jpeg"
export function Apresention(){
  return (
    <Container>
      <Profile>
        <Img src={Img_profile} alt="Ana-photo"/>
      </Profile>
      <h1>
        Hi, 
      </h1>
      <Text>
        I'm Ana Pérola
      </Text>
    </Container>
  )
}