Previo al inicio de la ejecución de esta prueba, por favor lea todos los items de esta sección.

1. Atributos de Calidad de Software (5 puntos):
- Pregunta técnica: ¿Cuáles son los atributos de calidad de software más importantes y
cómo se pueden asegurar en un proyecto front-end?
R.  
- Usabilidad:  La usabilidad se refiere a la facilidad con la que los usuarios pueden interactuar con la aplicación y lograr sus objetivos. 
Como asegurarlo: Diseño centrado en el usuario, Consistencia en la interfaz, Accesibilidad.
- Rendimiento: Con un buen rendimiento hay menos tiempos de espera en las cargas de la aplicación
Como asegurarlo: Optimización de recursos, code-splitting y el almacenamiento en caché, Utilizar herramientas como Lighthouse, PageSpeed Insights o Web Vitals para monitorear y mejorar el rendimiento.
- Mantenibilidad: La mantenibilidad se refiere a la facilidad con la que el código se puede entender, modificar, y extender.
Como asegurarlo: Código limpio, Documentación, testing (e2e, unit testing, integration, UI testing. etc)
- Seguridad: proteger los datos y la funcionalidad frente a ataques maliciosos.
Como asegurarlo: Protección contra XSS y CSRF: Implementar medidas para prevenir ataques comunes como Cross-Site Scripting (XSS) y Cross-Site Request Forgery (CSRF), Utilizar protocolos de autenticación seguros como OAuth2 y cifrar los datos sensibles, Utilizar herramientas como npm audit para identificar y solucionar vulnerabilidades en las dependencias del proyecto.
- Fiabilidad: Es la capacidad del software para funcionar correctamente bajo condiciones específicas durante un período de tiempo.
Como asegurarlo: Pruebas de estrés y carga con grandes volúmenes de trafico, Gestión de errores, Monitorización en producción.
- Portabilidad: Es la capacidad del software para funcionar en diferentes entornos sin problemas.
Como asegurarlo: Responsive Design, Compatibilidad cross-browser, Uso de estándares web

2. Patrones de Diseño de Software (5 puntos):
- Ejercicio práctico: Diseñar una aplicación front-end que cumpla con el patrón de diseño
MVC (Model-View-Controller) o MVVM (Model-View-ViewModel) y explique su elección.
Puede utilizar cualquier modelo de diseño de sistemas.
R. Yo implementaria MVVM utilizando React. Utiliza componentes para la View, hooks y contextos para la ViewModel, y un estado global gestionado por Redux para el Model.
con Clean Architecture y Código Limpio en el proyecto con una clara separación entre capas

3. Metodologías Ágiles (5 puntos):
- Escenario de proyecto: Describe cómo aplicarías los principios ágiles en un proyecto
front-end. Proporciona ejemplos específicos.
R. Implica adoptar un enfoque iterativo e incremental para el desarrollo, con un fuerte énfasis en la colaboración, la flexibilidad y la entrega continua de valor de la siguiente manera.
Entregas Iterativas e Incrementales: haciendo entregas por sprint los cuales serian.
Sprint 1: Desarrollar la estructura básica de la aplicación, incluyendo la configuración del proyecto, la estructura del archivo, y un diseño básico de la interfaz de usuario (por ejemplo, la barra de navegación y el pie de página).
Sprint 2: Implementar la funcionalidad principal de una página específica, como la página de inicio, con contenido estático.
Sprint 3: Integrar funcionalidades dinámicas, como una lista de productos con filtros interactivos y la capacidad de agregar productos al carrito de compras.
Colaboración continua con interesados (stakeholders): Mantener una comunicación abierta y constante para asegurar que el desarrollo del front-end esté alineado con sus expectativas y requisitos cambiantes.
Daily Stand-ups y Demos de sprint.
Adaptabilidad y Respuesta al Cambio: En un entorno ágil, el equipo debe estar preparado para ajustar las prioridades y los planes en función de la retroalimentación del cliente o los cambios en el mercado.
Cambio en los requisitos, Iteración rápida.
Entrega Continua de Valor: Entregar valor al cliente de forma continua y temprana mediante el desarrollo de funcionalidades que puedan ser desplegadas y utilizadas de inmediato.
Lanzamientos incrementales, Primero lo más valioso.
Enfoque en la Calidad: Integrar pruebas automatizadas, revisiones de código y otras prácticas de calidad en cada etapa del desarrollo para asegurar que el producto final sea robusto y libre de errores.
Pruebas unitarias, Integración continua, Revisiones de código.
Comunicación abierta:  Promover un ambiente donde los desarrolladores puedan proponer nuevas ideas o soluciones técnicas durante las reuniones de planificación y retrospección.
sprint retrospective, sprint grooming - Refinement.
Reflexión y Mejora Continua: Después de cada sprint, el equipo reflexiona sobre lo que funcionó bien y lo que no, y realiza ajustes para mejorar el proceso en el siguiente ciclo.
sprint retrospective, Experimentación.


