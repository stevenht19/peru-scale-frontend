// import { Form, Input } from 'antd'
// import { ClientDetail } from 'components/dashboard/requests/client-detail'
// import { ServiceDetail } from 'components/dashboard/requests/service-detail'
// import { useRequestDetail } from 'hooks/use-request-detail'
// import { useParams } from 'react-router-dom'

// export const TaskDetail = () => {
//   const params = useParams()
//   const { request } = useRequestDetail(Number(params.id))

//   if (!request) return null

//   return (
//     <div className='border-l p-4 h-screen'>
//       <ClientDetail {...request!} />
//       {request?.id_servicio && <ServiceDetail {...request} />}
//       {request.id_servicio && (
//         <Form layout='vertical' className='mt-4 max-w-[15rem]'>
//           <Form.Item
//             label='Asigna un precio al servicio'
//           >
//             <Input size='large'  addonBefore={'S/.'} />
//           </Form.Item>
//         </Form>
//       )}
//     </div>
//   )
// }





import { Button, Form, Input } from 'antd'
import { ClientDetail } from 'components/dashboard/requests/client-detail'
import { ServiceDetail } from 'components/dashboard/requests/service-detail'
import { useRequestDetail } from 'hooks/use-request-detail'
import { useParams,useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import { Routes } from 'consts/routes'


export const TaskDetail = () => {
  const params = useParams();
  const { request } = useRequestDetail(Number(params.id));
  const navigate = useNavigate();


  if (!request) return null;

  const handleCotizacionClick = () => {
    // Aquí puedes realizar alguna acción al hacer clic en el botón de cotización
    console.log('Realizar Cotización - Capturar Información:', request);

      // Navegar a la ruta de cotización
  navigate(Routes.QUOTE);
    
  };

  return (
    <div className='border-l p-4 h-screen'>
      <ClientDetail {...request!} />
      {request?.id_servicio && <ServiceDetail {...request} />}
      {request.id_servicio && (
        <Form layout='vertical' className='mt-4 max-w-[15rem]'>
          <Form.Item
            label='Asigna un precio al servicio'
          >
            <Input size='large'  addonBefore={'S/.'} />
          </Form.Item>
        </Form>
      )}

      {/* botón de realizar cotización */}
      <Button type='primary' onClick={handleCotizacionClick} className='mt-4'>
        Realizar Cotización
      </Button>
    </div>
  );
};
