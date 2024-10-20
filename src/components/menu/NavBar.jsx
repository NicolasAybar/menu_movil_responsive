
import { useState, useRef } from 'react';
import './NavBar.css';

export const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null); // Usamos useRef para hacer referencia al menú

  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible); // Alterna la visibilidad del menú
  };

  const ocultarMenu = () => {
    setMenuVisible(false); // Oculta el menú cuando se selecciona un enlace
  };

  return (
    <>
    <section className='inicio' id='inicio'>
      <div className='contenido-seccion'>
        <header>
          <div className='nav-bar' onClick={mostrarOcultarMenu}>
            <i className='fa-solid fa-bars'></i>

            <nav
              ref={menuRef}
              id='nav'
              className={`nav ${menuVisible ? 'visible' : 'hidden'}`} // Cambia clases según el estado
              style={{ display: menuVisible ? 'block' : 'none' }} // Cambia estilo según el estado
            >
              <a href='#inicio' onClick={ocultarMenu}>Inicio</a>
              <a href='#sobremi' onClick={ocultarMenu}>Sobre mí</a>
              <a href='#proyectos' onClick={ocultarMenu}>Proyectos</a>
            </nav>

            <div className='logo'>
              Franco<span className='logop'>Web</span>
            </div>
          </div>
        </header>
      </div>
    </section>
    <section className='#sobremi' id='sobremi'>
        <h1>Sobre mi</h1>
        <span>
        Avances soviéticos 
El 22 de junio de 1944, las fuerzas soviéticas destruyeron el centro del grupo de ejércitos alemanes en el este de Bielorrusia. Para el 1° de agosto de 1944, avanzaban rápidamente hacia el oeste hasta el río Vístula, frente a Varsovia. A principios de agosto, las tropas soviéticas que ya habían conquistado la provincia rumana de Besarabia en el este de Rumania, aparecieron en el río Prut y se prepararon para atacar el corazón de Rumania, con lo que precipitaron la rendición de ese país el 23 de agosto. Los búlgaros se rindieron el 8 de septiembre de 1944. Estos acontecimientos obligaron a los alemanes a evacuar Grecia, Albania y el sur de Yugoslavia.

Alemania había ocupado Hungría el 19 de marzo de 1944 para impedir los esfuerzos del gobierno húngaro por buscar la paz por separado. Entonces, en octubre, Alemania había patrocinado un golpe de estado del extremista Partido de la Cruz Flechada para evitar otro esfuerzo húngaro por rendirse.

Finalmente, con la aparición de las tropas soviéticas en la frontera de Finlandia, los finlandeses hicieron un llamado al armisticio el 12 de septiembre de 1944.

En agosto de 1944, el clandestino Ejército Nacional de Polonia y las organizaciones de la resistencia naci
</span>
    </section>
    <section className='#proyectos' id='proyectos'>
        <h1>Proyectos</h1>
        <span>
        La derrota de Alemania 
El 16 de diciembre de 1944, los alemanes lanzaron un infructuoso contraataque en Bélgica y el norte de Francia, conocido como la Batalla de las Ardenas. Para el día de año nuevo, las tropas británicas y estadounidenses habían obligado a los alemanes a replegarse a Alemania. El 12 de enero de 1945, los soviéticos reanudaron la ofensiva, liberando Varsovia y el oeste de Polonia. En diciembre, los soviéticos habían rodeado Budapest, aunque la ciudad no cayó hasta el 13 de febrero de 1945. Para comienzos de abril, los soviéticos habían expulsado los remanentes del régimen de la Cruz Flechada de Hungría y habían forzado la rendición de la República Eslovaca fascista con la caída de Bratislava, el 4 de abril de 1945. El 13 de abril, los soviéticos capturaron Viena, mientras que los partisanos del mariscal Josip Tito forzaban la huida de los líderes de la Ustasha y el colapso del llamado Estado Independiente de Croacia.

A mediados de febrero de 1945, los aliados bombardearon Dresden y mataron a unos 35.000 civiles alemanes. Las tropas estadounidenses cruzaron el río Rin en Remagen el 7 de marzo de 1945. El 16 de abril de 1945, una última ofensiva soviética permitió que esas fuerzas rodearan Berlín. El 30 de abril de 1945, mientras las tropas soviéticas avanzaban peleando hacia la Cancillería del Reich, Hitler se suicidó. El 7 de mayo de 1945, Alemania se rindió incondicionalmente ante los aliados occidentales en Reims y el 9 de mayo ante los soviéticos en Berlín.

La derrota de Japón 
Después de expulsar a los japoneses de las Islas Salomón en noviembre de 1942, las fuerzas británicas y estadounidenses comenzaron a moverse lentamente hacia el norte, brincando de isla en isla hacia Japón, mientras las fuerzas británicas trabajaban con el gobierno nacionalista Chino para luchar contra los japoneses en China. En una campaña paralela, el movimiento comunista chino luchaba contra los japoneses mientras se defendía de los ataques de los nacionalistas. En octubre de 1944, las tropas estadounidenses desembarcaron en las Filipinas. Para mayo de 1945, las tropas británicas y estadounidenses habían conquistado Okinawa, la última base japonesa importante antes del mismo Japón.

El 6 de agosto de 1945, Estados Unidos lanzó la primera bomba atómica en Hiroshima y posteriormente, el 9 de agosto, lanzó una segunda bomba atómica en Nagasaki. El 8 de agosto, la Unión Soviética le declaró la guerra a Japón e invadió el territorio de Manchuria que estaba ocupado por ese país.

Menos de una semana más tarde, el 14 de agosto de 1945, Japón aceptó rendirse; la ceremonia formal tuvo lugar el 2 de septiembre. La Segunda Guerra Mundial había terminado.


        varias causas bélicas, entre las cuales se destacan la invasión de Polonia por parte de Alemania el 1 de septiembre de 1939, lo que provocó la respuesta militar de Reino Unido y Francia. Además, otros factores incluían la expansión alemana en Europa Occidental y la invasión de otros países, como Francia y los Países Bajos. Estos acontecimientos fueron la culminación de tensiones políticas y territoriales que se habían ido acumulando después de la Primera Guerra Mundial.
        </span>
    </section>
    </>
  );
};