4. Administrador de Versiones GIT (5 puntos):
- Ejercicio práctico: Explique cómo se resuelven conflictos de fusión en un repositorio GIT.
Comprender los Conflictos de Fusión: Un conflicto de fusión ocurre cuando Git no puede determinar automáticamente cómo combinar los cambios de dos ramas. Esto suele suceder cuando dos ramas modifican la misma parte de un archivo de manera diferente. Git intentará fusionar los cambios, pero si no puede hacerlo automáticamente, marcará el conflicto para que lo resuelvas manualmente.
si tenemos una rama "main" y otra "feature(01)"  En la rama main, un desarrollador ha hecho cambios en un archivo, y en la rama feature, otro ha hecho otros cambios en la misma sección del mismo archivo.
Esto sucede en trabajo de equipos con un acuerdo de delivery en el equipo que sea por revisiones en un pull-request donde se generan los conflictos al hacer merge de la rama "feature(01)".
en mi caso y es mas personal como suelo hacerlo lo haría con git rebase interactivo para tener mas claro cada conflicto y al final se haría un squash para juntar todos los commits de la rama en uno solo ej:
git checkout main
git fetch --all
git pull
git checkout feature(01)
git pull
git rebase -i main
<<<<<<< HEAD
// Cambios en la rama actual (main)
=======
  // Cambios en la rama que estás fusionando (feature(01))
>>>>>>> feature
con el commit de squash "Feature 01 vista del cliente con lista de productos".
Claridad y limpieza del historial: Destacar cómo este enfoque no solo resuelve los conflictos, sino que también mejora la calidad del historial de commits es clave. Además, mencionar que esta técnica puede ayudar a identificar y resolver problemas de manera más granular podría reforzar la validez de este método.

5. Refactorización de Software (5 puntos):
- Código práctico: Mejora un fragmento de código front-end específico y explica tus
decisiones de refactorización. Puedes elegir un fragmento de código al azar de internet o
algún proyecto.
Antes
```
import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAdd = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>
        Add Item
      </button>
    </div>
  );
}

export default ItemList;
```
Refactor
```
import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => setNewItem(event.target.value);

  const handleAdd = () => {
    if (newItem.trim()) {
      setItems((prevItems) => [...prevItems, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>
        Add Item
      </button>
    </div>
  );
}

export default ItemList;
```

Simplificación de handleChange:

La función handleChange se simplificó a una sola línea utilizando una función de flecha.
Mejora en handleAdd:

Se añadió una comprobación para evitar agregar elementos vacíos.
Se usó la función de actualización de estado basada en el valor anterior para asegurar que setItems se basa en el estado más reciente.
Estas mejoras hacen que el código sea más conciso y eviten posibles problemas con elementos vacíos en la lista. 



