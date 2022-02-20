import '../styles/components/pages/Contacto.css'
const ContactoPage = (props) => {
    return (
        <section className="all">

        <div className="jeje">
            <h3>¡Escribinos!</h3>
            <p>Para nosotros es sumamente importante que nos comenten que temas quieren que esten en el sitio, o que temas les presentan dudas. Por eso te pedimos que llenes este formulario. Podes hacer la consulta de forma anonima y sin dejar un email para que sea respondida en el sitio, pero es recomendable que dejes la mayor informacion de contacto posible para que podamos contactarte y poder charlar un poco mas del tema que desarrolles en el mismo. </p>
            <p>Asi que ya sabes, gracias por pasar por el sitio y dejanos tu consulta o idea de articulo.</p>
            <p>¡Deja despegar las ideas!</p>
            <br />
            <br />
            <br />
            <form action="">
                <label for="nombre">Ingrese su nombre</label><br/> 
                <input type="text" id="escrito"/><br/>
                <br />
                <label for="email" >Ingrese su email</label><br />
                <input type="email" name="email" id="escrito"/><br/>
                <br/>
                <label for="pronombres">Ingrese sus pronombres por favor</label>
                <br/>
                <select name="pronombres">
                   <option value="0">  </option> 
                   <option value="1">El</option> 
                   <option value="2">Ella</option> 
                   <option value="3">Elle</option>
                   <option value="10">Ninguno</option> 
                   <option value="11">Todos</option> 
                   <option value="12">Prefiero no decir</option> 
                </select><br/>
                <br/>
                <label for="texto">Escriba aqui lo que desee enviar</label><br/>
                <textarea name="texto" rows="10" cols="40"></textarea><br/>
                <br/>
                <input type="submit" value="¡Enviar!"/>
            </form>
            <br/>
            <br/>
        </div>
       
    </section>
  )   
}
export default ContactoPage;