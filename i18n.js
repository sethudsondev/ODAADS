// ============================================================
// ODA·ADS — Traducao PT / EN / ES
// PT nao precisa de dicionario: e o conteudo padrao ja presente no
// HTML/JS. Aqui so ficam as versoes EN/ES, no mesmo formato/indice do
// conteudo original, pra aplicar por posicao (sem duplicar o PT).
// ============================================================
'use strict';

const ODA_CATS = {
  en: {
    "Engenharia de Software": "Software Engineering",
    "Banco de Dados": "Databases",
    "Programação Web": "Web Programming",
    "Redes de Computadores": "Computer Networks",
    "Algoritmos e Estruturas": "Algorithms & Data Structures",
    "Segurança da Informação": "Information Security",
  },
  es: {
    "Engenharia de Software": "Ingeniería de Software",
    "Banco de Dados": "Bases de Datos",
    "Programação Web": "Programación Web",
    "Redes de Computadores": "Redes de Computadoras",
    "Algoritmos e Estruturas": "Algoritmos y Estructuras",
    "Segurança da Informação": "Seguridad de la Información",
  },
};

const ODA_QUIZ = {
  en: [
    { q: "What is the name of the daily synchronization meeting in Scrum?", opts: ["Sprint Review", "Daily Scrum", "Sprint Planning", "Retrospective"], fb: "The Daily Scrum (or Daily Standup) happens every day in up to 15 minutes to sync the team." },
    { q: "In the MVC pattern, which layer is responsible for business logic?", opts: ["View", "Controller", "Model", "Router"], fb: "The Model handles data and business logic. View is the interface; Controller is the intermediary." },
    { q: "What is the Sprint Retrospective in Scrum?", opts: ["A meeting to plan the next Sprint", "A meeting to review the delivered product", "A meeting to inspect and adapt the team's process", "A daily 15-minute meeting"], fb: "The Retrospective happens at the end of each Sprint for the team to reflect on its process and define improvements." },
    { q: "Which UML diagram represents the sequence of messages between objects?", opts: ["Class Diagram", "Use Case Diagram", "Sequence Diagram", "State Diagram"], fb: "The Sequence Diagram shows how objects interact over time, with ordered messages." },
    { q: "What does TDD (Test-Driven Development) mean?", opts: ["Technology-driven development", "Test-driven development: write the test before the code", "A data documentation technique", "A type of automated deploy"], fb: "In TDD, the cycle is: write a failing test → write the minimum code to pass → refactor." },
    { q: "What is the Product Owner's role in Scrum?", opts: ["Manage the technical team", "Maximize product value and manage the Product Backlog", "Facilitate Scrum ceremonies", "Write the system's code"], fb: "The Product Owner represents the stakeholders, prioritizes the Backlog and ensures the team delivers value." },
    { q: "What does the acronym ACID mean in databases?", opts: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Algorithm, Cache, Indexing, Deploy", "Authentication, Encryption, Identity, Data"], fb: "ACID guarantees reliable transactions: Atomicity (all or nothing), Consistency, Isolation and Durability." },
    { q: "Which of the following is a NoSQL database?", opts: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"], fb: "MongoDB is a document-oriented NoSQL database. MySQL, PostgreSQL and Oracle are relational (SQL) databases." },
    { q: "In database normalization, what does 3NF (Third Normal Form) eliminate?", opts: ["Repeating attribute groups", "Partial dependency on the primary key", "Transitive dependency between non-key attributes", "Multivalued attributes"], fb: "3NF ensures every non-key attribute depends directly on the primary key, with no transitivity." },
    { q: "Which SQL clause is used to filter groups after a GROUP BY?", opts: ["WHERE", "HAVING", "FILTER", "ORDER BY"], fb: "HAVING filters groups after aggregation. WHERE filters rows BEFORE grouping." },
    { q: "What is an index in a database?", opts: ["A full copy of the table", "A structure that speeds up record lookups", "An integrity constraint", "A type of relationship between tables"], fb: "Indexes speed up SELECT but make INSERT/UPDATE/DELETE slightly slower." },
    { q: "Which JOIN type returns only the records that match in both tables?", opts: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"], fb: "INNER JOIN returns only records that match in both tables." },
    { q: "What does the HTTP POST method do?", opts: ["Fetch a resource from the server", "Delete an existing resource", "Send data to create a new resource", "Partially update a resource"], fb: "POST sends data to the server to create a new resource. GET fetches; DELETE removes; PATCH partially updates." },
    { q: "What is CORS (Cross-Origin Resource Sharing)?", opts: ["A type of database", "A mechanism that controls requests between different origins", "A CSS styling language", "A file transfer protocol"], fb: "CORS is a browser security mechanism that controls which origins can access resources from another origin." },
    { q: "In JavaScript, what does the Array.map() method do?", opts: ["Filters array elements", "Reduces the array to a single value", "Creates a new array by transforming each element", "Sorts the array elements"], fb: "map() returns a new array with the result of applying a function to each element of the original array." },
    { q: "What is the Virtual DOM in React?", opts: ["A virtual database", "A lightweight in-memory representation of the real DOM", "A type of functional component", "A browser API"], fb: "The Virtual DOM is a lightweight copy of the real DOM. React compares versions (diffing) and updates only what's needed." },
    { q: "Which HTTP status code indicates that a resource was not found?", opts: ["200", "301", "404", "500"], fb: "404 Not Found. 200 = OK, 301 = Redirect, 500 = Internal Server Error." },
    { q: "What is async/await in JavaScript?", opts: ["An animation library", "Syntax for working with Promises more readably", "A type of async loop", "An array method"], fb: "async/await is syntactic sugar over Promises, making asynchronous code more readable and easier to debug." },
    { q: "Which OSI layer is responsible for IP addressing?", opts: ["Data Link Layer", "Physical Layer", "Network Layer", "Transport Layer"], fb: "The Network Layer (Layer 3) handles logical addressing (IP) and routing between networks." },
    { q: "Which protocol is used by default for secure web communication (HTTPS)?", opts: ["FTP", "SSH", "TLS/SSL", "UDP"], fb: "HTTPS uses TLS (Transport Layer Security) to encrypt communication between client and server." },
    { q: "What does the CIDR notation /24 mean in a network address?", opts: ["24 available hosts", "A 24-bit mask (255.255.255.0), allowing 254 hosts", "24 subnets", "A speed of 24 Mbps"], fb: "/24 means the first 24 bits are the network part, leaving 8 bits for hosts (254 usable)." },
    { q: "What is the main difference between TCP and UDP?", opts: ["TCP is faster; UDP is more reliable", "TCP guarantees ordered delivery; UDP is connectionless and faster", "TCP is for video; UDP is for text", "There is no practical difference"], fb: "TCP uses handshakes and acknowledgments (reliable and ordered). UDP doesn't confirm delivery, used in streaming and gaming." },
    { q: "Which protocol translates domain names into IP addresses?", opts: ["DHCP", "DNS", "FTP", "SMTP"], fb: "DNS (Domain Name System) translates names like 'google.com' into IP addresses like '142.250.74.46'." },
    { q: "What is NAT (Network Address Translation)?", opts: ["A type of network cable", "Translation of private addresses into public ones, allowing IP sharing", "A dynamic routing protocol", "A type of firewall"], fb: "NAT allows multiple devices on a private network to share a single public IP." },
    { q: "What is the time complexity of Binary Search on a sorted array?", opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"], fb: "Binary Search halves the search space each iteration → O(log n)." },
    { q: "Which data structure follows the LIFO (Last In, First Out) principle?", opts: ["Queue", "Stack", "Binary Tree", "Linked List"], fb: "The Stack works like a stack of plates: the last one in is the first one out." },
    { q: "Which sorting algorithm has an average time complexity of O(n log n)?", opts: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"], fb: "Merge Sort recursively splits the array and merges it, guaranteeing O(n log n) in all cases." },
    { q: "In object-oriented programming, what is encapsulation?", opts: ["Creating objects from a class", "Inheriting attributes from another class", "Hiding internal details while exposing only the necessary interface", "Overriding methods from the parent class"], fb: "Encapsulation protects internal data via access modifiers (private/public/protected)." },
    { q: "What is a Binary Search Tree (BST)?", opts: ["A tree where every node has exactly 2 children", "A tree where left nodes are smaller and right nodes are larger than the parent", "A tree used only for sorting", "A tree with always-balanced height"], fb: "In a BST, for each node: all values to the left are smaller and to the right are larger." },
    { q: "What is SQL Injection?", opts: ["A technique to optimize SQL queries", "An attack that inserts malicious SQL code into input fields", "A database backup method", "A type of database index"], fb: "SQL Injection happens when user data is inserted directly into a query without sanitization." },
    { q: "What do the CIA principles represent in information security?", opts: ["Control, Integrity, Access", "Confidentiality, Integrity, Availability", "Encryption, Identification, Authentication", "Code, Interface, Application"], fb: "CIA Triad: Confidentiality (restricted access), Integrity (unaltered data) and Availability (accessible system)." },
    { q: "What is the difference between symmetric and asymmetric encryption?", opts: ["Symmetric uses different keys; asymmetric uses the same key", "Symmetric uses the same key; asymmetric uses a key pair (public/private)", "Symmetric is more secure; asymmetric is faster", "There is no practical difference"], fb: "Symmetric (AES): same key to encrypt/decrypt. Asymmetric (RSA): public key encrypts, private key decrypts." },
    { q: "What is XSS (Cross-Site Scripting)?", opts: ["A password brute-force attack", "Injection of malicious scripts into web pages viewed by other users", "Network traffic interception", "A type of denial-of-service attack"], fb: "XSS injects malicious JavaScript code into trusted pages, executed in the victim's browser." },
    { q: "Which Brazilian law regulates personal data protection?", opts: ["Access to Information Law (LAI)", "General Data Protection Law (LGPD, Law 13.709/2018)", "Consumer Protection Code", "Internet Civil Rights Framework"], fb: "The LGPD (Law 13.709/2018) regulates personal data processing in Brazil, inspired by the European GDPR." },
  ],
  es: [
    { q: "¿Cuál es el nombre de la reunión diaria de sincronización en Scrum?", opts: ["Sprint Review", "Daily Scrum", "Sprint Planning", "Retrospective"], fb: "El Daily Scrum (o Daily Standup) ocurre todos los días en hasta 15 minutos para sincronizar al equipo." },
    { q: "En el modelo MVC, ¿qué capa es responsable de la lógica de negocio?", opts: ["View", "Controller", "Model", "Router"], fb: "El Model se encarga de los datos y la lógica de negocio. View es la interfaz; Controller es el intermediario." },
    { q: "¿Qué es la Sprint Retrospective en Scrum?", opts: ["Reunión para planificar el próximo Sprint", "Reunión para revisar el producto entregado", "Reunión para inspeccionar y adaptar el proceso del equipo", "Reunión diaria de 15 minutos"], fb: "La Retrospective ocurre al final de cada Sprint para que el equipo reflexione sobre su proceso y defina mejoras." },
    { q: "¿Qué diagrama UML representa la secuencia de mensajes entre objetos?", opts: ["Diagrama de Clases", "Diagrama de Casos de Uso", "Diagrama de Secuencia", "Diagrama de Estados"], fb: "El Diagrama de Secuencia muestra cómo interactúan los objetos a lo largo del tiempo, con mensajes ordenados." },
    { q: "¿Qué significa TDD (Test-Driven Development)?", opts: ["Desarrollo guiado por tecnología", "Desarrollo guiado por pruebas: escribir la prueba antes del código", "Técnica de documentación de datos", "Tipo de despliegue automatizado"], fb: "En TDD, el ciclo es: escribir la prueba (falla) → escribir el código mínimo (pasa) → refactorizar." },
    { q: "¿Cuál es el papel del Product Owner en Scrum?", opts: ["Gestionar el equipo técnico", "Maximizar el valor del producto y gestionar el Product Backlog", "Facilitar las ceremonias de Scrum", "Escribir el código del sistema"], fb: "El Product Owner representa a los stakeholders, prioriza el Backlog y garantiza que el equipo entregue valor." },
    { q: "¿Qué significa la sigla ACID en bases de datos?", opts: ["Atomicidad, Consistencia, Aislamiento, Durabilidad", "Acceso, Control, Integridad, Datos", "Algoritmo, Caché, Indexación, Despliegue", "Autenticación, Cifrado, Identidad, Datos"], fb: "ACID garantiza transacciones confiables: Atomicidad (todo o nada), Consistencia, Aislamiento y Durabilidad." },
    { q: "¿Cuál de las siguientes es una base de datos NoSQL?", opts: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"], fb: "MongoDB es NoSQL orientada a documentos. MySQL, PostgreSQL y Oracle son bases de datos relacionales (SQL)." },
    { q: "En la normalización de bases de datos, ¿qué elimina la 3FN (Tercera Forma Normal)?", opts: ["Grupos de atributos repetidos", "Dependencia parcial de la clave primaria", "Dependencia transitiva entre atributos no clave", "Atributos multivaluados"], fb: "La 3FN garantiza que todo atributo no clave dependa directamente de la clave primaria, sin transitividad." },
    { q: "¿Qué cláusula SQL se usa para filtrar grupos después de un GROUP BY?", opts: ["WHERE", "HAVING", "FILTER", "ORDER BY"], fb: "HAVING filtra grupos después de la agregación. WHERE filtra filas ANTES de la agrupación." },
    { q: "¿Qué es un índice en una base de datos?", opts: ["Una copia completa de la tabla", "Una estructura que acelera la búsqueda de registros", "Una restricción de integridad", "Un tipo de relación entre tablas"], fb: "Los índices acelerán el SELECT pero hacen que INSERT/UPDATE/DELETE sean un poco más lentos." },
    { q: "¿Qué tipo de JOIN retorna solo los registros que coinciden en ambas tablas?", opts: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"], fb: "INNER JOIN retorna solo los registros que coinciden en ambas tablas." },
    { q: "¿Qué hace el método HTTP POST?", opts: ["Busca un recurso en el servidor", "Elimina un recurso existente", "Envía datos para crear un nuevo recurso", "Actualiza parcialmente un recurso"], fb: "POST envía datos al servidor para crear un nuevo recurso. GET busca; DELETE elimina; PATCH actualiza parcialmente." },
    { q: "¿Qué es CORS (Cross-Origin Resource Sharing)?", opts: ["Un tipo de base de datos", "Mecanismo que controla solicitudes entre distintos orígenes", "Un lenguaje de estilos CSS", "Un protocolo de transferencia de archivos"], fb: "CORS es un mecanismo de seguridad del navegador que controla qué orígenes pueden acceder a recursos de otro origen." },
    { q: "En JavaScript, ¿qué hace el método Array.map()?", opts: ["Filtra elementos del array", "Reduce el array a un único valor", "Crea un nuevo array transformando cada elemento", "Ordena los elementos del array"], fb: "map() retorna un nuevo array con el resultado de aplicar una función a cada elemento del array original." },
    { q: "¿Qué es el Virtual DOM en React?", opts: ["Una base de datos virtual", "Una representación ligera del DOM real en memoria", "Un tipo de componente funcional", "Una API del navegador"], fb: "El Virtual DOM es una copia ligera del DOM real. React compara versiones (diffing) y actualiza solo lo necesario." },
    { q: "¿Qué código de estado HTTP indica que un recurso no fue encontrado?", opts: ["200", "301", "404", "500"], fb: "404 Not Found. 200 = OK, 301 = Redirección, 500 = Error interno del servidor." },
    { q: "¿Qué es async/await en JavaScript?", opts: ["Una biblioteca de animaciones", "Sintaxis para trabajar con Promises de forma más legible", "Un tipo de bucle asíncrono", "Un método de array"], fb: "async/await es azúcar sintáctico sobre las Promises, haciendo el código asíncrono más legible y fácil de depurar." },
    { q: "¿Qué capa del modelo OSI es responsable del direccionamiento IP?", opts: ["Capa de Enlace", "Capa Física", "Capa de Red", "Capa de Transporte"], fb: "La Capa de Red (Capa 3) se encarga del direccionamiento lógico (IP) y del enrutamiento entre redes." },
    { q: "¿Qué protocolo se usa por defecto para comunicación segura en la web (HTTPS)?", opts: ["FTP", "SSH", "TLS/SSL", "UDP"], fb: "HTTPS usa TLS (Transport Layer Security) para cifrar la comunicación entre cliente y servidor." },
    { q: "¿Qué significa la notación CIDR /24 en una dirección de red?", opts: ["24 hosts disponibles", "Máscara de 24 bits (255.255.255.0), permitiendo 254 hosts", "24 subredes", "Velocidad de 24 Mbps"], fb: "/24 significa que los primeros 24 bits son la parte de red, dejando 8 bits para hosts (254 utilizables)." },
    { q: "¿Cuál es la principal diferencia entre TCP y UDP?", opts: ["TCP es más rápido; UDP es más confiable", "TCP garantiza entrega ordenada; UDP no orientado a conexión y más rápido", "TCP es para video; UDP es para texto", "No hay diferencia práctica"], fb: "TCP usa handshake y confirmaciones (confiable y ordenado). UDP no confirma la entrega, usado en streaming y juegos." },
    { q: "¿Qué protocolo traduce nombres de dominio a direcciones IP?", opts: ["DHCP", "DNS", "FTP", "SMTP"], fb: "DNS (Domain Name System) traduce nombres como 'google.com' a direcciones IP como '142.250.74.46'." },
    { q: "¿Qué es NAT (Network Address Translation)?", opts: ["Un tipo de cable de red", "Traducción de direcciones privadas a públicas, permitiendo compartir una IP", "Protocolo de enrutamiento dinámico", "Tipo de firewall"], fb: "NAT permite que múltiples dispositivos de una red privada compartan una única IP pública." },
    { q: "¿Cuál es la complejidad de la Búsqueda Binaria en un array ordenado?", opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"], fb: "La Búsqueda Binaria divide el espacio de búsqueda a la mitad en cada iteración → O(log n)." },
    { q: "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?", opts: ["Cola (Queue)", "Pila (Stack)", "Árbol Binario", "Lista Enlazada"], fb: "La Pila (Stack) funciona como una pila de platos: el último en entrar es el primero en salir." },
    { q: "¿Qué algoritmo de ordenamiento tiene complejidad media O(n log n)?", opts: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"], fb: "Merge Sort divide el array recursivamente y lo combina, garantizando O(n log n) en todos los casos." },
    { q: "En programación orientada a objetos, ¿qué es el encapsulamiento?", opts: ["Crear objetos a partir de una clase", "Heredar atributos de otra clase", "Ocultar detalles internos exponiendo solo la interfaz necesaria", "Sobrescribir métodos de la clase padre"], fb: "El encapsulamiento protege datos internos mediante modificadores de acceso (private/public/protected)." },
    { q: "¿Qué es un Árbol Binario de Búsqueda (BST)?", opts: ["Árbol donde cada nodo tiene exactamente 2 hijos", "Árbol donde los nodos a la izquierda son menores y a la derecha mayores que el padre", "Árbol usado solo para ordenar", "Árbol con altura siempre balanceada"], fb: "En un BST, para cada nodo: todos los valores a la izquierda son menores y a la derecha son mayores." },
    { q: "¿Qué es SQL Injection?", opts: ["Técnica para optimizar consultas SQL", "Ataque que inserta código SQL malicioso en campos de entrada", "Método de respaldo de la base de datos", "Tipo de índice en base de datos"], fb: "SQL Injection ocurre cuando los datos del usuario se insertan directamente en la consulta sin sanitización." },
    { q: "¿Qué representan los principios CIA en seguridad de la información?", opts: ["Control, Integridad, Acceso", "Confidencialidad, Integridad, Disponibilidad", "Cifrado, Identificación, Autenticación", "Código, Interfaz, Aplicación"], fb: "CIA Triad: Confidencialidad (acceso restringido), Integridad (datos no alterados) y Disponibilidad (sistema accesible)." },
    { q: "¿Cuál es la diferencia entre cifrado simétrico y asimétrico?", opts: ["Simétrico usa claves diferentes; asimétrico usa la misma clave", "Simétrico usa la misma clave; asimétrico usa un par de claves (pública/privada)", "Simétrico es más seguro; asimétrico es más rápido", "No hay diferencia práctica"], fb: "Simétrico (AES): misma clave para cifrar/descifrar. Asimétrico (RSA): clave pública cifra, privada descifra." },
    { q: "¿Qué es XSS (Cross-Site Scripting)?", opts: ["Ataque de fuerza bruta de contraseñas", "Inyección de scripts maliciosos en páginas web vistas por otros usuarios", "Intercepción de tráfico de red", "Tipo de ataque de denegación de servicio"], fb: "XSS inyecta código JavaScript malicioso en páginas confiables, ejecutado en el navegador de la víctima." },
    { q: "¿Qué ley brasileña regula la protección de datos personales?", opts: ["Ley de Acceso a la Información (LAI)", "Ley General de Protección de Datos (LGPD, Ley 13.709/2018)", "Código de Defensa del Consumidor", "Marco Civil de Internet"], fb: "La LGPD (Ley 13.709/2018) regula el tratamiento de datos personales en Brasil, inspirada en el GDPR europeo." },
  ],
};

// term/def na mesma ordem dos .fc-card no HTML (categoria fica de fora - e curta e ja tecnica)
const ODA_FLASHCARDS = {
  en: [
    { term: "REST API", def: "Interface that allows communication between systems using HTTP verbs (GET, POST, PUT, DELETE) and JSON format. Follows stateless principles and resources identified by URIs." },
    { term: "Big-O Notation", def: "Mathematical notation that describes the limiting behavior of a function. Measures time/space complexity. O(1) constant, O(n) linear, O(log n) logarithmic, O(n²) quadratic." },
    { term: "ACID", def: "<b>A</b>tomicity: all or nothing. <b>C</b>onsistency: data is always valid. <b>I</b>solation: independent transactions. <b>D</b>urability: data persists even after failures." },
    { term: "MVC", def: "Architectural pattern: <b>M</b>odel (data and business rules), <b>V</b>iew (user interface) and <b>C</b>ontroller (control logic). Separates responsibilities and eases maintenance." },
    { term: "TCP vs UDP", def: "<b>TCP</b>: connection-oriented, guaranteed and ordered delivery, slower. <b>UDP</b>: connectionless, no guaranteed delivery, much faster. UDP used in streaming, games, DNS." },
    { term: "JWT", def: "JSON Web Token: stateless authentication standard. Structure: <b>Header</b> (algorithm) + <b>Payload</b> (claims) + <b>Signature</b>. The server signs it; the client sends it with every request." },
    { term: "Git · Branch", def: "Independent code branch. Allows developing isolated features without affecting the main branch. Strategies: Git Flow (main/develop/feature), GitHub Flow (main/feature)." },
    { term: "Normalization", def: "Process of organizing tables to reduce redundancy. <b>1NF</b>: eliminate repeating groups. <b>2NF</b>: full dependency on the PK. <b>3NF</b>: no transitive dependency between attributes." },
    { term: "IaaS · PaaS · SaaS", def: "<b>IaaS</b>: virtual infrastructure (servers, networks). <b>PaaS</b>: platform for developers (runtime, managed DB). <b>SaaS</b>: ready-to-use software via browser." },
    { term: "OWASP Top 10", def: "List of the 10 most critical vulnerabilities in web applications. Includes: Injection (SQL, NoSQL), Broken Auth, XSS, IDOR, Security Misconfiguration, outdated components and SSRF." },
    { term: "UML · Class Diagram", def: "Represents the static structure of a system: classes, attributes, methods and relationships. Associations: inheritance (solid triangle), composition (solid diamond), aggregation (hollow diamond)." },
    { term: "Scrum Sprint", def: "1 to 4 week development cycle with a defined goal. Ceremonies: <b>Planning</b> (plan), <b>Daily</b> (sync), <b>Review</b> (demonstrate) and <b>Retrospective</b> (improve)." },
  ],
  es: [
    { term: "API REST", def: "Interfaz que permite la comunicación entre sistemas usando verbos HTTP (GET, POST, PUT, DELETE) y formato JSON. Sigue principios stateless y recursos identificados por URIs." },
    { term: "Notación Big-O", def: "Notación matemática que describe el comportamiento límite de una función. Mide complejidad de tiempo/espacio. O(1) constante, O(n) lineal, O(log n) logarítmica, O(n²) cuadrática." },
    { term: "ACID", def: "<b>A</b>tomicidad: todo o nada. <b>C</b>onsistencia: datos siempre válidos. <b>I</b>solamiento: transacciones independientes. <b>D</b>urabilidad: los datos persisten incluso tras fallos." },
    { term: "MVC", def: "Patrón arquitectónico: <b>M</b>odel (datos y reglas de negocio), <b>V</b>iew (interfaz de usuario) y <b>C</b>ontroller (lógica de control). Separa responsabilidades y facilita el mantenimiento." },
    { term: "TCP vs UDP", def: "<b>TCP</b>: orientado a conexión, entrega garantizada y ordenada, más lento. <b>UDP</b>: sin conexión, entrega no garantizada, mucho más rápido. UDP usado en streaming, juegos, DNS." },
    { term: "JWT", def: "JSON Web Token: estándar de autenticación stateless. Estructura: <b>Header</b> (algoritmo) + <b>Payload</b> (claims) + <b>Signature</b>. El servidor lo firma; el cliente lo envía en cada solicitud." },
    { term: "Git · Branch", def: "Ramificación independiente del código. Permite desarrollar funcionalidades aisladas sin afectar la rama principal. Estrategias: Git Flow (main/develop/feature), GitHub Flow (main/feature)." },
    { term: "Normalización", def: "Proceso de organizar tablas para reducir redundancia. <b>1FN</b>: eliminar grupos repetidos. <b>2FN</b>: dependencia total de la PK. <b>3FN</b>: sin dependencia transitiva entre atributos." },
    { term: "IaaS · PaaS · SaaS", def: "<b>IaaS</b>: infraestructura virtual (servidores, redes). <b>PaaS</b>: plataforma para desarrolladores (runtime, BD administrada). <b>SaaS</b>: software listo para el usuario final vía navegador." },
    { term: "OWASP Top 10", def: "Lista de las 10 vulnerabilidades más críticas en aplicaciones web. Incluye: Injection (SQL, NoSQL), Broken Auth, XSS, IDOR, Security Misconfiguration, componentes obsoletos y SSRF." },
    { term: "UML · Diagrama de Clases", def: "Representa la estructura estática de un sistema: clases, atributos, métodos y relaciones. Asociaciones: herencia (triángulo sólido), composición (rombo sólido), agregación (rombo vacío)." },
    { term: "Scrum Sprint", def: "Ciclo de desarrollo de 1 a 4 semanas con un objetivo definido. Ceremonias: <b>Planning</b> (planificar), <b>Daily</b> (sincronizar), <b>Review</b> (demostrar) y <b>Retrospective</b> (mejorar)." },
  ],
};

// q/a na mesma ordem dos .accordion-item do HTML (9 itens)
const ODA_FAQ = {
  en: [
    { q: "ADS or Computer Science: which one to choose?", a: "ADS is more practical and market-oriented, focused on systems development, databases and networks. Computer Science is more theoretical, going deeper into math, physics and computing fundamentals. If you want to work as a developer more quickly, ADS is a great choice." },
    { q: "Which programming language should I learn first?", a: "Python is excellent for beginners due to its clean syntax and wide use in data science, AI and web. JavaScript is essential for web development. In ADS, you usually learn both during the course. The most important thing is understanding programming logic first." },
    { q: "Do you need a lot of math for ADS?", a: "More than advanced calculus, you'll need mathematical logic, discrete math, boolean algebra and some statistics. The ADS course is much more accessible mathematically than Computer Science, but logical reasoning is essential." },
    { q: "What do you need to get your first job in the field?", a: "A GitHub portfolio with real projects, proficiency in at least one backend and one frontend language, basic SQL database knowledge, and soft skills like communication and teamwork. An internship during the course greatly speeds up entry into the market." },
    { q: "Front-end, back-end or full-stack?", a: "Front-end handles the user interface (HTML, CSS, JS, React). Back-end handles the server, business rules and database. Full-stack does both. For beginners, it's recommended to focus on one side first. Full-stack comes with experience." },
    { q: "What is an ODA and how does it work?", a: "A <strong>Digital Learning Object (ODA)</strong> is an interactive educational resource that makes learning easier. This ODA covers the main areas of the ADS course (modules, flashcards, quiz and certificate), all in a single file accessible from the browser." },
    { q: "How long does it take to complete the ADS course?", a: "The ADS course lasts <strong>two and a half years</strong> (5 semesters). In distance learning, as at UNIGRANDE, the workload is 2,000 hours, spread across theoretical courses, practical work and extension projects." },
    { q: "What are the main career paths for an ADS professional?", a: "ADS graduates can work as: <strong>Web Developer</strong>, <strong>Systems Analyst</strong>, <strong>Database Analyst</strong>, <strong>Software Engineer</strong>, <strong>Cybersecurity Analyst</strong> and <strong>Data Analyst</strong>. The IT market is one of the fastest-growing in Brazil." },
    { q: "How to prepare for the IT market while still in the course?", a: "Practical tips: <strong>1)</strong> Build a GitHub portfolio; <strong>2)</strong> Take free certifications (Cisco, Google, AWS); <strong>3)</strong> Practice programming logic on HackerRank; <strong>4)</strong> Join tech communities; <strong>5)</strong> Contribute to open source projects. Consistent practice is worth more than a single certificate." },
  ],
  es: [
    { q: "¿ADS o Ciencias de la Computación: cuál elegir?", a: "ADS es más práctico y orientado al mercado, enfocado en desarrollo de sistemas, bases de datos y redes. Ciencias de la Computación es más teórica, profundizando en matemáticas, física y fundamentos computacionales. Si quieres trabajar como desarrollador(a) más rápido, ADS es una excelente opción." },
    { q: "¿Qué lenguaje de programación aprender primero?", a: "Python es excelente para principiantes por su sintaxis limpia y su uso extendido en ciencia de datos, IA y web. JavaScript es indispensable para el desarrollo web. En ADS, generalmente aprendes ambos durante el curso. Lo más importante es entender primero la lógica de programación." },
    { q: "¿Se necesita mucha matemática para ADS?", a: "Más que cálculo avanzado, necesitarás lógica matemática, matemática discreta, álgebra booleana y nociones de estadística. El curso de ADS es mucho más accesible matemáticamente que Ciencias de la Computación, pero el razonamiento lógico es fundamental." },
    { q: "¿Qué se necesita para conseguir el primer empleo en el área?", a: "Un portafolio en GitHub con proyectos reales, dominio de al menos un lenguaje backend y uno frontend, conocimiento básico de bases de datos SQL y habilidades blandas como comunicación y trabajo en equipo. Una pasantía durante el curso acelera mucho la entrada al mercado." },
    { q: "¿Front-end, back-end o full-stack?", a: "Front-end se encarga de la interfaz de usuario (HTML, CSS, JS, React). Back-end se encarga del servidor, las reglas de negocio y la base de datos. Full-stack hace ambas cosas. Para principiantes, se recomienda enfocarse primero en un lado. Full-stack llega con la experiencia." },
    { q: "¿Qué es un ODA y cómo funciona?", a: "Un <strong>Objeto Digital de Aprendizaje (ODA)</strong> es un recurso educativo interactivo para facilitar el aprendizaje. Este ODA cubre las principales áreas del curso de ADS (módulos, flashcards, quiz y certificado), todo en un único archivo accesible desde el navegador." },
    { q: "¿Cuánto tiempo lleva completar el curso de ADS?", a: "El curso de ADS tiene una duración de <strong>dos años y medio</strong> (5 semestres). En la modalidad a distancia, como en UNIGRANDE, la carga horaria es de 2.000 horas, distribuidas en materias teóricas, prácticas y proyectos de extensión." },
    { q: "¿Cuáles son las principales áreas de actuación del profesional de ADS?", a: "El egresado de ADS puede trabajar como: <strong>Desarrollador Web</strong>, <strong>Analista de Sistemas</strong>, <strong>Analista de Bases de Datos</strong>, <strong>Ingeniero de Software</strong>, <strong>Analista de Ciberseguridad</strong> y <strong>Analista de Datos</strong>. El mercado de TI es uno de los que más crece en Brasil." },
    { q: "¿Cómo prepararse para el mercado de TI durante el curso?", a: "Consejos prácticos: <strong>1)</strong> Crea un portafolio en GitHub; <strong>2)</strong> Obtén certificaciones gratuitas (Cisco, Google, AWS); <strong>3)</strong> Practica lógica de programación en HackerRank; <strong>4)</strong> Participa en comunidades de tecnología; <strong>5)</strong> Contribuye a proyectos open source. La práctica constante vale más que un certificado aislado." },
  ],
};

// title/desc na mesma ordem dos .roadmap-item (5 itens)
const ODA_ROADMAP = {
  en: [
    { title: "Fundamentals", desc: "Programming logic, algorithms and data structures. The foundation of everything. Without it, nothing works." },
    { title: "Languages & Web", desc: "Python, JavaScript, HTML/CSS. Building interfaces and server logic, from theory to practice." },
    { title: "Databases", desc: "Modeling, SQL, integration with applications. Data is the heart of modern systems." },
    { title: "Engineering & Processes", desc: "Scrum, Git, documentation, teamwork. The market demands professionals who know how to collaborate." },
    { title: "Job Market", desc: "GitHub portfolio, real projects, internships and first jobs. The start of your career!" },
  ],
  es: [
    { title: "Fundamentos", desc: "Lógica de programación, algoritmos y estructuras de datos. La base de todo. Sin ella, nada funciona." },
    { title: "Lenguajes y Web", desc: "Python, JavaScript, HTML/CSS. Construyendo interfaces y lógica de servidor, de la teoría a la práctica." },
    { title: "Bases de Datos", desc: "Modelado, SQL, integración con aplicaciones. Los datos son el corazón de los sistemas modernos." },
    { title: "Ingeniería y Procesos", desc: "Scrum, Git, documentación, trabajo en equipo. El mercado exige profesionales que sepan colaborar." },
    { title: "Mercado Laboral", desc: "Portafolio en GitHub, proyectos reales, pasantías y primeros empleos. ¡El inicio de la carrera!" },
  ],
};

// Modulos detalhados (modais). Cada modulo: tag, title, subtitle (null pro
// mod-fund, que nao tem), intro, topics (mod-fund: array de strings; os
// outros: array de {title, desc}), codeLabel (so mod-fund tem exemplo de codigo).
const ODA_MODULES = {
  en: {
    'mod-fund': {
      tag: "Module 1", title: "ADS Fundamentals", subtitle: null,
      intro: "Systems Analysis and Development is the foundation for anyone who wants to work in software development. This module covers the essential concepts to start the journey.",
      topics: [
        "What ADS is and the IT field",
        "Hardware: CPU, memory, storage",
        "Software: operating systems and applications",
        "Programming logic and algorithms",
        "Variables, data types and control structures",
        "Introduction to programming with Python",
        "The IT job market",
        "The Systems Analyst profile",
      ],
      codeLabel: "Python · First program",
    },
    'mod-eng': {
      tag: null, title: "Software Engineering", subtitle: "Module 01 · Processes & Quality",
      intro: "Software Engineering applies engineering principles to software development, ensuring systems are reliable, efficient, maintainable and delivered on time.",
      topics: [
        { title: "Software Lifecycle", desc: "Requirements, Design, Implementation, Testing and Maintenance. Each phase has inputs, outputs and quality criteria." },
        { title: "Scrum", desc: "Agile framework with 1 to 4 week Sprints. Roles: Product Owner, Scrum Master and Dev Team. Ceremonies: Planning, Daily, Review, Retro." },
        { title: "UML", desc: "Unified modeling language. Class, Sequence, Use Case and State diagrams are the most tested in ADS." },
        { title: "Requirements", desc: "Functional (what the system does) vs Non-Functional (performance, security, usability). Techniques: interview, prototyping and use cases." },
        { title: "Kanban", desc: "Flow visualization with To Do, In Progress and Done columns. Limits WIP to reduce bottlenecks and increase flow." },
        { title: "Software Testing", desc: "Unit, Integration, System and Acceptance. TDD: write the test before the code. Code coverage as a quality metric." },
      ],
    },
    'mod-bd': {
      tag: null, title: "Databases", subtitle: "Module 02 · Data & SQL",
      intro: "Databases are the heart of any modern system. Understanding modeling, SQL and the ACID properties is essential for any developer.",
      topics: [
        { title: "Relational Model", desc: "Tables, columns, rows, primary keys (PK) and foreign keys (FK). ER diagram to model entities and relationships." },
        { title: "Normalization", desc: "1NF eliminates repeating groups. 2NF requires full dependency on the PK. 3NF eliminates transitive dependency. Goal: reduce redundancy." },
        { title: "SQL", desc: "DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE). JOIN: INNER, LEFT, RIGHT, FULL OUTER." },
        { title: "ACID", desc: "Atomicity, Consistency, Isolation and Durability. Guarantee integrity even in failures or concurrent access to the database." },
        { title: "NoSQL", desc: "Document (MongoDB), Key-Value (Redis), Column (Cassandra), Graph (Neo4j). Flexible and horizontally scalable." },
        { title: "Indexes & Performance", desc: "Indexes speed up SELECT but make INSERT/UPDATE slower. EXPLAIN analyzes query execution plans." },
      ],
    },
    'mod-web': {
      tag: null, title: "Web Programming", subtitle: "Module 03 · Front-end & Back-end",
      intro: "Web development involves creating interfaces (front-end) and server logic (back-end). Full-stack developers master both sides and know how to connect them via APIs.",
      topics: [
        { title: "HTML5 & CSS3", desc: "HTML semantics (header, nav, main, article). Flexbox and Grid for layout. Responsiveness with media queries and relative units." },
        { title: "JavaScript", desc: "ES6+: arrow functions, destructuring, async/await, modules. DOM manipulation, events and fetch API. The foundation of all modern front-end." },
        { title: "REST API", desc: "HTTP verbs (GET, POST, PUT, PATCH, DELETE). Status codes 200, 201, 400, 401, 404, 500. JSON as data format. JWT authentication." },
        { title: "React", desc: "Functional components, Props, State, useEffect. Virtual DOM for efficient rendering. Ecosystem: React Router, Axios, Zustand." },
        { title: "Node.js & Express", desc: "JavaScript on the server. Building REST APIs, middleware, routes and database connections. npm to manage project dependencies." },
        { title: "Git & Deploy", desc: "Version control with Git and GitHub. Deploy on Vercel (front-end), Railway/Render (back-end). Basic CI/CD with GitHub Actions." },
      ],
    },
    'mod-redes': {
      tag: null, title: "Computer Networks", subtitle: "Module 04 · Protocols & Infrastructure",
      intro: "Computer networks are the backbone of the internet and any distributed system. Understanding protocols, addressing and security is essential for modern developers.",
      topics: [
        { title: "OSI Model (7 layers)", desc: "Physical, Data Link, Network, Transport, Session, Presentation and Application. Each layer has specific functions and protocols." },
        { title: "TCP/IP", desc: "The internet's protocol stack. TCP guarantees ordered, reliable delivery; UDP is fast, with no acknowledgment. The base of all web communication." },
        { title: "IP Addressing", desc: "IPv4 (32 bits, e.g. 192.168.1.1), IPv6 (128 bits). Subnets with CIDR (/24 = 254 hosts). NAT for private networks." },
        { title: "Application Protocols", desc: "HTTP/HTTPS (web), DNS (names to IPs), SMTP/IMAP (email), FTP (files), SSH (secure remote access)." },
        { title: "Cloud Computing", desc: "IaaS (infrastructure), PaaS (platform), SaaS (software). Providers: AWS, GCP, Azure. On-premise vs public cloud models." },
        { title: "Network Security", desc: "Firewall, VPN, SSL/TLS. Attacks: DDoS, Man-in-the-Middle, Spoofing. Symmetric vs asymmetric encryption." },
      ],
    },
    'mod-algo': {
      tag: null, title: "Algorithms & Data Structures", subtitle: "Module 05 · Logic & Complexity",
      intro: "Algorithms are the heart of programming. Knowing how to choose the right data structure and understanding time and space complexity is what sets an average developer apart from an excellent one.",
      topics: [
        { title: "Big-O Notation", desc: "O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n²) quadratic. Measures growth relative to input size." },
        { title: "Arrays & Lists", desc: "Array: O(1) access, O(n) insertion. Linked list: O(1) insertion, O(n) access. Stack (LIFO) and Queue (FIFO) as special cases." },
        { title: "Trees", desc: "Binary tree, BST (efficient search), AVL (balanced). Traversals: pre-order, in-order, post-order. Heap for priority queues." },
        { title: "Sorting", desc: "Bubble Sort O(n²), Merge Sort O(n log n), Quick Sort O(n log n) average. The choice depends on the input data profile." },
        { title: "Search", desc: "Linear search O(n) vs binary search O(log n), which requires a sorted array. Hash Map with O(1) average access and search." },
        { title: "Graphs", desc: "BFS (breadth) and DFS (depth). Dijkstra for shortest paths. Applications: social networks, routes, package dependencies." },
      ],
    },
    'mod-seg': {
      tag: null, title: "Information Security", subtitle: "Module 06 · Protection & Compliance",
      intro: "Security isn't a feature added later. It's a practice built into development from the start. Every ADS developer needs to know the principles of Security by Design.",
      topics: [
        { title: "CIA Principles", desc: "Confidentiality (only those who should can access), Integrity (unaltered data) and Availability (system accessible when needed)." },
        { title: "Encryption", desc: "Symmetric (AES, same key). Asymmetric (RSA, public/private key). Hashing (SHA-256, bcrypt for passwords, irreversible)." },
        { title: "OWASP Top 10", desc: "SQL Injection, XSS, IDOR, CSRF, Broken Auth, Security Misconfiguration. Reference guide for critical vulnerabilities in web apps." },
        { title: "Authentication & JWT", desc: "Sessions vs tokens. JWT = Header.Payload.Signature. Store in an httpOnly cookie. Refresh tokens for long sessions." },
        { title: "LGPD", desc: "Brazil's General Data Protection Law (Law 13.709/2018). Legal bases, data subject rights, DPO, incident notification and fines." },
        { title: "Best Practices", desc: "Validate user input, parameterize queries (avoid SQL Injection), always use HTTPS, salt+hash passwords, principle of least privilege." },
      ],
    },
  },
  es: {
    'mod-fund': {
      tag: "Módulo 1", title: "Fundamentos de ADS", subtitle: null,
      intro: "Análisis y Desarrollo de Sistemas es la base para quien quiere trabajar en desarrollo de software. Este módulo cubre los conceptos esenciales para iniciar el camino.",
      topics: [
        "Qué es ADS y el campo de TI",
        "Hardware: CPU, memoria, almacenamiento",
        "Software: sistemas operativos y aplicaciones",
        "Lógica de programación y algoritmos",
        "Variables, tipos de datos y estructuras de control",
        "Introducción a la programación con Python",
        "El mercado laboral de TI",
        "El perfil del Analista de Sistemas",
      ],
      codeLabel: "Python · Primer programa",
    },
    'mod-eng': {
      tag: null, title: "Ingeniería de Software", subtitle: "Módulo 01 · Procesos y Calidad",
      intro: "La Ingeniería de Software aplica principios de ingeniería al desarrollo de software, garantizando que los sistemas sean confiables, eficientes, mantenibles y entregados a tiempo.",
      topics: [
        { title: "Ciclo de Vida del Software", desc: "Requisitos, Diseño, Implementación, Pruebas y Mantenimiento. Cada fase tiene entradas, salidas y criterios de calidad." },
        { title: "Scrum", desc: "Framework ágil con Sprints de 1 a 4 semanas. Roles: Product Owner, Scrum Master y Dev Team. Ceremonias: Planning, Daily, Review, Retro." },
        { title: "UML", desc: "Lenguaje de modelado unificado. Diagrama de Clases, Secuencia, Casos de Uso y Estados son los más evaluados en ADS." },
        { title: "Requisitos", desc: "Funcionales (lo que el sistema hace) vs No Funcionales (rendimiento, seguridad, usabilidad). Técnicas: entrevista, prototipado y casos de uso." },
        { title: "Kanban", desc: "Visualización del flujo con columnas Por Hacer, En Progreso y Terminado. Limita el WIP para reducir cuellos de botella y aumentar la fluidez." },
        { title: "Pruebas de Software", desc: "Unitaria, Integración, Sistema y Aceptación. TDD: escribir la prueba antes del código. Cobertura de código como métrica de calidad." },
      ],
    },
    'mod-bd': {
      tag: null, title: "Bases de Datos", subtitle: "Módulo 02 · Datos y SQL",
      intro: "Las bases de datos son el corazón de cualquier sistema moderno. Comprender el modelado, SQL y las propiedades ACID es esencial para cualquier desarrollador.",
      topics: [
        { title: "Modelo Relacional", desc: "Tablas, columnas, filas, claves primarias (PK) y foráneas (FK). Diagrama ER para modelar entidades y relaciones." },
        { title: "Normalización", desc: "1FN elimina grupos repetidos. 2FN exige dependencia total de la PK. 3FN elimina dependencia transitiva. Objetivo: reducir redundancia." },
        { title: "SQL", desc: "DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE). JOIN: INNER, LEFT, RIGHT, FULL OUTER." },
        { title: "ACID", desc: "Atomicidad, Consistencia, Aislamiento y Durabilidad. Garantizan la integridad incluso en fallos o accesos concurrentes a la base." },
        { title: "NoSQL", desc: "Documento (MongoDB), Clave-Valor (Redis), Columna (Cassandra), Grafo (Neo4j). Flexible y escalable horizontalmente." },
        { title: "Índices y Rendimiento", desc: "Los índices acelerán el SELECT pero hacen que INSERT/UPDATE sean más lentos. EXPLAIN analiza los planes de ejecución de consultas." },
      ],
    },
    'mod-web': {
      tag: null, title: "Programación Web", subtitle: "Módulo 03 · Front-end y Back-end",
      intro: "El desarrollo web implica crear interfaces (front-end) y lógica de servidor (back-end). El desarrollador full-stack domina ambos lados y sabe conectarlos vía APIs.",
      topics: [
        { title: "HTML5 y CSS3", desc: "Semántica HTML (header, nav, main, article). Flexbox y Grid para el layout. Responsividad con media queries y unidades relativas." },
        { title: "JavaScript", desc: "ES6+: arrow functions, destructuring, async/await, módulos. Manipulación del DOM, eventos y fetch API. Fundamento de todo front-end moderno." },
        { title: "API REST", desc: "Verbos HTTP (GET, POST, PUT, PATCH, DELETE). Códigos de estado 200, 201, 400, 401, 404, 500. JSON como formato de datos. Autenticación JWT." },
        { title: "React", desc: "Componentes funcionales, Props, State, useEffect. Virtual DOM para renderizado eficiente. Ecosistema: React Router, Axios, Zustand." },
        { title: "Node.js y Express", desc: "JavaScript en el servidor. Creación de APIs REST, middleware, rutas y conexión con la base de datos. npm para gestionar dependencias del proyecto." },
        { title: "Git y Despliegue", desc: "Control de versiones con Git y GitHub. Despliegue en Vercel (front-end), Railway/Render (back-end). CI/CD básico con GitHub Actions." },
      ],
    },
    'mod-redes': {
      tag: null, title: "Redes de Computadoras", subtitle: "Módulo 04 · Protocolos e Infraestructura",
      intro: "Las redes de computadoras son la columna vertebral de internet y de cualquier sistema distribuido. Entender protocolos, direccionamiento y seguridad es fundamental para los desarrolladores modernos.",
      topics: [
        { title: "Modelo OSI (7 capas)", desc: "Física, Enlace, Red, Transporte, Sesión, Presentación y Aplicación. Cada capa tiene función y protocolos específicos." },
        { title: "TCP/IP", desc: "Pila de protocolos de internet. TCP garantiza entrega ordenada y confiable; UDP es rápido, sin confirmación. Base de toda comunicación web." },
        { title: "Direccionamiento IP", desc: "IPv4 (32 bits, ej: 192.168.1.1), IPv6 (128 bits). Subredes con CIDR (/24 = 254 hosts). NAT para redes privadas." },
        { title: "Protocolos de Aplicación", desc: "HTTP/HTTPS (web), DNS (nombres a IPs), SMTP/IMAP (correo), FTP (archivos), SSH (acceso remoto seguro)." },
        { title: "Computación en la Nube", desc: "IaaS (infraestructura), PaaS (plataforma), SaaS (software). Proveedores: AWS, GCP, Azure. Modelos on-premise vs nube pública." },
        { title: "Seguridad de Redes", desc: "Firewall, VPN, SSL/TLS. Ataques: DDoS, Man-in-the-Middle, Spoofing. Cifrado simétrico vs asimétrico." },
      ],
    },
    'mod-algo': {
      tag: null, title: "Algoritmos y Estructuras de Datos", subtitle: "Módulo 05 · Lógica y Complejidad",
      intro: "Los algoritmos son el corazón de la programación. Saber elegir la estructura de datos correcta y entender la complejidad de tiempo y espacio es lo que diferencia a un desarrollador promedio de uno excelente.",
      topics: [
        { title: "Notación Big-O", desc: "O(1) constante, O(log n) logarítmica, O(n) lineal, O(n log n), O(n²) cuadrática. Mide el crecimiento respecto al tamaño de la entrada." },
        { title: "Arrays y Listas", desc: "Array: acceso O(1), inserción O(n). Lista enlazada: inserción O(1), acceso O(n). Pila (LIFO) y Cola (FIFO) como casos especiales." },
        { title: "Árboles", desc: "Árbol binario, BST (búsqueda eficiente), AVL (balanceado). Recorridos: pre-orden, en-orden, post-orden. Heap para colas de prioridad." },
        { title: "Ordenamiento", desc: "Bubble Sort O(n²), Merge Sort O(n log n), Quick Sort O(n log n) en promedio. La elección depende del perfil de los datos de entrada." },
        { title: "Búsqueda", desc: "Búsqueda lineal O(n) vs búsqueda binaria O(log n), que requiere un array ordenado. Hash Map con acceso y búsqueda O(1) en promedio." },
        { title: "Grafos", desc: "BFS (anchura) y DFS (profundidad). Dijkstra para caminos mínimos. Aplicaciones: redes sociales, rutas, dependencias de paquetes." },
      ],
    },
    'mod-seg': {
      tag: null, title: "Seguridad de la Información", subtitle: "Módulo 06 · Protección y Cumplimiento",
      intro: "La seguridad no es una función que se agrega después. Es una práctica integrada en el desarrollo desde el inicio. Todo desarrollador ADS necesita conocer los principios de Security by Design.",
      topics: [
        { title: "Principios CIA", desc: "Confidencialidad (solo quien debe accede), Integridad (datos no alterados) y Disponibilidad (sistema accesible cuando se necesita)." },
        { title: "Cifrado", desc: "Simétrico (AES, misma clave). Asimétrico (RSA, clave pública/privada). Hashing (SHA-256, bcrypt para contraseñas, irreversible)." },
        { title: "OWASP Top 10", desc: "SQL Injection, XSS, IDOR, CSRF, Broken Auth, Security Misconfiguration. Guía de referencia para vulnerabilidades críticas en apps web." },
        { title: "Autenticación y JWT", desc: "Sesiones vs tokens. JWT = Header.Payload.Signature. Almacenar en cookie httpOnly. Refresh tokens para sesiones largas." },
        { title: "LGPD", desc: "Ley General de Protección de Datos de Brasil (Ley 13.709/2018). Bases legales, derechos del titular, DPO, notificación de incidentes y multas." },
        { title: "Buenas Prácticas", desc: "Validar la entrada del usuario, parametrizar consultas (evitar SQL Injection), usar siempre HTTPS, contraseñas con salt+hash, principio de mínimo privilegio." },
      ],
    },
  },
};

// UI (nav, hero, botoes, secoes, tutorial, certificado). Chave = data-i18n
// no HTML. PT tambem nao precisa aqui - e capturado do DOM na primeira
// carga (ver i18n-apply.js).
const ODA_UI = {
  en: {
    nav_modulos: "Modules", nav_roadmap: "Roadmap", nav_conceitos: "Concepts", nav_flashcards: "Flashcards",
    nav_quiz: "Quiz", nav_faq: "FAQ", nav_sobre: "About", nav_abnt: "References",
    nav_help: "How to use", nav_install: "Install App",
    mobile_sobre: "About Group A", mobile_abnt: "References (ABNT)", mobile_help: "How to use",

    hero_tag: "Digital Learning Object · Group A",
    hero_title: "Systems<br><em>Analysis and</em><br>Development",
    hero_sub: "Free interactive material for ADS students. Explore concepts, learn with infographics and test your knowledge.",
    hero_cta1: "▶ Start now", hero_cta2: "⚡ Take the quiz",

    stat_modulos: "Modules", stat_conceitos: "Key concepts", stat_quiz: "Quiz questions", stat_free: "Free",

    sec_modulos_label: "Content", sec_modulos_title: "Learning<br>Modules",
    sec_modulos_desc: "Seven major areas of the ADS course, each with the fundamental concepts organized clearly and progressively.",
    sec_roadmap_label: "Infographic", sec_roadmap_title: "ADS Developer<br>Roadmap",
    sec_roadmap_desc: "The learning journey of an ADS student, from start to the job market, step by step.",
    sec_conceitos_label: "Quick review", sec_conceitos_title: "Key Concepts",
    sec_conceitos_desc: "The most important terms of the ADS course, explained simply.",
    sec_flashcards_label: "Memorization", sec_flashcards_title: "Flashcards",
    sec_flashcards_desc: "Click the cards to reveal the definition. Great for reviewing before exams!",
    sec_quiz_label: "Test your knowledge", sec_quiz_title: "ADS Quiz",
    sec_faq_label: "Frequently asked questions", sec_faq_title: "FAQ",
    sec_faq_desc: "Common questions about the ADS course and the tech field.",
    sec_sobre_label: "Group A", sec_sobre_title: "About the Developers",
    sec_sobre_desc: "4th-semester ADS students at UNIGRANDE, from different campuses: Amaralina Campus (Bom Jesus da Lapa/BA), Centro Campus (Parnaíba/PI), Cambolo Campus (Porto Seguro/BA) and Vitória da Conquista Campus (BA). Together they developed this ODA as an Extension Project.",
    sec_referencias_label: "Academic", sec_referencias_title: "Bibliographic References",
    sec_referencias_desc: "Sources used in developing this Digital Learning Object, according to ABNT standards.",

    open_hint: "▶ View content",
    open_hint_fund: "▸ View content",
    module_visited: "✓ Visited",
    fc_reset: "↺ Reset cards",

    tutorial_tag: "Quick guide", tutorial_title: "How to use ODA·ADS",
    tutorial_intro: "A simple guide to get the most out of the material: follow the order below, or jump straight to what you need.",
    tutorial_step1_t: "1. Modules", tutorial_step1_d: "7 areas of the ADS course, each with topics and a practical example.",
    tutorial_step2_t: "2. Roadmap", tutorial_step2_d: "The learning path from start to the job market.",
    tutorial_step3_t: "3. Flashcards", tutorial_step3_d: "Flip the cards to test whether you remember the key concepts.",
    tutorial_step4_t: "4. Quiz", tutorial_step4_d: "34 questions with a timer and instant feedback. Shortcuts: keys 1-4 to answer, Enter to advance.",
    tutorial_step5_t: "5. Certificate", tutorial_step5_d: "Score 70% or more to generate yours, with name and validation code.",
    tutorial_step6_t: "6. Install App", tutorial_step6_d: "Tap the button at the top of the site to use ODA·ADS as an app, with offline access.",
    tutorial_help: "How to use", tutorial_btn: "Got it, let's start",

    cert_title: "Issue Certificate",
    cert_desc: "Enter your full name to generate the digital certificate with a unique validation code.",
    cert_placeholder: "Your full name",
    cert_generate: "Generate Certificate",
    cert_doc_title: "Certificate of Completion",
    cert_congrats: "Congratulations!",
    cert_excellence: "you completed the ODA with excellence",
    cert_certify: "We certify that",
    cert_body1: "demonstrated mastery of the content of the",
    cert_body2: ", covering Software Engineering, Databases, Web Programming, Computer Networks, Algorithms and Information Security.",
    cert_score_label: "Quiz score",
    cert_validation: "Validation Code:",
    cert_institution: "Institution:", cert_course: "Course:", cert_group: "Group:", cert_date: "Date:",
    cert_status_dist: "PASSED WITH DISTINCTION", cert_status_ok: "PASSED", cert_status_part: "PARTICIPATION",
    cert_close: "Close", cert_copy: "Copy code", cert_download: "Download Certificate",

    footer_text: "Digital Learning Object · Systems Analysis and Development · Free for educational use",
    footer_meta: "UNIGRANDE University Center · ADS Course · 4th Semester · 2026",
    hero_tag_full: "Digital Learning Object · Systems Analysis and Development",

    mc_0_title: "Software Engineering", mc_0_desc: "Software lifecycle, agile methodologies (Scrum, Kanban, XP), documentation and software quality.",
    mc_1_title: "Databases", mc_1_desc: "Relational modeling, SQL, normalization, ACID transactions, NoSQL and DB administration fundamentals.",
    mc_2_title: "Web Programming", mc_2_desc: "HTML, CSS, JavaScript, modern frameworks (React, Vue), backend with Node.js/Python and REST APIs.",
    mc_3_title: "Computer Networks", mc_3_desc: "OSI/TCP-IP model, communication protocols, IP addressing, routing, security and cloud.",
    mc_4_title: "Algorithms & Structures", mc_4_desc: "Programming logic, algorithmic complexity (Big-O), lists, trees, graphs and sorting algorithms.",
    mc_5_title: "Information Security", mc_5_desc: "Encryption, authentication, access control, LGPD, OWASP Top 10 and secure development best practices.",
    mc_6_title: "ADS Fundamentals", mc_6_desc: "Course introduction, programming logic, hardware and software, operating systems and the IT market.",

    team_0_role: "Lead Developer",
    team_0_bio: "Studying Systems Analysis and Development at UNIGRANDE. 700+ certified hours in Web Dev, Python, Cybersecurity and AI. Certified Junior Cybersecurity Analyst by Cisco (Apr/2026). Specialist in HTML5, CSS, JavaScript, SQL and Power BI.",
    team_1_role: "Content & Research",
    team_1_bio: "Literature review, content curation and technical review of the modules.",
    team_2_role: "Documentation & QA",
    team_2_bio: "Project documentation, usability testing and content quality assurance.",
    team_3_role: "Developer",
    team_3_bio: "Studying Systems Analysis and Development. Front-End Developer with experience in HTML5, CSS3 and JavaScript. Specialist in dashboards with Power BI and Power Query.",
  },
  es: {
    nav_modulos: "Módulos", nav_roadmap: "Roadmap", nav_conceitos: "Conceptos", nav_flashcards: "Flashcards",
    nav_quiz: "Quiz", nav_faq: "FAQ", nav_sobre: "Nosotros", nav_abnt: "Referencias",
    nav_help: "Cómo usar", nav_install: "Instalar App",
    mobile_sobre: "Sobre el Grupo A", mobile_abnt: "Referencias (ABNT)", mobile_help: "Cómo usar",

    hero_tag: "Objeto Digital de Aprendizaje · Grupo A",
    hero_title: "Análisis y<br><em>Desarrollo</em><br>de Sistemas",
    hero_sub: "Material interactivo y gratuito para estudiantes de ADS. Explora conceptos, aprende con infografías y pon a prueba tus conocimientos.",
    hero_cta1: "▶ Empezar ahora", hero_cta2: "⚡ Hacer el quiz",

    stat_modulos: "Módulos", stat_conceitos: "Conceptos clave", stat_quiz: "Preguntas del quiz", stat_free: "Gratis",

    sec_modulos_label: "Contenido", sec_modulos_title: "Módulos de<br>Aprendizaje",
    sec_modulos_desc: "Siete grandes áreas del curso de ADS, cada una con los conceptos fundamentales organizados de forma clara y progresiva.",
    sec_roadmap_label: "Infografía", sec_roadmap_title: "Roadmap del<br>Desarrollador ADS",
    sec_roadmap_desc: "El camino de aprendizaje de un estudiante de ADS, desde el inicio hasta el mercado laboral, paso a paso.",
    sec_conceitos_label: "Repaso rápido", sec_conceitos_title: "Conceptos Clave",
    sec_conceitos_desc: "Los términos más importantes del curso de ADS, explicados de forma simple.",
    sec_flashcards_label: "Memorización", sec_flashcards_title: "Flashcards",
    sec_flashcards_desc: "Haz clic en las tarjetas para revelar la definición. ¡Ideal para repasar antes de los exámenes!",
    sec_quiz_label: "Pon a prueba tus conocimientos", sec_quiz_title: "Quiz de ADS",
    sec_faq_label: "Preguntas frecuentes", sec_faq_title: "FAQ",
    sec_faq_desc: "Preguntas comunes sobre el curso de ADS y el área de tecnología.",
    sec_sobre_label: "Grupo A", sec_sobre_title: "Sobre los Desarrolladores",
    sec_sobre_desc: "Estudiantes del 4º semestre de ADS en UNIGRANDE, de diferentes sedes: Sede Amaralina (Bom Jesus da Lapa/BA), Sede Centro (Parnaíba/PI), Sede Cambolo (Porto Seguro/BA) y Sede Vitória da Conquista (BA). Juntos desarrollaron este ODA como Proyecto de Extensión.",
    sec_referencias_label: "Académico", sec_referencias_title: "Referencias Bibliográficas",
    sec_referencias_desc: "Fuentes utilizadas en el desarrollo de este Objeto Digital de Aprendizaje, conforme a las normas ABNT.",

    open_hint: "▶ Ver contenido",
    open_hint_fund: "▸ Ver contenido",
    module_visited: "✓ Visitado",
    fc_reset: "↺ Reiniciar tarjetas",

    tutorial_tag: "Guía rápida", tutorial_title: "Cómo usar el ODA·ADS",
    tutorial_intro: "Una guía simple para aprovechar mejor el material: sigue el orden abajo, o ve directo a lo que necesites.",
    tutorial_step1_t: "1. Módulos", tutorial_step1_d: "7 áreas del curso de ADS, cada una con temas y un ejemplo práctico.",
    tutorial_step2_t: "2. Roadmap", tutorial_step2_d: "El camino de aprendizaje desde el inicio hasta el mercado laboral.",
    tutorial_step3_t: "3. Flashcards", tutorial_step3_d: "Voltea las tarjetas para comprobar si recuerdas los conceptos clave.",
    tutorial_step4_t: "4. Quiz", tutorial_step4_d: "34 preguntas con temporizador y feedback al instante. Atajos: teclas 1-4 para responder, Enter para avanzar.",
    tutorial_step5_t: "5. Certificado", tutorial_step5_d: "Acertando el 70% o más, genera el tuyo, con nombre y código de validación.",
    tutorial_step6_t: "6. Instalar App", tutorial_step6_d: "Toca el botón en la parte superior del sitio para usar el ODA·ADS como aplicación, con acceso sin conexión.",
    tutorial_help: "Cómo usar", tutorial_btn: "Entendido, empecemos",

    cert_title: "Emitir Certificado",
    cert_desc: "Escribe tu nombre completo para generar el certificado digital con un código de validación único.",
    cert_placeholder: "Tu nombre completo",
    cert_generate: "Generar Certificado",
    cert_doc_title: "Certificado de Finalización",
    cert_congrats: "¡Felicidades!",
    cert_excellence: "completaste el ODA con excelencia",
    cert_certify: "Certificamos que",
    cert_body1: "demostró dominio de los contenidos del",
    cert_body2: ", abarcando Ingeniería de Software, Bases de Datos, Programación Web, Redes de Computadoras, Algoritmos y Seguridad de la Información.",
    cert_score_label: "Nota obtenida en el Quiz",
    cert_validation: "Código de Validación:",
    cert_institution: "Institución:", cert_course: "Curso:", cert_group: "Grupo:", cert_date: "Fecha:",
    cert_status_dist: "APROBADO CON DISTINCIÓN", cert_status_ok: "APROBADO", cert_status_part: "PARTICIPACIÓN",
    cert_close: "Cerrar", cert_copy: "Copiar código", cert_download: "Descargar Certificado",

    footer_text: "Objeto Digital de Aprendizaje · Análisis y Desarrollo de Sistemas · Uso educativo gratuito",
    footer_meta: "Centro Universitario UNIGRANDE · Curso de ADS · 4º Semestre · 2026",
    hero_tag_full: "Objeto Digital de Aprendizaje · Análisis y Desarrollo de Sistemas",

    mc_0_title: "Ingeniería de Software", mc_0_desc: "Ciclo de vida del software, metodologías ágiles (Scrum, Kanban, XP), documentación y calidad de software.",
    mc_1_title: "Bases de Datos", mc_1_desc: "Modelado relacional, SQL, normalización, transacciones ACID, NoSQL y fundamentos de administración de BD.",
    mc_2_title: "Programación Web", mc_2_desc: "HTML, CSS, JavaScript, frameworks modernos (React, Vue), backend con Node.js/Python y APIs REST.",
    mc_3_title: "Redes de Computadoras", mc_3_desc: "Modelo OSI/TCP-IP, protocolos de comunicación, direccionamiento IP, enrutamiento, seguridad y nube.",
    mc_4_title: "Algoritmos y Estructuras", mc_4_desc: "Lógica de programación, complejidad algorítmica (Big-O), listas, árboles, grafos y algoritmos de ordenamiento.",
    mc_5_title: "Seguridad de la Información", mc_5_desc: "Cifrado, autenticación, control de acceso, LGPD, OWASP Top 10 y buenas prácticas de seguridad en el desarrollo.",
    mc_6_title: "Fundamentos de ADS", mc_6_desc: "Introducción al curso, lógica de programación, hardware y software, sistemas operativos y mercado de TI.",

    team_0_role: "Desarrollador Principal",
    team_0_bio: "Estudiando Análisis y Desarrollo de Sistemas en UNIGRANDE. +700h certificadas en Dev Web, Python, Ciberseguridad e IA. Certificado como Analista de Ciberseguridad Junior por Cisco (Abr/2026). Especialista en HTML5, CSS, JavaScript, SQL y Power BI.",
    team_1_role: "Contenido e Investigación",
    team_1_bio: "Levantamiento bibliográfico, curaduría de contenido y revisión técnica de los módulos.",
    team_2_role: "Documentación y QA",
    team_2_bio: "Documentación del proyecto, pruebas de usabilidad y garantía de calidad del contenido.",
    team_3_role: "Desarrolladora",
    team_3_bio: "Estudiando Análisis y Desarrollo de Sistemas. Desarrolladora Front-End con experiencia en HTML5, CSS3 y JavaScript. Especialista en dashboards con Power BI y Power Query.",
  },
};

// Mensagens de resultado do quiz, por faixa de acerto (>=90%, >=70%, >=50%, resto)
const ODA_QUIZ_RESULT_MSG = {
  en: ["Excellent! You've mastered the ADS concepts!", "Very good! Keep studying to reach perfection.", "Good start! Review the modules and try again.", "Don't give up! Read the modules and try again. You'll get there!"],
  es: ["¡Excelente! ¡Dominas los conceptos de ADS!", "¡Muy bien! Sigue estudiando para llegar a la perfección.", "¡Buen comienzo! Repasa los módulos e inténtalo de nuevo.", "¡No te desanimes! Lee los módulos e inténtalo de nuevo. ¡Tú puedes!"],
};

// Meses pro nome da data no certificado
const ODA_MONTHS = {
  en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
};

// Bandeiras SVG (mesmo padrao do Nova Arte's Tech)
const ODA_FLAGS = {
  br: '<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#009B3A"/><path d="M10 1.6 18.4 7 10 12.4 1.6 7z" fill="#FEDF00"/><circle cx="10" cy="7" r="3.1" fill="#002776"/></svg>',
  us: '<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#fff"/><g fill="#B22234"><rect width="20" height="1.08"/><rect y="2.15" width="20" height="1.08"/><rect y="4.3" width="20" height="1.08"/><rect y="6.46" width="20" height="1.08"/><rect y="8.6" width="20" height="1.08"/><rect y="10.77" width="20" height="1.08"/><rect y="12.9" width="20" height="1.08"/></g><rect width="8.5" height="7.54" fill="#3C3B6E"/></svg>',
  es: '<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" fill="#AA151B"/><rect y="3.5" width="20" height="7" fill="#F1BF00"/></svg>',
};

const ODA_LANG_META = {
  pt: { label: 'Português', flag: 'br' },
  en: { label: 'English', flag: 'us' },
  es: { label: 'Español', flag: 'es' },
};