6. Principios SOLID (5 puntos):
- Pregunta técnica: Explica cada uno de los principios SOLID y cómo se aplican en el
desarrollo front-end.
Los principios SOLID son un conjunto de cinco principios de diseño de software que ayudan a desarrollar sistemas más robustos, mantenibles y escalables.
- Principio de Responsabilidad Única (Single Responsibility Principle - SRP)
Este principio establece que una clase, módulo o función debe tener una única responsabilidad o razón para cambiar. Es decir, cada componente debe hacer solo una cosa y hacerlo bien.
Componentes React: En React, este principio se aplica dividiendo la interfaz en componentes pequeños y reutilizables, cada uno de los cuales maneja una única responsabilidad. Por ejemplo, un componente Button solo debería encargarse de renderizar un botón, mientras que un componente Form manejaría el envío de formularios.
Funciones en JavaScript: Cada función debe realizar una tarea específica. Por ejemplo, una función debería manejar solo la validación de un campo de entrada, mientras que otra se encargará de formatear datos.
- Principio de Abierto/Cerrado (Open/Closed Principle - OCP)
Este principio sugiere que las entidades de software (clases, módulos, funciones) deben estar abiertas para la extensión, pero cerradas para la modificación. Esto significa que el comportamiento de un componente se puede extender sin modificar su código fuente original.
Extensión de componentes: En un proyecto React, puedes extender la funcionalidad de un componente usando composición o HOCs (Higher-Order Components) en lugar de modificar directamente el componente original. Por ejemplo, podrías crear un HOC que añada comportamiento de autenticación a un componente de ruta.
CSS modular y extensible: Utilizando preprocesadores como SASS o LESS, puedes extender estilos sin modificar los archivos de estilos originales, aplicando mixins o extendiendo clases.
- Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP)
Este principio establece que los objetos de una clase derivada deben poder sustituir a objetos de la clase base sin alterar el funcionamiento del programa. En otras palabras, las clases hijas deben cumplir con las expectativas establecidas por sus clases padres.
Composición y herencia en componentes: Si creas una clase base para un componente y luego la extiendes, las instancias de la clase hija deben funcionar de manera intercambiable con la clase base. Por ejemplo, si tienes un componente Input y creas una variante PasswordInput, esta última debe comportarse como un Input en cualquier lugar donde se use.
Interfaces y tipado: En TypeScript, se puede usar interfaces para definir contratos claros entre componentes, asegurando que cualquier clase o función que implemente una interfaz puede sustituir a otra que también lo haga.
- Principio de Segregación de Interfaces (Interface Segregation Principle - ISP):
Este principio sugiere que los clientes no deben estar obligados a depender de interfaces que no utilizan. En otras palabras, es mejor tener interfaces específicas y pequeñas en lugar de una sola interfaz grande.
Props en componentes React: En lugar de crear componentes con un gran número de props, puedes crear componentes más pequeños con interfaces específicas que se encarguen de tareas más concretas. Por ejemplo, en lugar de un componente Form que acepta todas las posibles props para cualquier tipo de formulario, podrías tener un LoginForm y un RegistrationForm con sus propias props específicas.
Modularidad de servicios: Al interactuar con APIs, es mejor dividir los servicios en módulos más pequeños que manejen responsabilidades específicas. Por ejemplo, en lugar de un solo servicio API grande, podrías tener un UserService y un ProductService, cada uno con métodos enfocados en sus respectivas responsabilidades.
- Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP):
Este principio establece que los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.
Inyección de dependencias: Utilizar patrones como la inyección de dependencias en aplicaciones front-end para desacoplar los componentes de sus dependencias concretas. Por ejemplo, en un componente React, podrías pasar servicios o utilidades como props en lugar de instanciar las dependencias directamente dentro del componente.
Gestión de estado: En aplicaciones que usan Redux o Context API, los componentes no deberían depender directamente del estado global o de funciones específicas. En su lugar, deberían depender de abstracciones como mapStateToProps y mapDispatchToProps, lo que permite cambiar fácilmente las implementaciones sin modificar los componentes.


7. Código Limpio y Clean Architecture (5 puntos):
- Ejercicio práctico: Diseña una arquitectura front-end limpia y muestra cómo se relaciona
con el código limpio. Proporciona ejemplos concretos.
En el proyecto opte por esta arquitectura con esta implica estructurar la aplicación de manera que sea fácil de entender, mantener, y escalar.
Nombres descriptivos, Funciones pequeñas, Evitar duplicación, Comentarios mínimos pero útiles
se centra en la separación de responsabilidades en diferentes capas que se comunican entre sí mediante abstracciones. Las capas típicas en una aplicación front-end incluyen:

