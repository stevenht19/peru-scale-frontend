export const Solutions: React.FC = () => {
  return (
    <section className='p-10 mt-4'>
      <h2 className='text-center text-3xl font-semibold uppercase'>Soluciones</h2>
      <ul className='grid grid-cols-3 lg:grid-cols-4 2xl:lg:grid-cols-5 gap-4 mt-10'>
        <Solution src='/solutions/solucion1.jpg' title='Agroindustria' />
        <Solution src='/solutions/solucion2.jpg' title='Alimentacion y Comercio' />
        <Solution src='/solutions/solucion3.jpg' title='Biomasa' />
        <Solution src='/solutions/solucion4.jpg' title='Construccion' />
        <Solution src='/solutions/solucion5.jpg' title='Transporte' />
      </ul>
    </section>
  )
}


const Solution = ({ src = '', title='' }) => (
  <li className='border rounded-sm'>
    <figure>
      <img src={src}  className='rounded-t-md' />
    </figure>
    <div className='p-3'>
      <h2 className='text-center'>{title}</h2>
    </div>
  </li>
)