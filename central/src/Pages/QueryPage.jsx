import Order from "../Components/Query/Order";
import SearchField from "../Components/Query/SearchField";
import SelectBatch from "../Components/Query/SelectBatch";
import { setTitle } from "../utilities/functions";
const QueryPage = () => {
  setTitle("Query Student");
  return (
    <div>
      <div className="flex gap-4">
        <Order />
        <SelectBatch />
        <SearchField />
      </div>
    </div>
  );
};

export default QueryPage;
