type Producto = {
  nombre: string
  descripcion: string
  emoji: string
}

const productos: Producto[] = [
  {
    nombre: 'Pan fresco',
    descripcion: 'Hallullas, marraquetas y pan amasado recién hecho cada día.',
    emoji: '🥖',
  },
  {
    nombre: 'Mayonesa',
    descripcion: 'Perfecta para completos, sandwiches y preparaciones rápidas.',
    emoji: '🥪',
  },
  {
    nombre: 'Abarrotes',
    descripcion: 'Arroz, fideos, azúcar, aceite y productos básicos para tu casa.',
    emoji: '🛍️',
  },
  {
    nombre: 'Bebidas',
    descripcion: 'Gaseosas, jugos y bebidas para acompañar tus comidas.',
    emoji: '🥤',
  },
  {
    nombre: 'Snacks',
    descripcion: 'Papas fritas, galletas y dulces para cualquier momento.',
    emoji: '🍪',
  },
  {
    nombre: 'Productos de feria',
    descripcion: 'Frutas y verduras frescas según disponibilidad del día.',
    emoji: '🍎',
  },
]

const destacados = [
  {
    titulo: 'Compra rápida',
    texto: 'Haz tu pedido de forma simple y recibe una atención directa y cercana.',
    emoji: '⚡',
  },
  {
    titulo: 'Productos frescos',
    texto: 'Una maqueta visual pensada para mostrar feria, pan y abarrotes con estilo.',
    emoji: '🌿',
  },
  {
    titulo: 'Atención por WhatsApp',
    texto: 'Botón directo para que tus clientes te escriban apenas entren a la página.',
    emoji: '💬',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.35),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.18),_transparent_25%),linear-gradient(to_bottom,_#fff7ed,_#fefce8,_#f0fdf4)] text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-orange-200/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-400 to-lime-300 text-2xl shadow-lg shadow-orange-200">
              🧺
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-zinc-900">Lowcost Lukas</h1>
              <p className="text-sm text-zinc-600">De la feria directo a la comodidad de tu casa</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-semibold text-zinc-700 md:flex">
            <a href="#inicio" className="transition hover:text-orange-600">Inicio</a>
            <a href="#productos" className="transition hover:text-orange-600">Productos</a>
            <a href="#destacados" className="transition hover:text-orange-600">Destacados</a>
            <a href="#nosotros" className="transition hover:text-orange-600">Nosotros</a>
            <a href="#contacto" className="transition hover:text-orange-600">Contacto</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-40 w-40 rounded-full bg-lime-300/20 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
            Feria, pan y abarrotes en una maqueta moderna
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
            Un diseño más fresco, colorido y cercano para tu negocio
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-700">
            Esta maqueta está pensada para que mañana solo reemplacemos las imágenes de ejemplo por tus fotos reales y tu página ya se vea como una tienda de verdad.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5"
            >
              Ver catálogo
            </a>

            <a
              href="https://wa.me/56950137514"
              className="rounded-2xl border border-orange-200 bg-white px-6 py-3 text-sm font-bold text-zinc-800 shadow-sm transition hover:bg-orange-50"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/90 p-4 text-center shadow-sm ring-1 ring-orange-100">
              <p className="text-2xl">🥖</p>
              <p className="mt-2 text-sm font-bold text-zinc-900">Pan fresco</p>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 text-center shadow-sm ring-1 ring-orange-100">
              <p className="text-2xl">🥬</p>
              <p className="mt-2 text-sm font-bold text-zinc-900">Feria</p>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 text-center shadow-sm ring-1 ring-orange-100">
              <p className="text-2xl">🛍️</p>
              <p className="mt-2 text-sm font-bold text-zinc-900">Abarrotes</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-orange-100 ring-1 ring-orange-100 md:col-span-2">
              <div className="flex h-64 items-end rounded-[1.5rem] bg-[linear-gradient(135deg,_#fdba74,_#fde68a,_#bbf7d0)] p-6">
                <div className="rounded-2xl bg-white/85 px-5 py-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-700">Imagen de maqueta</p>
                  <h3 className="mt-2 text-2xl font-black">Canasta de feria</h3>
                  <p className="mt-1 text-sm text-zinc-600">Aquí mañana podemos poner una foto real de tus productos.</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-lg ring-1 ring-orange-100">
              <div className="flex h-44 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,_#fed7aa,_#fef3c7)] text-7xl">
                🥖
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-lg ring-1 ring-orange-100">
              <div className="flex h-44 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,_#dcfce7,_#fef9c3)] text-7xl">
                🍎
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Catálogo visual
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Productos principales</h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
              Dejé una selección de categorías para que la página ya tenga forma. Mañana podemos reemplazar cada bloque por productos reales y fotos de tu negocio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productos.map((producto) => (
              <article
                key={producto.nombre}
                className="group overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-44 items-center justify-center bg-[linear-gradient(135deg,_#fdba74,_#fef3c7,_#dcfce7)] text-7xl">
                  {producto.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-zinc-900">{producto.nombre}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{producto.descripcion}</p>
                  <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 transition-all duration-300 group-hover:w-24" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="destacados" className="py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {destacados.map((item) => (
              <div key={item.titulo} className="rounded-[1.75rem] bg-white/90 p-6 shadow-sm ring-1 ring-orange-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-lime-100 text-2xl">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-black">{item.titulo}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-zinc-900 p-8 text-white shadow-xl shadow-zinc-300/30">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Nuestro negocio</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Lowcost Lukas, una tienda práctica y cercana para el barrio
            </h2>

            <p className="mt-5 leading-7 text-zinc-300">
              El diseño mezcla colores cálidos, detalles frescos y una presentación moderna para transmitir cercanía, rapidez y productos del día. La idea es que tus clientes sientan confianza apenas entren a la web.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <h3 className="text-xl font-black">Más color</h3>
              <p className="mt-2 text-zinc-600">Se agregó un fondo degradado y bloques visuales más vivos para que la página se sienta activa y atractiva.</p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <h3 className="text-xl font-black">Maqueta con imágenes</h3>
              <p className="mt-2 text-zinc-600">Por ahora dejé imágenes de maqueta con fondos visuales y símbolos. Mañana las cambiamos por fotos reales.</p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <h3 className="text-xl font-black">Preparada para crecer</h3>
              <p className="mt-2 text-zinc-600">Luego podemos agregar precios, ofertas del día, delivery y una galería de productos reales.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="pb-24 pt-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-500 via-amber-400 to-lime-400 p-[1px] shadow-[0_18px_50px_rgba(251,146,60,0.22)]">
            <div className="rounded-[calc(2rem-1px)] bg-white px-8 py-10 text-center">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                Contacto
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Haz tu pedido</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
                Tu maqueta ya quedó lista con tus datos reales para que mañana solo sumemos fotos y detalles finales.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-orange-50 p-5">
                  <p className="text-sm font-semibold text-zinc-500">WhatsApp</p>
                  <p className="mt-2 font-bold text-zinc-900">+56 9 5013 7514</p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-5">
                  <p className="text-sm font-semibold text-zinc-500">Dirección</p>
                  <p className="mt-2 font-bold text-zinc-900">Til Til 1980, Ñuñoa</p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-5">
                  <p className="text-sm font-semibold text-zinc-500">Horario</p>
                  <p className="mt-2 font-bold text-zinc-900">09:00 a 21:00</p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-5">
                  <p className="text-sm font-semibold text-zinc-500">Instagram</p>
                  <p className="mt-2 font-bold text-zinc-900">@lowcostlukas</p>
                </div>
              </div>

              <a
                href="https://wa.me/56950137514"
                className="mt-8 inline-block rounded-2xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg shadow-green-200 transition hover:-translate-y-0.5"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/56950137514"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-2xl shadow-green-300 transition hover:scale-105"
      >
        <span className="text-xl">💬</span>
        WhatsApp
      </a>

      <footer className="border-t border-orange-200/70 bg-white/80 py-8 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-500">
          © 2026 Lowcost Lukas. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  )
}

