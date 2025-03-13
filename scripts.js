document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('interactive-map');
  
    // Инициализация panzoom
    const panzoomInstance = Panzoom(mapElement, {
      maxScale: 5,
      minScale: 0.5,
      contain: 'outside',
      cursor: 'grab',
      disablePan: false,
    });
  
    // Добавление обработчиков событий для зума колесиком мыши
    const parent = mapElement.parentElement;
    parent.addEventListener('wheel', (e) => {
      e.preventDefault();
      panzoomInstance.zoomWithWheel(e);
    });
  
    // Изменение курсора при зажатии ЛКМ
    mapElement.addEventListener('mousedown', () => {
      mapElement.style.cursor = 'grabbing';
    });
  
    mapElement.addEventListener('mouseup', () => {
      mapElement.style.cursor = 'grab';
    });
  
    // Сброс масштаба при изменении размера окна
    window.addEventListener('resize', () => {
      panzoomInstance.reset();
    });
  
    // Кнопка "Сбросить масштаб"
    document.getElementById('reset-zoom').addEventListener('click', () => {
      panzoomInstance.reset();
    });
  
    // Пример точек с координатами и масштабом
    const points = [
      { x: -404.133, y: 14.1228, scale: 3.00417 }, // Точка 1
      { x: 200, y: -100, scale: 3 },  // Точка 2
      { x: -100, y: 400, scale: 1.5 }, // Точка 3
    ];
  
    // Функция для перемещения к точке с заданным масштабом
    function moveTo(x, y, scale) {
      console.log(`Перемещение к точке: x=${x}, y=${y}, scale=${scale}`); // Отладочное сообщение
      panzoomInstance.zoomToPoint(scale, { clientX: x, clientY: y }, { animate: true });
    }
  
    // Кнопка "Точка 1"
    document.getElementById('move-to-point-1').addEventListener('click', () => {
      moveTo(points[0].x, points[0].y, points[0].scale);
    });
  
    // Кнопка "Точка 2"
    document.getElementById('move-to-point-2').addEventListener('click', () => {
      moveTo(points[1].x, points[1].y, points[1].scale);
    });
  
    // Кнопка "Точка 3"
    document.getElementById('move-to-point-3').addEventListener('click', () => {
      moveTo(points[2].x, points[2].y, points[2].scale);
    });
  });