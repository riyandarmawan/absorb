import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function Science() {
  return (
    <>
      <Card>
        <CardContent>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplhPiBmExXPGTWBflpU0cae4R_Ih4hhqtLQ&s" alt="Dr. Stephen Krashen" width="720" height="1280"></Image>
        </CardContent>
      </Card >
    </>
  );
}
