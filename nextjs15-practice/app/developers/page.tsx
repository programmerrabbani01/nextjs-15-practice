import AllDevelopers from "@/components/DeVs/AllDevelopers.tsx";
import DevelopersForm from "@/components/DeVs/DevelopersForm.tsx";

export default function Developers() {
  return (
    <>
      <div className="container mx-auto p-10">
        <div className="developers_area grid grid-cols-[2fr_1fr]">
          <div className="deVsList">
            <div className="text-3xl font-bold mb-5">All Developers</div>
            <AllDevelopers />
          </div>
          <div className="deVsForm">
            <div className="text-3xl font-bold mb-5">Create A Developers</div>
            <DevelopersForm />
          </div>
        </div>
      </div>
    </>
  );
}
