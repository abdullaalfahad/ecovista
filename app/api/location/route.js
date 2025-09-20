import { NextResponse } from "next/server";
import { getAllLocations } from "./location-utils";

export async function GET() {
  const locations = await getAllLocations();

  return NextResponse.json(locations);
}
