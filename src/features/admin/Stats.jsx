import { HiOutlineViewGrid, HiUser, HiCollection } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
        color="orange"
      />
      <Stat
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
      />
      <Stat
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
        color="green"
      />
    </div>
  );
}

export default Stats;
