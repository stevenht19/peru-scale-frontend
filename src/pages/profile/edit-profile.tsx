import EditDataForm from "components/forms/edit-data";
import { Header } from "layouts/header";
import { CreateUser } from "shared/user";
import { message } from 'antd'

type EditProfileFormProps = {
    user: CreateUser;
    onEditUser(user: CreateUser): Promise<void>
  };
  
  export const EditUserForm: React.FC<EditProfileFormProps> = ({ 
    user, 
    onEditUser, 
  }) => {
    
  
    const handleSubmit = async (editedUser: CreateUser) => {
      try {
        if (user && user.id) {
          await onEditUser({ ...editedUser, id: user.id });
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
    user1={user} onFinish={handleSubmit}
    />
    </div>
    </>
    
    );
    };
        
export default EditUserForm;
   
