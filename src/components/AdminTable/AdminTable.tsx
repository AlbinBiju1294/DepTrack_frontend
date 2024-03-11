
import { Table } from "antd";
import { AdminTablePropsType} from './types'



const AdminTable = ({ adminDataSource,columns }: AdminTablePropsType) => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={adminDataSource}
        pagination={false}
      />
    </div>
  );
};

export default AdminTable;
