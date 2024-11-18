import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from "yup"

const validationSchema = yup.object({
  username: yup
    .string()
    .min(4, "El username debe ser mínimo de 4 caracteres")
    .required(),
})

const FormularioFormik = () => {
  return (
    <div>
      <h2>Formulario Formik</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const validationObject = {}
        //   if (values.username.length < 3) {
        //     validationObject.username = "Error de validación"
        //   }
        //   return validationObject
        // }}
      >
        <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Field
            type="text"
            name="username"
            placeholder="Tu nombre de usuario"
            // onBlur={checkInApi}
          />
          <ErrorMessage name="username" />
          <Field type="password" name="password" placeholder="Tu contraseña" />
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormularioFormik
