import DetailContent from "../components/DetailContent";

export default function DetailPage({ params }: { params: { id: string } }) {
  return <DetailContent id={params.id} />;
}
