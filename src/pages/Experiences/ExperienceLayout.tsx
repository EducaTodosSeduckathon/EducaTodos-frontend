import { Outlet } from "react-router";
import Header from "../../components/common/Header";
import { useEffect, useRef, useState } from "react";
import autoAnimate from '@formkit/auto-animate'


const ExperienceLayout: React.FC = () => {

  const [ headerOptions, setHeaderOptions ] = useState({});
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div ref={parent} className="min-h-screen">
      <Header {...headerOptions}/>
      <Outlet context={{setHeaderOptions}} />
    </div>
  );
};

export default ExperienceLayout;
