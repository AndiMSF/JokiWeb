import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './forgotPassword.css'
import neon from "../../images/Neon-1.png"
import Form from "react-bootstrap/Form"
const ForgotPassword = () => {
  return (
    <div className="card__container">
    <Card style={{ border:"0", height: "34.563rem", width: '42.563rem', flexDirection: "row", gap: "0.625rem", flexShrink: "0", borderRadius: "15px 15px 15px 15px"}}>
      <Card.Img style={{ width: "22.938rem", height: "34.563rem",backgroundColor: "#6610F2", borderRadius: "15px 0px 0px 15px" }} variant="top" src={neon} />
      <Card.Body style={{ display:"flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch",gap:"2rem",flexDirection: "column", padding: "2rem", width: "19rem", height: "34.563rem",borderRadius: "0px 15px 15px 0px",border: "3px solid var(--primary-color, #7749F8)" }}>
        <div className='card__message'>
            <p>Kirim pesan lupa password ke e-mail mu yang telah terdaftar</p>
        </div>
        <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="input__form">
          <Form.Label htmlFor="email">Alamat Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder='andi123@gmail.com'
            />
          </div>
        </Form>
          <div className='card__button'>
            <Button id="button__daftar">Kirim</Button>
          </div>
      </Card.Body>
    </Card>
  </div>
  )
}

export default ForgotPassword