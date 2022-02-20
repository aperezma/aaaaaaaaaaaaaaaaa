import '../styles/components/pages/Home.css'

const HomePage = (props) => {
    return(
        <section className="all">
        <div className="nosotros">
            <h2>Quienes somos</h2>
            <p>Somos un pequeño grupo de astronomos que se juntaron para poder informar y comunicar respecto a nuestro universo. La iniciativa surgio al notar que muchas personas se mostraban interesadas en el tema y no lograban informarse o encontrar respuestas a sus dudas.</p>
            <p> Sabemos que es dificil y complicado comprender los libros de astronomia, aun los mas simples nos presentan dudas. En esta pagina queremos que puedan comprender estos temas, plantear sus dudas y asi poder expandir su conocimiento. Es muy importante compartir lo que sabemos por eso les pedimos que nos comenten o cuenten de algun tema que tengan duda o conozcan.</p>
            <img src="imagenes/astronauta1.jpg" alt="" className="astronauta1"/>
            <p>El enfoque itneractivo lo escogimos para poder ayudar mejor a la comunidad, permitir que las personas envien sus dudas y/o solicitan realizar un articulo de un tema de interes permiten incluir a mas personas en esta hermosa ciencia que puede atraparnos y enamorarnos a todos.</p>
            <p>¿Quien no quiso conocer la luna? O participar en una mision espacial, escuchamos a muchos niños y niñas hablar de estos temas, el sueño de participar de alguna forma en la astronomia es muy usual, y queremos alimentar ese deseo y que todos puedan dar un paso a ser como el astronauta de la imagen, un sueño que probablemente desde el 16 de julio del año 1969, o probablemente antes tambien se soñaba. Pero el paso de la humanidad hacia nuestro satelite mas cercano, la luna, pudo llamar mucho la atencion de mas personas.</p>
            <br/>
            <p>Te dejamos los nombres de las personas que participan de este hermoso proyecto.</p>
            <ul>
                <h4>Juan Perez - Redactor</h4>
                <h4>Maria Rosario - Editora</h4>
                <h4>Tomas Gonzales - Diseñador grafico</h4>
                <h4>Lucia Gomez - Recepcion de emails</h4>
            </ul>
            <br/>
            <p>Ahora que conoces nuestros nombres y leiste un poco sobre el proyecto, te invitamos a que descubras la belleza de nuestro universo, esperemos que este viaje espacial te emocione y te llene de dudas y curiosidad que puedan ser saciadas cada vez que pases por nuestras pagina web.</p>
            <p className="letrauno">3... 2... 1...</p>
            <h3 className="letrauno">¡DESPEGUE!</h3>
            <img src="imagenes/navedespegue.gif" alt="" id="navedespegue1"/>
        </div>
        <br/>
        <div className="uno">
            <h3>Primera parada espacial... Introductoria</h3>
            <p>El universo es enorme y apenas conocemos una pequeña parte de este. Pensando en esto podemos ver y darnos cuenta de lo pequeños que somos todos.</p>
            <p>Todos conocemos nuestro sistema solar. Sabemos que esta formado por 8 planetas y varios planetas enanos, entre ellos Pluton. </p>
            <img src="imagenes/sistemasolar.webp" alt="" />
            <p>En la imagen podemos distinguir que cada planeta es diferente al otro, desde tamaño, tonalidades, o incluso algunos tienen algun otro tipo de razgo, como por ejemplo Jupiter y sus anillos. Cada planeta de nuestro sistema es hermoso y tiene caracteristicas increibles. Podemos conocerlas y descubrirlas poco a poco en cada uno de nuestros articulos.</p>
            <p>Por ahora vamos a repazar con el orden de nuestros planetas queridos del sistema solar.</p>
            <ul>
                <li>Mercurio, es el planeta mas cercano a nuestro Sol.</li>
                <li>Venus, este planeta estuvo en nuestras conversaciones, ya que podria haber rastros de materia inorganica que da indicios de posible vida.</li>
                <li>Tierra, nuestro hermoso planeta, por el momento el unico con condiciones para la vida.</li>
                <li>Marte, el planeta rojo y el cual creemos podria ser habitable.</li>
                <li>Jupiter, uno de nuestros gigantes gaseosos, es el planeta mas grande del sistema solar.</li>
                <li>Saturno, todos nos enamoramos de sus anillos, lo vemos en multiples imagenes y dibujos, es usual que cuando un niño dibuje un planta dibuje este.</li>
                <li>Urano, un planta hermoso, uno de los mas frios.</li>
                <li>Neptuno, su tonalidad azul oscuro lo vuelve precioso.</li>
                <li>El pequeño Pluton, otro que esta en boca de muchos por su tamaño.</li>
            </ul>
            <p>¿Notan algo interesante en sus nombres? Todos ellos corresponden a dioses de la mitologia romana, esto tambien se tomo para la astrologia, siendo por ejemplo libra regido por Venus, quien corresponde a la diosa del amor. Estos detalles llevaron tambien por ejemplo a los nombres de los satelites de Marte, Deimos y Fobos, quienes en la mitologia griega eran hijos de Ares y lo acompañaban al combate.</p>
            <p>Los nombres son interesantes, tambien debemos pensar que ya en las antiguas civilizaciones se hablaba de astronomia, no como hoy en dia, pero si se hablaba y debatia bastante.</p>
            <p>Vamos a seguir conociendo y desarrollando estos temas en los articulos. Vamos a explorar y conocer mas aspectos de este bello sistema solar el cual se formo hace millones y millones de años y actualmente se expande cada vez mas.</p>
        </div>
    </section>
    )
};

export default HomePage;


