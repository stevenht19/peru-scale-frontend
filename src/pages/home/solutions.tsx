export const Solutions: React.FC = () => {
  return (
    <section className='p-10 mt-4'>
      <h2 className='text-center text-3xl font-semibold uppercase'>Soluciones</h2>
      <ul className='grid grid-cols-3 lg:grid-cols-4 2xl:lg:grid-cols-5 gap-4 mt-10'>
        <Solution src='/solutions/solucion1.jpg' title='Holaaa' />
        <Solution src='/solutions/solucion2.jpg' title='Holaaa2' />
        <Solution src='/solutions/solucion3.jpg' title='Holaaa3'/>
        <Solution src='/solutions/solucion4.jpg' title='Holaaa4'/>
        <Solution src='/solutions/solucion5.jpg' title='Holaaa5'/>
      </ul>
    </section>
  )
}


const Solution = ({ src = '', title = '' }) => (
  <li className='border rounded-sm'>
    <figure>
      <img src={src} className='rounded-t-md' />
    </figure>
    <div className='p-3'>
      <h2 className='text-center'>{title}</h2>
    </div>
  </li>
)