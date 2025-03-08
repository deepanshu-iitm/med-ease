import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import Link from "next/link";
import Image from "next/image";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";
  return(
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
        <div className="flex items-center mb-12">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={40}
              width={40}
              alt="patient"
              className="mr-2"
            />
            <h1 className="text-3xl font-bold">MedEase</h1>
          </div>
          <PatientForm />
          
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 MedEase
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div> 
  )
};

export default Home;