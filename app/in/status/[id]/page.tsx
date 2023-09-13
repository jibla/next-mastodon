export default function StatusPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen justify-center">
      Status Page for {params.id}
    </div>
  );
}
