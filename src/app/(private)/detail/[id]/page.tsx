import { use } from "react";
import DetailContent from "../components/DetailContent";
    
export default function CategoryDetail({params}: {params: Promise<{ id: string }>}) {
const { id } = use(params);
  return (
    <>
      <DetailContent  id={id} />
    </>
  );
}