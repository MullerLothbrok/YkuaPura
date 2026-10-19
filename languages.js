/* Spanish source copy with Brazilian Portuguese and English translations.
   Text nodes are updated in place so links, line breaks and semantic markup survive. */
(() => {
  'use strict';
  const copy = [
    ['Idioma', 'Idioma', 'Language'],
    ['AGUA PURA AL INSTANTE', 'ÁGUA PURA NA HORA', 'PURE WATER IN AN INSTANT'],
    ['Agua pura al instante', 'Água pura na hora', 'Pure water in an instant'],
    ['YkuaPura - Inicio', 'YkuaPura - Início', 'YkuaPura - Home'],
    ['Abrir menú', 'Abrir menu', 'Open menu'],
    ['Navegación principal', 'Navegação principal', 'Main navigation'],
    ['Cómo funciona', 'Como funciona', 'How it works'],
    ['Tecnología', 'Tecnologia', 'Technology'],
    ['Calidad', 'Qualidade', 'Quality'],
    ['Precios', 'Preços', 'Prices'],
    ['Ubicaciones', 'Onde encontrar', 'Locations'],
    ['Autoservice · disponible 24/7', 'Autoatendimento · disponível 24 horas', 'Self-service · available 24/7'],
    ['Agua pura al instante.', 'Água pura na hora.', 'Pure water in an instant.'],
    ['Cuando la necesitás.', 'Quando você precisar.', 'Whenever you need it.'],
    ['Traé tu bidón, termo o botella reutilizable. Elegí la cantidad, pagá en el equipo y recargá agua purificada en pocos pasos.', 'Traga seu galão, garrafa térmica ou garrafa reutilizável. Escolha a quantidade, pague na máquina e abasteça com água purificada em poucos passos.', 'Bring your reusable water jug, insulated bottle or bottle. Choose the amount, pay at the machine and refill with purified water in a few simple steps.'],
    ['Las piezas gráficas y los informes originales están en español.', 'As peças gráficas e os relatórios originais estão em espanhol.', 'Promotional images and original laboratory reports are in Spanish.'],
    ['Ver cómo funciona', 'Veja como funciona', 'See how it works'],
    ['Encontrar un punto', 'Encontre um ponto', 'Find a refill station'],
    ['Datos destacados', 'Destaques', 'At a glance'],
    ['disponible', 'disponível', 'available'],
    ['por 5.000 Gs.', 'por 5.000 Gs.', 'for 5,000 Gs.'],
    ['ciudades', 'cidades', 'cities'],
    ['Disponible 24/7', 'Disponível 24 horas', 'Available 24/7'],
    ['RECARGA DE 20 L', 'RECARGA DE 20 L', '20 L REFILL'],
    ['5.000 Gs.', '5.000 Gs.', '5,000 Gs.'],
    ['Filtración multietapa', 'Filtragem em várias etapas', 'Multistage filtration'],
    ['Tratamiento progresivo del agua', 'Tratamento progressivo da água', 'Step-by-step water treatment'],
    ['UV + ozono', 'UV + ozônio', 'UV + ozone'],
    ['Desinfección complementaria', 'Desinfecção complementar', 'Additional disinfection'],
    ['Control de calidad', 'Controle de qualidade', 'Quality control'],
    ['Análisis físico-químico y microbiológico', 'Análises físico-químicas e microbiológicas', 'Physicochemical and microbiological testing'],
    ['Menos descartables', 'Menos descartáveis', 'Fewer single-use containers'],
    ['Reutilizá tu propio envase', 'Reutilize seu próprio recipiente', 'Reuse your own container'],
    ['Fácil de usar', 'Fácil de usar', 'Easy to use'],
    ['Recargá en pocos pasos', 'Reabasteça em poucos passos', 'Refill in a few simple steps'],
    ['Un sistema autoservice diseñado para que puedas cargar agua purificada sin depender de horarios de reparto.', 'Um sistema de autoatendimento para você abastecer com água purificada sem depender de horários de entrega.', 'A self-service system that lets you refill with purified water without waiting for a delivery.'],
    ['Traé tu envase', 'Traga seu recipiente', 'Bring your container'],
    ['Podés usar un bidón, termo o botella reutilizable en buenas condiciones.', 'Você pode usar um galão, garrafa térmica ou garrafa reutilizável em boas condições.', 'You can use a reusable water jug, insulated bottle or bottle in good condition.'],
    ['Higienizá el bidón', 'Higienize o galão', 'Sanitize your jug'],
    ['En equipos con función de ozono, podés realizar una higienización previa antes de la carga.', 'Nas máquinas com função de ozônio, você pode higienizar o recipiente antes de abastecer.', 'Machines with an ozone function let you sanitize your container before refilling.'],
    ['Elegí la cantidad', 'Escolha a quantidade', 'Choose the amount'],
    ['Seleccioná el volumen que necesitás y seguí las indicaciones de pago del equipo.', 'Selecione o volume desejado e siga as instruções de pagamento da máquina.', 'Select the volume you need and follow the payment instructions on the machine.'],
    ['Recargá y listo', 'Abasteça e pronto', 'Refill and go'],
    ['Colocá el envase, completá la carga y retirá tu agua purificada.', 'Posicione o recipiente, conclua o abastecimento e retire sua água purificada.', 'Place your container, complete the refill and take your purified water.'],
    ['Tecnología de purificación', 'Tecnologia de purificação', 'Purification technology'],
    ['Más que agua filtrada', 'Mais que água filtrada', 'More than filtered water'],
    ['El sistema combina distintas etapas de tratamiento para reducir sedimentos, olores, sabores e impurezas, y completa el proceso con desinfección.', 'O sistema combina diferentes etapas de tratamento para reduzir sedimentos, odores, sabores e impurezas, finalizando o processo com desinfecção.', 'The system combines several treatment stages to reduce sediment, odors, tastes and impurities, followed by disinfection.'],
    ['Filtración de sedimentos', 'Filtragem de sedimentos', 'Sediment filtration'],
    ['Retiene partículas y material en suspensión.', 'Retém partículas e materiais em suspensão.', 'Traps particles and suspended material.'],
    ['Carbón activado', 'Carvão ativado', 'Activated carbon'],
    ['Ayuda a reducir cloro, olores y sabores.', 'Ajuda a reduzir cloro, odores e sabores.', 'Helps reduce chlorine, odors and tastes.'],
    ['Microfiltración', 'Microfiltração', 'Microfiltration'],
    ['Filtrado fino para partículas de menor tamaño.', 'Filtragem fina para partículas menores.', 'Fine filtration for smaller particles.'],
    ['Membranas de alta precisión', 'Membranas de alta precisão', 'High-precision membranes'],
    ['Etapas de purificación por membrana según la configuración del equipo.', 'Etapas de purificação por membrana conforme a configuração da máquina.', 'Membrane purification stages depending on the machine configuration.'],
    ['Desinfección final del agua y del circuito de carga.', 'Desinfecção final da água e do circuito de abastecimento.', 'Final disinfection of the water and refill system.'],
    ['Sistema completo de tratamiento', 'Sistema completo de tratamento', 'Complete treatment system'],
    ['Cuidamos cada detalle', 'Cuidamos de cada detalhe', 'We care for every detail'],
    ['La confianza se demuestra con hechos.', 'A confiança se demonstra com ações.', 'Trust is built through action.'],
    ['Cada semana limpiamos y desinfectamos el habitáculo donde se recargan los bidones de 20 litros. Cuidar ese espacio forma parte del cuidado de nuestras estaciones.', 'Toda semana, limpamos e desinfetamos o compartimento de abastecimento dos galões de 20 litros. Cuidar desse espaço faz parte da manutenção das nossas estações.', 'Every week, we clean and disinfect the compartment used to refill 20-liter water jugs. Caring for this space is part of maintaining our stations.'],
    ['Conocé nuestro trabajo en Instagram ↗', 'Conheça nosso trabalho no Instagram ↗', 'See our work on Instagram ↗'],
    ['Higiene y reutilización', 'Higiene e reutilização', 'Hygiene and reuse'],
    ['Un espacio cuidado para tu recarga', 'Um espaço bem cuidado para abastecer', 'A well-maintained space for your refill'],
    ['Limpieza semanal', 'Limpeza semanal', 'Weekly cleaning'],
    ['Limpieza y desinfección del habitáculo de recarga de bidones de 20 litros.', 'Limpeza e desinfecção do compartimento de abastecimento de galões de 20 litros.', 'Cleaning and disinfection of the 20-liter jug refill compartment.'],
    ['Ozono antes de cargar', 'Ozônio antes de abastecer', 'Ozone before refilling'],
    ['En los equipos con esta función, seguí las indicaciones para higienizar el envase antes de la recarga.', 'Nas máquinas com essa função, siga as instruções para higienizar o recipiente antes de abastecer.', 'On machines with this feature, follow the instructions to sanitize your container before refilling.'],
    ['Tu envase también importa', 'Seu recipiente também importa', 'Your container matters too'],
    ['Traé tu bidón, termo o botella reutilizable limpio y en buenas condiciones.', 'Traga seu galão, garrafa térmica ou garrafa reutilizável limpo e em boas condições.', 'Bring your reusable water jug, insulated bottle or bottle clean and in good condition.'],
    ['Calidad que se controla', 'Qualidade monitorada', 'Quality that is checked'],
    ['El agua se analiza,', 'A água é analisada,', 'The water is tested,'],
    ['no solo se promete.', 'não fica só na promessa.', 'not just promised.'],
    ['YkuaPura comunica controles físico-químicos y microbiológicos realizados sobre agua de salida de máquina mediante laboratorio especializado.', 'A YkuaPura informa a realização de controles físico-químicos e microbiológicos da água na saída da máquina por laboratório especializado.', 'YkuaPura reports physicochemical and microbiological checks on water from the machine outlet, carried out by a specialized laboratory.'],
    ['Físico-químico', 'Físico-químico', 'Physicochemical'],
    ['Control de parámetros asociados a la composición y calidad del agua.', 'Controle de parâmetros relacionados à composição e à qualidade da água.', 'Checks on parameters related to water composition and quality.'],
    ['Microbiológico', 'Microbiológico', 'Microbiological'],
    ['Evaluación de microorganismos indicadores en muestras de salida.', 'Avaliação de microrganismos indicadores em amostras da água de saída.', 'Testing for indicator microorganisms in outlet water samples.'],
    ['Los resultados específicos corresponden a los puntos y fechas analizados. Para información vigente, consultá a YkuaPura.', 'Os resultados específicos correspondem aos pontos e às datas analisados. Para informações atualizadas, consulte a YkuaPura.', 'Specific results apply to the locations and dates tested. Contact YkuaPura for current information.'],
    ['Transparencia', 'Transparência', 'Transparency'],
    ['Consultá los documentos disponibles', 'Consulte os documentos disponíveis', 'View the available documents'],
    ['Cada informe corresponde a una muestra y una fecha determinadas. Compartimos las páginas recibidas para que puedas consultar su alcance.', 'Cada relatório corresponde a uma amostra e a uma data específicas. Compartilhamos as páginas recebidas para que você possa conferir seu alcance.', 'Each report relates to a specific sample and date. We share the pages received so you can review what they cover.'],
    ['SCIENCO · INFORME 2821', 'SCIENCO · RELATÓRIO 2821', 'SCIENCO · REPORT 2821'],
    ['Análisis fisicoquímico', 'Análise físico-química', 'Physicochemical analysis'],
    ['Muestra: agua de salida de máquina.', 'Amostra: água na saída da máquina.', 'Sample: water from the machine outlet.'],
    ['Fecha de análisis:', 'Data da análise:', 'Analysis date:'],
    ['Emisión:', 'Emissão:', 'Issued:'],
    ['Página 1 de 2. Incluye resultados fisicoquímicos; la página microbiológica no está disponible aquí.', 'Página 1 de 2. Inclui resultados físico-químicos; a página microbiológica não está disponível aqui.', 'Page 1 of 2. Includes physicochemical results; the microbiological page is not available here.'],
    ['Ver página del informe ↗', 'Ver página do relatório ↗', 'View report page ↗'],
    ['LABORATORIO MÜLLER', 'LABORATÓRIO MÜLLER', 'MÜLLER LABORATORY'],
    ['Datos de la muestra', 'Dados da amostra', 'Sample details'],
    ['Punto: dispensador de Súper 6 Costanera, Encarnación.', 'Ponto: dispensador do Súper 6 Costanera, Encarnación.', 'Location: Súper 6 Costanera dispenser, Encarnación.'],
    ['Muestreo:', 'Coleta:', 'Sample collected:'],
    ['Página 1 de 2. Identifica la muestra; esta página no contiene los resultados del análisis.', 'Página 1 de 2. Identifica a amostra; esta página não contém os resultados da análise.', 'Page 1 of 2. Identifies the sample; this page does not contain the analysis results.'],
    ['Ver la comunicación de resultados microbiológicos de YkuaPura', 'Ver os resultados microbiológicos divulgados pela YkuaPura', 'View the microbiological results shared by YkuaPura'],
    ['Esta pieza resume resultados comunicados por YkuaPura. Las páginas de informes disponibles arriba no incluyen los resultados microbiológicos que aparecen en ella. Consultá el informe completo del punto y la fecha de tu interés.', 'Esta peça resume resultados divulgados pela YkuaPura. As páginas dos relatórios disponíveis acima não incluem os resultados microbiológicos apresentados nela. Consulte o relatório completo do ponto e da data de seu interesse.', 'This image summarizes results shared by YkuaPura. The report pages available above do not include the microbiological results shown in it. Request the complete report for the location and date you are interested in.'],
    ['Una forma distinta de comprar agua', 'Um jeito diferente de comprar água', 'A different way to buy water'],
    ['Pagá por el agua.', 'Pague pela água.', 'Pay for the water.'],
    ['No por otro envase.', 'Não por outra embalagem.', 'Not another container.'],
    ['El modelo autoservice permite reutilizar el mismo recipiente y cargar solamente el volumen que necesitás.', 'O autoatendimento permite reutilizar o mesmo recipiente e abastecer apenas o volume necessário.', 'Self-service lets you reuse the same container and refill only the amount you need.'],
    ['Modelo tradicional', 'Modelo tradicional', 'Traditional model'],
    ['Envase + reparto + espera', 'Embalagem + entrega + espera', 'Container + delivery + waiting'],
    ['Autoservice', 'Autoatendimento', 'Self-service'],
    ['Tu envase + tu cantidad + tu horario', 'Seu recipiente + sua quantidade + seu horário', 'Your container + your amount + your schedule'],
    ['Elegí lo que necesitás', 'Escolha o que você precisa', 'Choose what you need'],
    ['Precios simples', 'Preços simples', 'Simple pricing'],
    ['Recargá desde una botella hasta un bidón de 20 litros.', 'Abasteça desde uma garrafa até um galão de 20 litros.', 'Refill anything from a bottle to a 20-liter jug.'],
    ['Ideal para botella o termo.', 'Ideal para garrafa ou garrafa térmica.', 'Ideal for a bottle or insulated bottle.'],
    ['Una carga práctica para llevar.', 'Uma recarga prática para levar.', 'A convenient refill to take with you.'],
    ['MEJOR VALOR', 'MELHOR CUSTO-BENEFÍCIO', 'BEST VALUE'],
    ['Para tu bidón reutilizable.', 'Para seu galão reutilizável.', 'For your reusable water jug.'],
    ['Precios comunicados por YkuaPura en sus puntos de recarga. Pueden actualizarse.', 'Preços informados pela YkuaPura nos pontos de abastecimento, em guaranis paraguaios. Sujeitos a atualização.', 'Prices provided by YkuaPura at its refill stations, in Paraguayan guaraníes. Prices may change.'],
    ['1,5 L', '1,5 L', '1.5 L'],
    ['2.000', '2.000', '2,000'],
    ['5.000', '5.000', '5,000'],
    ['Estamos cerca tuyo', 'Estamos perto de você', 'We are nearby'],
    ['Encontrá tu punto YkuaPura', 'Encontre seu ponto YkuaPura', 'Find your YkuaPura station'],
    ['Recargá en puntos seleccionados de Encarnación, Ciudad del Este y Asunción.', 'Abasteça em pontos selecionados de Encarnación, Ciudad del Este e Asunción.', 'Refill at selected locations in Encarnación, Ciudad del Este and Asunción.'],
    ['Entrada lateral, al lado de la farmacia.', 'Entrada lateral, ao lado da farmácia.', 'Side entrance, next to the pharmacy.'],
    ['Ver en Maps ↗', 'Ver no Maps ↗', 'View on Maps ↗'],
    ['Punto de recarga autoservice.', 'Ponto de abastecimento por autoatendimento.', 'Self-service refill station.'],
    ['Puerta principal.', 'Entrada principal.', 'Main entrance.'],
    ['Ver ubicaciones y disponibilidad 24 horas', 'Ver locais e disponibilidade 24 horas', 'View locations and 24-hour availability'],
    ['Traé tu envase.', 'Traga seu recipiente.', 'Bring your container.'],
    ['Recargá cuando quieras.', 'Abasteça quando quiser.', 'Refill whenever you like.'],
    ['Consultas, soporte y sugerencias de nuevas ubicaciones.', 'Dúvidas, suporte e sugestões de novos locais.', 'Questions, support and suggestions for new locations.'],
    ['Escribir al 0992 269 255', 'Fale pelo 0992 269 255', 'Message 0992 269 255'],
    ['Agua pura al instante, tu fuente de confianza. · Paraguay', 'Água pura na hora, sua fonte de confiança. · Paraguai', 'Pure water in an instant, a source you can trust. · Paraguay'],
    ['Contactar por WhatsApp', 'Entrar em contato pelo WhatsApp', 'Contact us on WhatsApp'],
    ['YkuaPura: calidad que se controla, no solo se promete', 'YkuaPura: qualidade monitorada, não apenas prometida', 'YkuaPura: quality that is checked, not just promised'],
    ['Filtración, desinfección UV, ozono y control del proceso', 'Filtragem, desinfecção UV, ozônio e controle do processo', 'Filtration, UV disinfection, ozone and process monitoring'],
    ['Análisis fisicoquímicos y microbiológicos del agua de salida de máquina; imagen ilustrativa', 'Análises físico-químicas e microbiológicas da água na saída da máquina; imagem ilustrativa', 'Physicochemical and microbiological testing of water from the machine outlet; illustrative image'],
    ['Resultados microbiológicos comunicados por YkuaPura: ausencia de E. coli, coliformes totales, coliformes fecales y Pseudomonas aeruginosa', 'Resultados microbiológicos divulgados pela YkuaPura: ausência de E. coli, coliformes totais, coliformes fecais e Pseudomonas aeruginosa', 'Microbiological results shared by YkuaPura: absence of E. coli, total coliforms, fecal coliforms and Pseudomonas aeruginosa'],
    ['Ubicaciones YkuaPura en Encarnación, Ciudad del Este y Asunción', 'Pontos YkuaPura em Encarnación, Ciudad del Este e Asunción', 'YkuaPura locations in Encarnación, Ciudad del Este and Asunción'],
    ['YkuaPura | Agua pura al instante', 'YkuaPura | Água pura na hora', 'YkuaPura | Pure water in an instant'],
    ['YkuaPura — Agua pura al instante', 'YkuaPura — Água pura na hora', 'YkuaPura — Pure water in an instant'],
    ['YkuaPura: recarga autoservice de agua purificada. Traé tu envase, elegí la cantidad y recargá cuando lo necesites.', 'YkuaPura: autoatendimento de água purificada. Traga seu recipiente, escolha a quantidade e abasteça quando precisar.', 'YkuaPura: self-service purified water refills. Bring your container, choose the amount and refill whenever you need to.'],
    ['Recarga autoservice de agua purificada, disponible 24 horas en puntos seleccionados.', 'Abastecimento de água purificada por autoatendimento, disponível 24 horas em pontos selecionados.', 'Self-service purified water refills, available 24 hours at selected locations.']
  ];
  const translations = new Map(copy.map(row => [row[0], row]));
  const choices = {es: 0, 'pt-BR': 1, en: 2};
  const select = document.getElementById('site-language');
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, select')) continue;
    if (translations.has(node.textContent.trim())) textNodes.push([node, node.textContent]);
  }
  const attributes = [];
  document.querySelectorAll('[aria-label], [alt], meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach(el => {
    ['aria-label', 'alt', 'content'].forEach(attr => {
      if (el.hasAttribute(attr)) attributes.push([el, attr, el.getAttribute(attr)]);
    });
  });
  const originalTitle = document.title;
  const translate = (text, column) => {
    if (text.startsWith('Ampliar: ')) return ['Ampliar: ', 'Ampliar: ', 'Enlarge: '][column] + translate(text.slice(9), column);
    const row = translations.get(text.trim());
    return row ? text.replace(text.trim(), () => row[column]) : text;
  };
  function setLanguage(language, save = false) {
    if (!Object.hasOwn(choices, language)) language = 'es';
    const column = choices[language];
    textNodes.forEach(([node, original]) => { node.textContent = translate(original, column); });
    attributes.forEach(([el, attr, original]) => el.setAttribute(attr, translate(original, column)));
    document.title = translate(originalTitle, column);
    document.documentElement.lang = language === 'es' ? 'es-PY' : language;
    select.value = language;
    document.querySelector('.language-note').hidden = language === 'es';
    const message = ['Hola YkuaPura, quiero hacer una consulta', 'Olá YkuaPura, gostaria de tirar uma dúvida', 'Hello YkuaPura, I have a question'][column];
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
      const url = new URL(link.href);
      url.searchParams.set('text', message);
      link.href = url.href;
    });
    document.querySelectorAll('time[datetime]').forEach(el => {
      const [year, month, day] = el.dateTime.split('-').map(Number);
      el.textContent = new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : language === 'es' ? 'es-PY' : language, {day:'numeric', month:'short', year:'numeric', timeZone:'UTC'}).format(new Date(Date.UTC(year, month - 1, day)));
    });
    if (save) {
      try { localStorage.setItem('ykua-language', language); } catch { /* Selection still works without storage. */ }
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', language);
        history.replaceState(null, '', url);
      } catch { /* Local file previews may not support history updates. */ }
    }
  }
  let saved;
  try { saved = localStorage.getItem('ykua-language'); } catch { /* Use Spanish by default. */ }
  const requested = new URL(location.href).searchParams.get('lang');
  setLanguage(Object.hasOwn(choices, requested) ? requested : saved);
  select.addEventListener('change', () => setLanguage(select.value, true));
})();
