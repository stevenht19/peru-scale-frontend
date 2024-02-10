import EditDataForm from "components/forms/edit-data";
import { Header } from "layouts/header"

export const EditAccount = () => {


    return <>
    <Header></Header>
    <div className='max-w-6xl mx-auto px-4'>
    <EditDataForm></EditDataForm>
    </div>
    </>
        
    
}

export default EditAccount;