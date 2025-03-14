import DetailContent from "../components/DetailContent";

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default function DetailPage({ params }: DetailPageProps) {
  return <DetailContent id={params.id} />;
}
