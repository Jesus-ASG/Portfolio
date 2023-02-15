export const project_sp = [
  {
    "id": 1,
    "name": "Story Quest",
    "thumbnail": "/assets/data_projects/story_quest/sq_t.png",
    "description": "Aplicación web/móvil para aprender inglés mediante historias cortas, siendo sus principales recursos la pronunciación correcta de palabras.",
    "badges": ["django", "python", "html5", "css3", "javascript", "mysql"],
    "application_features": [
      "Cuenta con un modo para administrar historias, etiquetas y páginas, el usuario no administrador sólo podrá contestar las historias.",
      "Pueden crearse historias con contenido visual y ejercicios los cuales el usuario podrá contestar y ser evaluado, obteniendo una calificación y estadísticas de sus habilidades en comprensión, pronunciación y escritura",
      "Pueden agregarse etiquetas a una historia para catalogarla fácilmente.",
      "Se pueden agregar nuevas páginas a una historia a través de plantillas.",
      "Permite guardar historias y luego visualizarlas, puede guardar para contestar más tarde o guardarla en favoritos.",
      "Se acumulan puntos cada vez que se completa una historia, con esos puntos es posible desbloquear otras historias.",
      "Muestra una tabla de las más altas puntuaciones obtenidas por historia.",
    ],
    "application_technical_features": [
      "Contraseñas encriptadas en base de datos.",
      "Protección de rutas con @login_required y @user_passes_test.",
      "Uso de javascript con Ajax para enviar solicitudes.",
      "Uso de python para redimensionar imágenes subidas.",
      "Uso de un servidor caché para guardar variables temporales.",
    ],
    "screenshots": [
      "/assets/data_projects/story_quest/im1.png",
      "/assets/data_projects/story_quest/im2.png",
      "/assets/data_projects/story_quest/im3.png", 
      "/assets/data_projects/story_quest/im4.png", 
      "/assets/data_projects/story_quest/im5.png", 
      "/assets/data_projects/story_quest/im6.png", 
      "/assets/data_projects/story_quest/s1.png", 
      "/assets/data_projects/story_quest/s2.png", 
      "/assets/data_projects/story_quest/s3.png"
    ]
  },
  {
    "id": 2,
    "name": "JHIM Delivery",
    "thumbnail": "/assets/data_projects/jhim_delivery/jd_t.png",
    "description": "Aplicación móvil hecha en android studio para calcular rutas más cortas entre puntos de entrega en la ciudad, funciona con la API de google maps.",
    "badges": ["android_studio", "java", "firebase"],
    "application_features": [""],
    "application_technical_features": [""],
    "screenshots": ["/assets/data_projects/story_quest/s3.png"]
  }
]