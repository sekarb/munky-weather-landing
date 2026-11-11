import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/constants';

export default function PrivacyPolicyES(hideContact = false) {
  return (
    <>
      <h1>Política de Privacidad para Munky Weather</h1>
    <p>
      <strong>Última Actualización:</strong> {LAST_UPDATED}
    </p>

    <h2>1. Introducción</h2>
    <p>Gracias por usar Munky Weather.</p>
    <p>
      La aplicación proporciona condiciones meteorológicas actuales y pronóstico de 10 días para cualquier ubicación en la tierra. Esto va más allá de solo ciudades. Puedes buscar lugares como lagos, campamentos, etc.
    </p>
    <p>
      La aplicación utiliza la búsqueda de Google Places. Por lo tanto, cualquier lugar que puedas buscar y encontrar en Google Maps está disponible para obtener el clima.
    </p>
    <p>
      Al usar esta aplicación, consientes expresamente la recopilación, procesamiento y uso de tus datos como se describe en esta política de privacidad.
    </p>

    <h2>2. Información que Recopilamos</h2>
    <p>Recopilamos la ubicación de tu dispositivo para:</p>
    <ul>
      <li>
        Proporcionar información meteorológica para tu ubicación actual enviando las coordenadas de la ubicación actual a Apple WeatherKit.
      </li>
      <li>
        Enviar coordenadas al servicio de geocodificación inversa de Apple para determinar el nombre de tu ubicación.
      </li>
      <li>
        Enviar coordenadas a la API REST de Google Elevation para determinar la altitud de la ubicación del pronóstico.
      </li>
      <li>
        Enviar coordenadas a la API REST de Google Timezone para obtener la zona horaria de tu ubicación.
      </li>
      <li>
        Enviar coordenadas a la API REST de Google Air quality para obtener la calidad del aire de tu ubicación.
      </li>
    </ul>
    <p>
      Además, utilizamos el SDK de Google Places Autocomplete para ayudar a autocompletar nombres de lugares durante tus búsquedas de ubicaciones.
    </p>
    <p>
      Enviamos a Google Places el texto que escribes y el ID del lugar que eliges para obtener su nombre y ubicación.
    </p>
    <p>
      <strong>Cuánto tiempo se almacenan los datos de ubicación:</strong> La ubicación recopilada solo se usa para recuperar los datos meteorológicos como se menciona en los puntos anteriores. La información de ubicación permanece en la memoria del dispositivo mientras la aplicación se está ejecutando. Una vez que se cierra la aplicación, se limpia de la memoria.
    </p>
    <p>
      <strong>Widgets:</strong> Si agregas un widget de Munky Weather, este obtiene tu ubicación cada vez que iOS lo actualiza, incluso con la aplicación cerrada, para mostrar el clima y el nombre del lugar donde estás. Esa ubicación se envía solo a Apple WeatherKit y al servicio de geocodificación inversa de Apple, y no se almacena.
    </p>
    <p>
      Tu configuración y tus lugares guardados y recientes permanecen en tu dispositivo. Los lugares se guardan solo como IDs de lugar de Google, no como nombres ni coordenadas; los IDs se envían a Google Places solo para mostrar el nombre y la ubicación de esos lugares cuando los abres. Los widgets solo leen tu configuración de unidades e idioma.
    </p>
    <p>
      El botón de compartir de Hoy y de cada día crea en tu dispositivo una imagen del pronóstico de ese día. Solo se comparte donde tú decidas enviarla.
    </p>
    <p>
      También almacenamos el recuento de cuántas veces se ha recuperado la información meteorológica solo para solicitar una reseña después de que la aplicación se haya usado hasta cierto punto. Esta información no sale de tu dispositivo y no se envía a ninguna parte. Tampoco está vinculada a ninguna otra información de identificación personal.
    </p>

    <h2>3. Cómo Recopilamos la Información</h2>
    <ul>
      <li>Los datos de ubicación no se recopilan continuamente</li>
      <li>
        La información de ubicación se recupera cuando la aplicación se lleva al primer plano [si la opción 'Cargar ubicación actual al abrir' está habilitada en la configuración] o cuando seleccionas 'Ubicación actual' en la pantalla de búsqueda de ubicación.
      </li>
      <li>Si agregas un widget, su ubicación se obtiene cada vez que iOS actualiza el widget.</li>
    </ul>

    <h2>4. Cómo Usamos Tu Información</h2>
    <ul>
      <li>Entregar detalles meteorológicos localizados en tiempo real.</li>
      <li>Mostrar información meteorológica de 10 días para ubicaciones elegidas.</li>
      <li>Convertir coordenadas geográficas en un nombre de ubicación legible usando el servicio de geocodificación inversa de Apple.</li>
      <li>Determinar la altitud de ubicaciones específicas usando la API REST de Google Elevation.</li>
      <li>Determinar la zona horaria para ubicaciones dadas usando la API REST de Google Timezone o Apple.</li>
      <li>
        Proporcionar funcionalidad de autocompletado al buscar lugares usando el SDK de Google Places Autocomplete.
      </li>
    </ul>
    <p>No usamos los datos para fines de marketing o publicidad.</p>

    <h2>5. Integraciones de Terceros</h2>
    <p>Si bien no usamos análisis ni mostramos anuncios, confiamos en servicios de terceros para funcionalidades específicas:</p>
    <ul>
      <li>
        <strong>API REST de Google Elevation:</strong> Para obtener datos de altitud para coordenadas dadas. Solo enviamos las coordenadas de ubicación actual a la API de Google.
      </li>
      <li>
        <strong>SDK de Google Places Autocomplete:</strong> Para facilitar la funcionalidad de autocompletado cuando los usuarios buscan lugares. Enviamos a Google Places el texto que escribes y el ID del lugar que eliges para obtener su nombre y ubicación.
      </li>
      <li>
        <strong>API REST de Google Timezone:</strong> Para obtener la zona horaria de la ubicación del pronóstico.
      </li>
      <li>
        <strong>API de Google Air quality para obtener Calidad del aire:</strong> Para obtener información de calidad del aire para coordenadas dadas. Solo enviamos las coordenadas de ubicación actual a la API de Google.
      </li>
    </ul>

    <h3>Políticas de privacidad de las integraciones de terceros:</h3>
    <p>
      Al usar los servicios de Google mencionados anteriormente, también estás aceptando los términos y la política de privacidad de Google.
    </p>
    <p>
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
        Política de Privacidad de Google
      </a>
    </p>

    <h2>6. Tus Opciones</h2>
    <p>
      Cuando instalas y abres la aplicación por primera vez, te pedirá permisos de ubicación. Puedes negarlo en ese momento.
    </p>
    <p>
      También tienes la opción de negar el acceso a la ubicación a la aplicación a través de la configuración de tu dispositivo.
    </p>
    <p>
      Si niegas los permisos de ubicación, algunas funciones de la aplicación pueden no funcionar, como cargar automáticamente el pronóstico para la ubicación actual al inicio o elegir la opción de ubicación actual en la pantalla de búsqueda. Pero aún puedes buscar lugares y obtener el clima.
    </p>
    <p>
      Puedes optar por no usar la integración de la API REST de Google Elevation desactivando la configuración 'Mostrar Altitud' en la pantalla de configuración. Si eliges optar por no participar de esta manera, no verás la información de altitud para las ubicaciones del pronóstico.
    </p>
    <p>
      Puedes optar por no usar la integración de la API REST de Google Air quality desactivando la configuración 'Mostrar Calidad del Aire' en la pantalla de configuración. Si eliges optar por no participar de esta manera, no verás la información de calidad del aire para las ubicaciones del pronóstico.
    </p>
    <p>
      No es posible optar por no participar en ninguna de las otras integraciones de terceros mencionadas anteriormente, ya que son cruciales para la funcionalidad central de la aplicación.
    </p>

      <h2>7. Cambios a Esta Política</h2>
      <p>
        Podríamos actualizar nuestra Política de Privacidad ocasionalmente. Si ocurre algún cambio, publicaremos rápidamente la nueva política en esta página. Se recomienda revisar esta Política de Privacidad periódicamente para mantenerse informado sobre nuestro compromiso con tu privacidad.
      </p>

      {!hideContact && (
        <>
          <h2>8. Contáctanos</h2>
          <p>
            Para preguntas, comentarios o inquietudes sobre esta Política de Privacidad, por favor contáctanos en:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </>
      )}
    </>
  );
}
