import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './register.css'
import neon from "../../images/Neon-1.png"
import Form from "react-bootstrap/Form"

const RegisterPage = () => {
    return  <div className="card__container">
    <Card style={{ border:"0", height: "34.563rem", width: '42.563rem', flexDirection: "row", gap: "0.625rem", flexShrink: "0", borderRadius: "15px 15px 15px 15px"}}>
      <Card.Img style={{ width: "22.938rem", height: "34.563rem",backgroundColor: "#6610F2", borderRadius: "15px 0px 0px 15px" }} variant="top" src={neon} />
      <Card.Body style={{ display:"flex", gap:"2rem",flexDirection: "column", padding: "2rem", width: "19rem", height: "34.563rem",borderRadius: "0px 15px 15px 0px",border: "3px solid var(--primary-color, #7749F8)" }}>
        <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="input__form">
          <Form.Label htmlFor="fullName">Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              id="fullName"
              placeholder='Andi'
            />
          </div>
          <div className="input__form">
          <Form.Label htmlFor="email">Alamat Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder='andi123@gmail.com'
            />
          </div>
          <div className="input__form">
          <Form.Label htmlFor="password">Kata Sandi</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder='Password'
            />
          </div>
          <div className="input__form">
          <Form.Label htmlFor="confPassword">Konfirmasi Kata Sandi</Form.Label>
            <Form.Control
             type="password"
             id="confPassword"
             placeholder='Password'
            />
          </div>
        </Form>
          <div className='card__button'>
            <Button id="button__daftar">Daftar</Button>
            <Button id="button__notdaftar">Sudah punya akun?</Button>
          </div>
      </Card.Body>
    </Card>
  </div>

}

export default RegisterPage