Capa de Presentación (UI)
Capa de Aplicación (State Management)
Capa de Dominio (Reglas de Negocio)
Capa de Infraestructura (APIs, Servicios)

src/
│
├── components/
│────UI/        # Capa de Presentación: Componentes de UI
│     ├── Button.tsx
│     ├── Header.tsx
│     └── ...
│
├── services/          # Capa de Infraestructura: Servicios para comunicación con APIs
│─────api/
│       └── index.ts
│
├── state/             # Capa de Aplicación: Gestión del estado (Redux, Context API)
│   ├── actions/
│   │   ├── userActions.ts
│   │   └── ...
│   ├── reducers/
│   │   ├── userReducer.ts
│   │   └── ...
│   └── store.ts
│
├── hooks/             # Reglas de negocio encapsuladas en hooks personalizados
│   ├── useAuth.ts
│   └── useFetch.ts
│
└── utils/             # Utilidades generales y funciones de ayuda
    ├── formatDate.ts
    └── validateEmail.ts


8. Estimación de Requerimientos (5 puntos):
- Escenario de proyecto: Estima el tiempo necesario para implementar una serie de
características front-end y explique tu enfoque.
Escenario de Proyecto: Desarrollo de un Módulo de Autenticación y Gestión de Usuarios
Características a Implementar:
Página de Inicio de Sesión:

Formulario de login con validación de campos.
Integración con una API para autenticación.
Manejo de errores y mensajes de retroalimentación al usuario.
Registro de Nuevos Usuarios:

Formulario de registro con validación de datos (nombre, email, contraseña, etc.).
Integración con una API para la creación de nuevos usuarios.
Manejo de errores y mensajes de éxito o fallo.
Recuperación de Contraseña:

Formulario para solicitar la recuperación de contraseña.
Integración con una API para enviar el enlace de restablecimiento de contraseña por correo electrónico.
Página para restablecer la contraseña utilizando el enlace enviado.
Gestión de Perfil de Usuario:

Página de perfil donde el usuario puede actualizar su información (nombre, email, contraseña).
Integración con una API para la actualización de datos del usuario.
Validación de datos y manejo de errores.

Estimación página de Inicio de Sesión:

Diseño del formulario de login: teniendo en cuenta que ya hay una librería de manejo de formularios con react hook forms la cual esta implementada (1 hora).
Implementación de validación de campos: ya esta con implementado un validador de schemas con zod (1 hora).
Integración con la API de autenticación: como el proyecto esta en arquitectura limpia ya hay una función para pasar un endpoint correspondiente (1 hora).
Manejo de errores y retroalimentación: Se implementará el manejo de errores utilizando async/await o promesas con then/catch, según corresponda, para capturar y manejar las respuestas de la API de autenticación. Se mostrarán mensajes de retroalimentación al usuario según los resultado (1 hora).

Registro de Nuevos Usuarios:

Diseño del formulario de registro (1 hora).
Implementación de validación de datos (1 hora).
Integración con la API de registro (1 hora).
Manejo de errores y retroalimentación (1 hora).

Recuperación de Contraseña:

Diseño del formulario de recuperación (1 hora).
Integración con la API de recuperación de contraseña (1 hora).
Diseño y desarrollo de la página de restablecimiento de contraseña (2 horas).

Gestión de Perfil de Usuario:

Diseño de la página de perfil (3 horas).
Implementación de actualización de datos del usuario (2 horas).
Integración con la API de actualización de perfil (2 horas).
Validación y manejo de errores (1 hora).

la Estimación de Tres Puntos para considerar diferentes escenarios:

Tiempo Optimista: Tiempo mínimo si todo sale perfectamente.
Tiempo Pesimista: Tiempo máximo considerando posibles problemas.
Tiempo Más Probable: Tiempo más realista basado en la experiencia.

Ajuste Basado en la Capacidad del Equipo.

Velocidad del Equipo: Ajusta la estimación de acuerdo con la experiencia y velocidad del equipo. Si el equipo es nuevo en la tecnología o el proyecto, es posible que necesites aumentar la estimación.
Disponibilidad: Considera la disponibilidad del equipo, teniendo en cuenta otros compromisos y la posible necesidad de tiempo extra para revisiones y pruebas

