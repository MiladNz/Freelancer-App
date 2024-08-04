import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from "react-icons/hi";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
      />
      <Stat
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        color="green"
      />
      <Stat
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="w-20 h-20" />}
        color="yellow"
      />
    </div>
  );
}

export default Stats;