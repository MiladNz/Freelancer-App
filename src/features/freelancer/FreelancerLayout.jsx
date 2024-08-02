import AppLayout from "../../ui/AppLayout";
import { CustomNavLink } from "../../ui/CustomeNavLink";
import Sidebar from "../../ui/Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";

function FreelancerLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <CustomNavLink to={"dashboard"}>
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
          <CustomNavLink to={"projects"}>
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
          <CustomNavLink to={"proposals"}>
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default FreelancerLayout;