Estimación Final para el Módulo Completo:
Página de Inicio de Sesión: 4 horas.
Registro de Nuevos Usuarios: 4 horas.
Recuperación de Contraseña: 4 horas.
Gestión de Perfil de Usuario: 8 horas.
Total Estimado: 20 horas.

si estamos en una session de planning la puntuación se da por el esfuerzo usando alguna estrategia como planning poker. etc.
la cual el equipo le da la puntuación a la tarea sin ver que puntuación hace el resto para no traer confusion al puntuar, y se juntan las calificaciones mas altas y las mas bajas para calcular el esfuerzo mas aproximado y hacer un debate de cual es la mejor puntuación.


9. Optimización de Aplicaciones (5 puntos):
- Pregunta técnica: Describe estrategias de optimización que hayas aplicado en proyectos
front-end anteriores.
En proyectos anteriores, he implementado diversas estrategias de optimización que han tenido un impacto significativo en el rendimiento y la eficiencia de las aplicaciones. A continuación, describo algunas de las principales técnicas que he aplicado:

Evaluaciones y Optimización del Sistema:

Lideré un equipo que mejoró el rendimiento de una aplicación en un 30% mediante la evaluación completa del sistema y la optimización de puntos críticos, como la carga de scripts, la reducción del tamaño de los archivos, y la optimización de imágenes y fuentes.

Rediseño de la Interfaz de Usuario (UI):
Rediseñé la interfaz de usuario para mejorar la experiencia del usuario, lo que resultó en un aumento del 25% en el compromiso de los usuarios. Esto incluyó la simplificación de las interacciones, la mejora de la accesibilidad y la optimización del flujo de trabajo del usuario.

Reducción del Tiempo de Respuesta del Servidor:
Reduje el tiempo de respuesta del servidor en un 30% mediante la implementación de una gestión eficiente del estado y el uso de caché en las llamadas a la API. Esto se logró utilizando técnicas como el almacenamiento en caché del lado del cliente para datos que no cambian con frecuencia y la minimización de solicitudes redundantes a la API.

Uso de Contenedores y AWS para Despliegues Rápidos:
Desplegué más de cinco aplicaciones utilizando arquitectura de contenedores con AWS y ECS, lo que redujo el tiempo de despliegue en un 40%. Esta estrategia no solo optimizó el proceso de despliegue, sino que también permitió la escalabilidad automática basada en la demanda.

Mentoría y Mejora Continua:
A través de la mentoría de desarrolladores junior, logré promover a tres desarrolladores a posiciones de nivel intermedio en seis meses, mejorando así la capacidad del equipo para implementar optimizaciones y soluciones más avanzadas de manera autónoma.

10. Docker (5 puntos):
- Pregunta técnica: Explica cómo usarías Docker en un entorno de desarrollo front-end y
cuáles serían los beneficios.

Consistencia del Entorno:
Docker asegura que el entorno de desarrollo sea consistente para todos los miembros del equipo. Al usar contenedores, se eliminan problemas relacionados con la configuración del entorno local, ya que todos los desarrolladores trabajan con la misma imagen.

Reproducibilidad:
Las imágenes Docker permiten reproducir el mismo entorno en diferentes máquinas, lo que facilita la depuración de problemas que pueden surgir solo en ciertos entornos.

Aislamiento:
Los contenedores proporcionan un entorno aislado para cada aplicación. Esto evita conflictos entre diferentes versiones de dependencias o herramientas, y asegura que los cambios en un proyecto no afecten a otros.

Escalabilidad:
Docker facilita la escalabilidad, permitiendo que los entornos de desarrollo sean replicados y gestionados fácilmente. Esto es útil para pruebas de rendimiento y escalabilidad antes de despliegues en producción.

Despliegue Rápido:
Al utilizar Docker para el entorno de desarrollo, el tiempo necesario para configurar y poner en marcha un nuevo entorno es significativamente reducido. Los desarrolladores pueden empezar a trabajar rápidamente sin tener que realizar largas configuraciones manuales.

