import { useParams } from 'react-router-dom';
import CreatePrice from '../CreatePrice';

function EditPrice() {
    const params = useParams();

    return <CreatePrice useAs="edit" editId={params.id} />;
}

export default EditPrice;
