import AddCategoryForm from "../../components/addCategoryForm/addCategoryForm";
import AddProductForm from "../../components/addProductForm/addProductForm";
import Card from '../../components/UI/card/Card';

import './adminPage.scss';

const AdminPage = () => {
    return (
        <div className='adminpanel'>
            <Card >
                <AddCategoryForm />
                <AddProductForm />
            </Card>
        </div>
    );
}

export default AdminPage;