Integración Continua y Entrega Continua (CI/CD):
Docker se integra fácilmente en pipelines de CI/CD, facilitando la automatización de pruebas, construcción y despliegue de aplicaciones. Los contenedores garantizan que las pruebas se realicen en un entorno idéntico al de producción.

Compatibilidad con Diferentes Sistemas Operativos:
Docker proporciona una capa de abstracción que permite que los contenedores se ejecuten de manera consistente en cualquier sistema operativo, ya sea Windows, macOS o Linux. Esto elimina las diferencias en los entornos de desarrollo entre los miembros del equipo y simplifica el proceso de configuración en diferentes plataformas.

11. Implementación de un Componente Reutilizable (5 puntos):
- Requerimiento: Crea un componente front-end (por ejemplo, un botón personalizado)
que sea completamente reutilizable en diferentes partes de una aplicación. Debe tener
opciones de personalización y ser compatible con tanto Angular como React.
R. he creado un web component CustomButton con opciones de personalización esta en tasks/src/components/Button/CustomButton el cual se podrá usar tanto en React como an Angular


12. Gestión de Estado con Redux o NgRx (5 puntos):
- Requerimiento: Implementa la gestión de estado utilizando Redux (para React) o NgRx
(para Angular) en una pequeña aplicación de lista de tareas. Debe incluir acciones, reducers
y un componente conectado que muestre la lista de tareas.
R. Solución en el proyecto tasks y users


13. Integración con una API REST (5 puntos):
- Requerimiento: Conéctate a una API REST de ejemplo (por ejemplo, una API de
usuarios) y muestra los datos en una página front-end. Asegúrate de manejar errores y
cargar los datos de forma eficiente.
R. en el proyecto users/src/services/api 

14. Implementación de Pruebas Unitarias (5 puntos):
- Requerimiento: Escribe pruebas unitarias para una función o componente específico.
Utiliza una biblioteca de pruebas como Jest (para React) o Jasmine/Karma (para Angular).
R. se implemento un test en el llamado del api con un mok data para capturar errores cuando no cargue la data
esta en la aplicación users/src/services/api.test.js

15. Interfaz de Usuario Responsiva (5 puntos):
- Requerimiento: Diseña y desarrolla una interfaz de usuario responsiva que se adapte a
diferentes tamaños de pantalla y dispositivos. Utiliza CSS flexbox o grid para lograr la
disposición flexible de elementos.
R. Se agregan estilos usando styled component creando un Shortcut display usando el concepto mobile-first
esta en el componente de users/src/components/Users/UserListStyles.js

16. Manejo de Errores (5 puntos):
- Requerimiento: Implementa un mecanismo de manejo de errores sólido en una
aplicación front-end. Muestra mensajes de error informativos y gestiona errores de red,
entre otros.
R. se crea un middleware para capturar los errores y se hace un wrapper de la aplicación con un errorBoundary


17. Integración de Prácticas de Seguridad (5 puntos):
- Requerimiento: Identifica y mitiga posibles vulnerabilidades de seguridad en una
aplicación front-end. Asegúrate de implementar medidas como la protección contra ataques
XSS (Cross-Site Scripting).
R. se impelementa DOMPurify.sanitize() Antes de renderizar cualquier dato que podría incluir contenido HTML o datos de usuario, usa DOMPurify.sanitize() para limpiar el contenido. Esto es especialmente importante si los datos vienen de fuentes no confiables

18. Diseñar una arquitectura de microfrontends para una aplicación compuesta por tres
módulos: Administración de Usuarios, Gestión de Tareas y Reportes.

19. Implementar un contenedor principal (shell) que cargue dinámicamente los tres
microfrontends.

20. Utilizar Webpack Module Federation para la integración de los microfrontends.
Cada microfrontend debe ser desarrollado utilizando Angular o React según preferencia del
candidato.

21. Los puntos anteriores han sido entregados en forma aleatoria. Debe realizar un análisis
de los mismos y realizar la ejecución de los mismos en un orden lógico que permita tener un
único proyecto donde se puedan evidenciar todos ellos.

## Como correr los proyectos
cd tasks
npm install
npm start
cd users
npm install
npm start
cd reports
npm install
npm start

## para microfrontend container
cd shell
npm install
npm start