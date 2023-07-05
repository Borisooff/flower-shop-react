import AddCategoryForm from "../../components/addCategoryForm/addCategoryForm";
import AddProductForm from "../../components/addProductForm/addProductForm";
import Card from '../../components/UI/card/Card'

const AdminPage = () => {
    return (
        <Card>
            <AddCategoryForm />
            <AddProductForm />
        </Card>
    );
}

export default AdminPage;