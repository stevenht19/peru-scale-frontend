import EditDataForm from "components/forms/edit-data";
import { Header } from "layouts/header";
import { GetUserClient } from "shared/user_client";
import { message } from 'antd'

type EditProfileFormProps = {
    user1: GetUserClient;
    updateClientUser(user1: GetUserClient): Promise<void>
  };
  
  export const EditUserForm: React.FC<EditProfileFormProps> = ({ 
    user1, 
    updateClientUser, 
  }) => {
    
  
    const handleSubmit = async (updatedUser: GetUserClient) => {
      try {
        if (user1 && user1.id) {
          await updateClientUser({ ...updatedUser, id: user1.id });
          console.error('Cambios guardados');
          message.success('Se guardaron los cambios exitosamente')
        } else {
          console.error('El usuario no tiene un ID válido');
          message.success('Esto no funciona')
        }
      } catch (error) {
        console.error('Error al guardar los cambios:', error);
      }
    };

    return (
    <>
    <Header></Header>
    <div className='max-w-6xl mx-auto px-4'>
    <EditDataForm 
    user1={user1} onFinish={handleSubmit}
    />
    </div>
    </>
    
    );
    };
        
export default EditUserForm;
   
